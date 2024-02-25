import React from "react"
import './App.css'
import Background from "./Components/Background/Background.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx"
import Hero from "./Components/Hero/Hero.jsx"
function App() {
  let heroData=[{text1:"Dive into",text2:"what you love"},{text1:"Indulge",text2:"your passion"},{text1:"Give in to",text2:"your passions"}]
  let [heroCount,setHeroCount] = React.useState(0);
  let [playStatus,setPlaystatus] = React.useState(false);

  function Photoslider(){
  setHeroCount((count)=> count==2?0:count+1)
  }

  React.useEffect(()=>{setInterval(()=>{Photoslider()},3000)},[])
  /*React.useEffect(()=>{setInterval(()=>{setHeroCount((count)=> count==2? 0 : count+1)},3000)},[])*/
  return (
    <>
    <Background playStatus={playStatus} heroCount={heroCount}/>
    <Navbar/>
    <Hero setPlaystatus={setPlaystatus} heroData={heroData[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount} playStatus={playStatus}/>
    </>
  )
}

export default App
