import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() =>{
    axios.get("/api/jokes")           // har baar bada url n likha pade eske liye proxy create karna hai. way of writing proxy is either put into env variable or do configuration in vite config file. /api pe jo v request jaygi uske pich proxy k karan localhost:3000 append ho jaygi aur proxy lag jaygi ki jo request aa rhi hai wo esi localhost wale url se aa rhi hai matlab server ko lagega ki url req ka orgin localhost;3000 hai matlab same server hai kyuki application usi server pr chal rhi to localhost....  app ko production m dalne pe to vite config m change karna hai ki api ab server k url se aa rhi hai...  
    .then((response) => {
      setJokes(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  })

  return (
    <>
      <h1>Hello</h1>
      <p>Jokes: {jokes.length}</p>


      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App


// axios provides additional functionality and features. This lib is written especially for web request. data kis tarah se aa rha hai, kaise handle ho rha hai, fail aur loading time kya situation hogi, bich data ko rok k kuch add karna ho uske andar. respnse jo aata hai usko json se parse wagera ni karna pad rha hai kyuki ye sab axios handle kar leta hai... Read about axios and its form parsing on npmjs and github.

// cors provides safety to application. Server kisi dusre domain/port pe chal sakti hai aur yaha pplication kisi alag port pe chal rhi hai to aisa nhi hona chahiye ki koi v aa k data le jaaye, esse problem hoga ki server pe bahut jyada request aa sakti hai jo bill badha sakti hai. case of cross origin: diff url, diff port etc. solution: IP whitelist, domain whitelist, install cors in backend code. cors packages also proides option to whitelist url/origin. whitelisting karte waqt ye dhyan rakhna hai ki localhost aur production m kis kis tarike se ho rhi hai kyuki production m jaruri nhi hai ki backend usi 3000 port pe chale. for exmple production m vercel aur netlify kaun kaun se port pe server kar rha hai, uski v whitelisting karni padti... dusre solutions hai api ko aise hi server m nhi likte usko /api/v1/jokes ya api/jokes kuch es tarah se likh k karte. proxy ka use kar k v cors handle kar sakte hain. summary: backend m cors install kar k aur frontend m proxy se resolve kar skate


// bad practice in production: kai log react app ko build kar k dist folder ko backend m daal k chla dete hai static file serve kar k... aise case m agar kuch frontend m change kiye to wo change dikhega nhi kyuki uske liye fir se build karni hogi dist folder ko aur fir esko backend m purana folder se replace karni hogi...

