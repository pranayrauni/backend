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
- Second approach: mongoose connection ka code kisi dusre file m likhte hain aur usko fir import kar run karenge
- 
- Code consistancy main karne k liye dotenv ko require k wajay import karenge par esme kuch configuration karne padegnge... ye connfiguration se btanaa padega ki env file kaha haia aur package.json file m v configuarion kar l btana padega. Configuration after importing: 
`dotenv.config({
    path: './env'
})`    
Configuration in package.json file to be written under script: 
` "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js" `

- Agar env variable m change hoga to server fir se start karna hi padega.. nodemon kuch nhi kar sakta


- app.use tab use karte jab koi configuration setting karni ho ya middlewares k case m  
- cookie-parser ka use cookies se related kaamo m karte hain. server se browser k cookies access karne aur set karne k liye
- Task: cors, cookie-parser k bare m padho
- data alag alag tarike se aa sakta hai jaise url form json etc to eske liye v configuration karni padti hai taki bahut sara data n aa jaye.
- For json `app.use(express.json())` 
- For url `app.use(express.urlencoded({extended: true, limit: "16kb"}))`
- Read about this[dot]data in nodejs
- Read about server status code
- ApiError aur ApiResponse k file utils m bnaye taki jo v error aur response aaye wo esi se h k jaye


- mongodb jaise hi data save karta hai ek unique id generate karta hai BSON data m not json.

- watch history ko handle karne k liye `mongoose-aggregate-paginate-v2` package ka use karenge taki aggregation queries likh sake.

- mongoose v middleware provide karta hai jaise `pre` ye data save hone k just pahle run hoga aur function k andar kuch v likh k run karwa sakte

- token secret production software m cryptographic algo se generate kar k use kiya karo

- access token database m store nhi karenge.. refresh token ko database m store karenge

- cutom methods bna k password comapre aur tokens generate karenge


### Cloudinary file upload
- file upload k liye multer package ka use kar sakte hai ye express fileupload.
- File upload ho k pahle server pe aaygi fir usko cloudinary pe upload kiya jayga waha se file k url le k usko databae store kiya jyaga aur server par se file delete kar di jaygi
- read about multer
- file ko DiskStorage m save karwao. MemoryStorage m problem hogi agar badu file aa gyi to.
- file name ko unique hi rakhna chahiye kyuki agar same naam se file aa gyi to rewrite ho jaygi

### HTTP

- HTTP and HTTPS m protocol ka difference hai sirf, technology way of communication enme kuch major difference nhi hai... HTTP m data clear text m jaati par HTTPS m data encryption layer lag jati hai
- URL: Uniform Resource Locatar
- URI: Uniform resource Identifier
- URN: Uniform Rsource Name
- Jaise http req bhejte hai to sath m ki info bhejnhi hoti hai to wahi metadata hai aur esi ko headers bolte hai
- metadata: key-value sent alog with req and res
- kuch headers already defined hai ki ye aayga to ye expect karta hu...
 khud k headres v bnaye jaa sakte hain
- headers es baat pe v depend karta hai ki kaise req bheji gyi hai for example programtically, postamn, thunderclient
- headers k bahut kaam hote hai for example caching, authentication, state management (guest user, loggedin user, etc) 
- x-prefix was used in headers. example x-name. now deprecated
- Request header => from client
- Response header => from server
- Representation header => encoding/compression. network ki limit hai data bhejne ki us case m compress karna padta hai for example zerodha jaise application m
- Payload header => data
- Common headers: Accept: application/json,   ye btata hai kis type ka data accept karne wala hu, html ka data accept karna ho to text/html 
- User-Agent => ye btata hai ki kaun si application se request aayi hai for example postman or browser(kaun sa browser tha kaun sa engine support kar rha tha kaun sa operating system), website visit karne pop aata hai ki app use kariye wo esi ka use kar k pata karte hai
- Authorization => jwt token bheja jata hai Bearer kyword k sath prefix m  
- Content-Type => image pdf etc
- Cookie => key value pair, jaise user ko kitne time tak login rakhna hai etc
- Cache-Control => data kab expire karna hai agar data network m rahna chah rha hai

- CORS header: kaha se request aa sakti hai... Access-Control-Allow-Origin, Acess-Control-Allow-Credentials, Access-Control-Allow-Method 
- Security: Cross-Origin-Embedder-Policy, Cross-Origin-Opener-Policy, Content-Security-Policy, X-XSS-Protection

#### HTTP Methods
- Basic set of operatio that can be used to interact with server
- GET : retrieve a resource
- HEAD : No message body (response headers only)
- OPTIONS : What operation are available
- TRACE : loopback test (get soem data), proxy wagera k karan data late se aa rha hai ya hopping bhaut jyada ho rhi hai tab use hoti hai
- DELETE : remove a response
- PUT : replace a resource
- POST : interact with resource
- PATCH : change part of a resource

#### Status code
- 1xx : Informational
- 2xx : Success
- 3xx : Redirection
- 4xx : Client error
- 5xx : server error


- 100 : continue, 102: processing, 200: ok, 201: created, 202: accepted, 307: temperory redirect, 308: permanent redirect, 400: bad request, 401: unauthorized, 402: payment required, 404: not found, 500: internal server error, 504: gateway timeout