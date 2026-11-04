import axios from 'axios';
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router'


function UpdateZaid() {

    const [formData, setFormData] = useState({
    name:"",
    zaidImage: "",
  });

    const { zaidId } = useParams()

      async function getZaid(){
    const response = await axios.get(`${import.meta.VITE_BACK_END_SERVER_URL}/zaids/${zaidId}`)
    setFormData(response.data)
  }


  
  const navigate = useNavigate()
  function handleChange(event){
    setFormData({...formData, [event.target.name]:event.target.value})
  }


  
    async function handleSubmit(event){
      event.preventDefault()
      const createdHoot = await axios.put(`${import.meta.env.VITE_BACK_END_SERVER_URL}/zaids/${zaidId}`,formData)
      navigate('/zaids')
    }

  useEffect(()=>{
      getZaid()
  },[])

  return (
    <div>
        <h1>Update Zaid</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Zaid Name: </label>
            <input 
            name="name"
            type="text"
            id="name"
            onChange={handleChange}
            value={formData.name}
            />
            <label htmlFor="zaidImage">Zaid Image: </label>
            <input 
            name="zaidImage"
            type="text"
            id="zaidImage"
            onChange={handleChange}
            value={formData.zaidImage}
            />
            <button>Create Zaid</button>
          </form>
    </div>
  )
}

export default UpdateZaid