# Data modelling
In backend project, the first question should be what data will be stored( kaha store hoga ye av ki problem nhi hai ) like email, username, password, photo etc. Data fields nd its format are very important. 
There are tools for sschema design and data modelling like moon modeler.

Data modelling defining structure for data. For example what fiels are going to be  in hospital management application like patient's field, doctor's field, staff's field, fields of medical history etc and how those fields are connected. In these tools field models are made and code is generated automatically. Another tool is eraser.io. 

During making schema first think of storing data for example register/signup page. Make diagram for those fields and how they are connected to each other. 

mongoose or prisma is helper that helps storing these kinds of data.



# Professional backend


- Backend project youtube-twitter model link: https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj 

## Steps

####  1. npm init -y
#### 2. create public folder and temp folder inside public folder
#### 3. create dotenv file and gitignore file
#### 4. nodemon config in package.json
#### 5. type module config in package.json
#### 6. create src folder and create files like app, constants and index inside it
#### 7. install prettier and configure it 
#### 8. create other folders like controllers, middlewares, etc inside src
#### 9. connect to mongodb database



- gitignore file ka content google pe kisi v gitignore generate karne wali website kar sakte hain

- env variable system se uthaye jate hain taki secure rahe, ye file nhi liye jate. Deployment k time env variables k alag fields hote waha add karna hota hai.

- Team m code likhte time comma, space wagera ka conflict n ho eske liye Prettier ka package v as devDependencies install kar lena acha hota hai har project m. Esme kuch setting karni hoti hai install karne k baad. Ek file create karo [dot]Prettierrc fir usme jaisa chahiye wo likh do. Sath m [dot]prettierignore file v create karo jo file ignore karwani ho.. for example [dot]env file

- While talking to database always use try-catch and async-await.
- Write database name inside constant js file

### Database connection approach
- First approach: Write th connection code inside a function or IIFE. 
- 
- Code consistancy main karne k liye dotenv ko require k wajay import karenge par esme kuch configuration karne padegnge... ye connfiguration se btanaa padega ki env file kaha haia aur package.json file m v configuarion kar l btana padega. Configuration after importing: 
`dotenv.config({
    path: './env'
})`    
Configuration in package.json file to be written under script: 
` "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js" `

- Agar env variable m change hoga to server fir se start karna hi padega.. nodemon kuch nhi kar sakta


