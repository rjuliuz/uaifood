import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL, header } from '../../constants/urls'

const Autocomplete = () => {

  const [data, setData] = useState([])
  const [input, setInput] = useState('') 
  const [display, setDisplay] = useState(false) 


  useEffect(()=> {
    async function getData(){

      const response = await axios.get(`${BASE_URL}/cities?q=${input}`, header)

      setData(response.data.location_suggestions)
    }
    getData()
  }, [input])

  console.log(data)

  function inner({name}){
    var selector  = document.querySelector('input')
    selector.innerHTML(name)
  }
  

  return (
    <>
    <p>Zomato Autocomplete</p>
      <input type="text" placeholder="digite um local" value={input} onChange={(e) => {setInput(e.target.value);setDisplay(true) }} />
      {display && (
        data
          .map((value, index) => {
          return(
            <div onClick={()=>{setInput(value.name);setDisplay(false)}}>
            <p>{value.name}</p>
            <p>{value.state_name}</p>
            </div>
          )
        })
      ) 
      }
    </>
  )
}

export default Autocomplete