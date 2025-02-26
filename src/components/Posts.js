import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import { getTotal } from './Table'

function Posts() {
  const [posts, setPosts] = useState([])
  const [filterData, setFilterData] = useState([])
  const [likesLimit, setLikesLimit] = useState("all")
  const [search, setSearch] = useState("")
  // const [formData, setFormData] = useState({})
  const titleRef = useRef() // is used to 
  const userIdRef = useRef()

  console.log("likesLimit", likesLimit)

  useEffect(() => {
    // alert("useeffect chl gya")
    if (likesLimit !== "all") {
      const filt = posts.filter(p => p.reactions.likes > likesLimit)
      setFilterData(filt)
    } else {
      setFilterData(posts)
    }

  }, [likesLimit])

  useEffect(() => {
    //     fetch("http://localhost:5000/").then(res => res.json()).then(
    //       (data) => {
    // console.log("backend", data, typeof data)
    //       }
    //     )
    fetch('https://dummyjson.com/posts').then((res) => res.json())
      .then((data) => {
        setPosts(data.posts)
        setFilterData(data.posts)
      })
      .catch((err) => console.log("error", err))
  }, [])

  console.log(posts)



  const allLikes = posts.map(p => p.reactions.likes)
  const totalLIkes = getTotal(allLikes)

  const handleAddPost = () => {

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: userIdRef.current.value,
        title: titleRef.current.value
      })
    })
      .then(res => res.json())
      .then(console.log);
  }
  // console.log(to)

  const handleSearch = (e) => {
    const value = e.target.value
    // Example1- "Dave wasn't exactly sure how he had ended up".includes("5") return false
    //Example2 "Dave wasn't exactly sure how he had ended up".includes("Dave") return true
    const filterUsers = posts.filter(obj => obj.title.toLowerCase().startsWith(search.toLowerCase())
      // || obj.title.toLowerCase().includes(search.toLowerCase()) 
    )
    if (value.length > 0) {
      setFilterData(filterUsers)
    } else {
      setFilterData(posts)
    }
    setSearch(value)
  }

  // state bnayege search (string) or filterState (Array)
  // Search Input  bnayege phir handlesearch handler bnayege or input mai pass krayenge search state k saath
  // ek const mai pots ko filter krenge by condttion jo check krega obj.title ko (in lowercase) 
  // startsWith string method mai search state pass krayenge jo 
  // check krega agar string start hoti hai to use filter krdega 
  // phir setFilterState mai filter data set krelenge
  // condition wala const bnayege currentUsers

  // const currentUsers = search.length > 0 ? filterData : posts

  return (
    <div>
      <Navbar />
      <div>
        <div className='search mb-2'>
          <label className='mx-1' htmlFor='search'>Search</label>
          <input className='border border-gray-500 p-2 rounded-md' value={search} id='search' onChange={(e) => handleSearch(e)} />
        </div>
        <div>
          <select onChange={(e) => setLikesLimit(e.target.value)}>
            <option value={"all"}>ALL</option>
            <option value={50}>50</option>
            <option value={100}>100</option>




          </select>
        </div>
        <table className='border border-black w-full bg-sky-200 '>
          <tr className='border border-black bg-sky-950 text-white'>
            <th className='border border-black p-3'>ID</th>
            <th className='border border-black'>Title</th>
            <th className='border border-black'>Likes</th>
            <th className='border border-black'>Dislikes</th>
            <th className='border border-black'>UserID</th>
            <th className='border border-black'>Views</th>

          </tr>
          {filterData.map((p) => {

            return <tr className='border border-black w-full text-center'>
              <td className='border border-black'>{p.id}</td>
              <td className='border border-black text-start px-10'>{p.title}</td>
              <td className='border border-black'>{p.reactions.likes}</td>
              <td className='border border-black'>{p.reactions.dislikes}</td>
              <td className='border border-black'>{p.userId}</td>
              <td className='border border-black'>{p.views}</td>
            </tr>
          })}
        </table>
        {totalLIkes}
      </div>
      <div className='relative'>
        <div className='flex'>
          <label>Title</label>
          <input ref={titleRef} // ref attribute mai username ref ko dalenge
            className='border border-gray-400' />
        </div>
        <div className='flex'>
          <label>userId</label>
          <input ref={userIdRef} className='border border-gray-400' />
        </div>

        <button onClick={handleAddPost} className='mx-12 border border-red-400 p-2' > add </button>

      </div>
    </div>
  )
}

export default Posts