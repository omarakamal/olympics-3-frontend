import React from 'react'
import { useState, useEffect} from 'react'
import { Link } from 'react-router'
function AllZaids() {
    const [ zaids, setZaids ] = useState([])

    async function getAllZaids(){
        const response = await axios.get(`${import.meta.env.VITE_BACK_END_SERVER_URL}/zaids`)
        setZaids(response.data)
    }

    useEffect(()=>{
        getAllZaids()
    },[])
  return (
    <div>
        <h1>All Zaids</h1>
        {zaids.map((oneZaid)=>
        {<Link key={oneZaid._id} to={'/zaids/${oneZaid._id}'}>
            <h2>{oneZaid.name}</h2>
            <img className='zaid-img' src={oneZaid.zaidImage} alt={oneZaid.name} />
        </Link>}
    )}
    </div>
  )
}

export default AllZaids