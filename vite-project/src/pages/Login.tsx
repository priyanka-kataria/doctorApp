import React, { useState } from 'react'

export default function Login() {

  const [state, setState] = useState('sign-up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('');

  5
  const onSubmit = async (event) => {
    event.preventDefalt();

  }

  return (
    <div>
      <form className="min-h-[80vh] flex items-center">
        <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg" >
          <p className="text-2xl font-semibold" > {state === 'sign-up' ? "Creact Account" : "Login"} </p>
          <p> Please {state === 'sign-up' ? "sign-up" : "Login"} to book appointment</p>

          {
            state === 'sign-up' && (     <div className="w-full " >
              <label>Full Name</label>
              <input placeholder='Name' className="border border-[#DADADA] rounded w-full p-2 mt-1" type="text" required onChange={(e) => setName(e.target.value)} value={name}></input>
  
            </div>)
          }
     
          <div className="w-full " >
            <label>Email</label>
            <input className="border border-[#DADADA] rounded w-full p-2 mt-1" type="text" required onChange={(e) => setEmail(e.target.value)} value={email} ></input>

          </div>
          <div className="w-full " >
            <label>Password</label>
            <input className="border border-[#DADADA] rounded w-full p-2 mt-1" type="text" required onChange={(e) => setPassword(e.target.value)} value={password}></input>

          </div>
          <button className="bg-primary text-white w-full py-2 my-2 rounded-md text-base"> {state === 'sign-up' ? "Create Account" : "Login"}</button>
        
          { state==='sign-up'?<p> Already have an account?<span className="text-primary underline cursor-pointer" onClick={()=>setState('Login')}>Login here</span>
          </p>: <p> Create an new account?<span className="text-primary underline cursor-pointer"  onClick={()=>setState('sign-up')}>click here</span>
          </p>}
        </div>
      </form>
    </div>
  )
}
