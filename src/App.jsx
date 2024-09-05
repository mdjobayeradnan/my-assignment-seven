import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import './App.css'
import Banner from './components/Bannner/Banner'
import Title from './components/Section-title/Title'
import Items from './components/Items/Items'
import Navbar from './components/Navbar/Navbar'



import WantToCooks from './components/WantToCooks/WantToCooks'





function App() {

  const [wantToCooks, setWantToCooks] = useState([]);
  const [currentlyCooking,setCurrentlyCooking] = useState([])
  
  const  CookTime =  item  =>{
  const newCookTimes = [...wantToCooks, item]
  console.log(item)
setWantToCooks(newCookTimes)

  }


  

 
 

  return (
    
    <>
<Navbar></Navbar>
<Banner></Banner>
<Title></Title>


<div className='flex w-[1280px] border-2 border-red- mx-auto'>
<Items   CookTime ={CookTime} wantToCooks={wantToCooks}></Items>
<WantToCooks wantToCooks ={wantToCooks}>

</WantToCooks>

</div>



    



    
      </>
 );
} ;


export default App
