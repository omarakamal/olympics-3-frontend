import axios from 'axios';
import {useState} from 'react'
import { useNavigate } from 'react-router';

function CreateZaid() {
    const [formData, setFormData] = useState({
    Name:"",
    ZaidImage: "",
  });

  
  const navigate = useNavigate()
  function handleChange(event){
    setFormData({...formData, [event.target.name]:event.target.value})
  }


  
    async function handleSubmit(event){
      const createdHoot = await axios.post(`${import.meta.env.VITE_BACK_END_SERVER_URL}/zaids`,formData)
      navigate('/zaids')
    }

  
  return (
    <div>
        <h1>Create Zaid</h1>
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

export default CreateZaid