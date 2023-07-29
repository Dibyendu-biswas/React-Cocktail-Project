import React from 'react'
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"

const Signup = () => {
  const navigate= useNavigate()

  const submit=()=>{

    toast.success("successfully signup")
    navigate("/")
    
  }
 
  return (
    <div className='signup'>
      <h2>signup</h2>
    <form>
      <div className='form_item'>
      <label htmlFor="name">firstname : </label>
      <input type="text" name='firstname' id='name' placeholder='dibyendu' />
      </div>
    <div className="form_item">
    <label htmlFor="lastname">lastname : </label>
      <input type="text" name='lastname' id='lastname' required placeholder='biswas' />
    </div>
      <div className="form_item">
      <label htmlFor="email">email : </label>
      <input type="email" name='email' id='email' required placeholder='abc@gamil.com' />
      </div>
      <div className='form_item'>
      <label htmlFor="password">password : </label>
      <input type="password" name='password' id='password' placeholder='123456' />
      </div>
    </form>
    <button  onClick={submit} className='from_submit'>
      submit
    </button>
    </div>

  )
}

export default Signup