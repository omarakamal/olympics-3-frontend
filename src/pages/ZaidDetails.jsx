import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router'

function ZaidDetails() {
  const { zaid, setZaid } = useState(null)

  const { id } = useParams()
  const navigate = useNavigate()

  async function getZaid(){
    const response = await axios.get(`${import.meta.env.VITE_BACK_END_SERVER_URL}/zaids/${id}`)
    setZaid(response.data)
  }

  async function deleteZaid(){
    const response = await axios.delete(`${import.meta.env.VITE_BACK_END_SERVER_URL}/zaids/${id}`)
    navigate('/zaids')
  }

  useEffect(()=>{
      getZaid()
  })
  return (
    <div>
        <h1>Zaid Details</h1>

  
          <>
          <img className='zaid-img' src={zaid.zaidImage} alt={zaid.name}/>
            <h2>{zaid.name}</h2>
            <button onClick={deleteZaid(id)}>Delete Zaid</button>
            <Link to={`/zaids/${id}/edit`}>Edit Zaid</Link>
          </>
  
    </div>
  )
}

export default ZaidDetails