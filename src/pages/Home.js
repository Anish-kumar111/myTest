import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import "../css/home.css"
import bannerImg from "../images/home/banner.webp"
import Table from '../components/Table'
import Form from '../components/Form'
import Callback from '../practice/Callback'
function Home() {

  const [showTable, setShowTable] = useState(true)
  const [data, setData] = useState({})
  const halfLen = (data) => {
    /// code here
    const len = data.length / 2
    alert(`${len} ${data}`)
  }
  const handleSHow = () => {
    setShowTable(!showTable)
  }

  useEffect(() => {
    const url = "https://dummyjson.com/quotes/1"
    const respPromise = fetch(url) // promise object
    respPromise.then((res) => res.json()) // then promise to convert to json
      .then((resData) => {
        // console.log(data)
        setData(resData)
        // console.log("resData", resData)
      }) // then 
      .catch((err) => console.log("ERROR", err))
  }, [])


  console.log("hello")

  return (
    <div>
      <Navbar />
      {/* <img src={bannerImg} className='h-[260px]'/>
       */}
      {/* <Form halfLen={halfLen}/> */}
      {data.quote}
      <button className='border border-red-400 px-3 mx-2' onClick={handleSHow} >{showTable ? "hide" : "show"} table </button>
      {showTable ? <Table /> : <div className='mt-10 mx-4'>no data...</div>}



      {/* <Callback /> */}
    </div>
  )
}

export default Home