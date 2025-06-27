import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.models.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const registerUser = asyncHandler(async (req, res) => {
    // get user details from frontend
    // validations - not empty, password length etc
    // check if user already exists : username or email
    // check for images and avatar
    // upload images to cloudinay
    // create user object - create entry in database
    // remove password and refresh token feed from response
    // check for user creation
    // return response

    const {fullname, email, username, password} = req.body
    // console.log("email: ", email)

    // if(fullname === ""){
    //     throw new ApiError(400, "full name is required")      // es tarah se condition check karenge to har kisi ko check karna padega esliye dusre tarike se karo
    // }

    if (
        [fullname, email, username, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    } 

    const existedUser = await User.findOne({
        $or: [{username}, {email}]
    })

    if(existedUser){
        throw new ApiError(409, "User with this email or username already exists")
    }

    // console.log(req.files) 


    const avatarLocalPath = req.files?.avatar[0]?.path             // multer req.files ka access deta hai... middleware req k andar aur jyada fields add kar deta hai 
    // const coverImageLocalPath = req.files?.coverImage[0]?.path      // ye coverImage upload nhi hone pe error dega kykuki hamne assume kar liya hai ki files m coverimage hai

    let coverImageLocalPath;
    if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path
    }

    if(!avatarLocalPath) {
        throw new ApiError(400, "Avatar is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar) { 
        throw new ApiError(400, "Problem during upload on cloudinary")
    }

    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken")    //yaha se id se find kar k usme se password aur refreshToken remove kar diya gya hai
    // select m sara chij selected rahta hai to jo v remove karna hai uske aage minus lga do

    if(!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully")
    )


}) 


export {registerUser}