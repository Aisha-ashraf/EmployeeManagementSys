import  { useState } from 'react'



const Login = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const sumbmitHandler = (e) =>{
        e.preventDefault();
        console.log("email is" , email);
        console.log("password is" , password);
        setEmail("");
        setPassword("");
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
  <div className='border-2 border-emerald-600 p-20 rounded-xl'>
    <form 
    onSubmit={(e) =>{
        sumbmitHandler(e);
    }}
    className='flex flex-col items-center justify-center'>
      <input value = {email} onChange={(e) =>setEmail(e.target.value)} required className ='text-black text-xl outline-none bg-transparent border-2 border-emerald-600 rounded-full placeholder:text-white py-3 px-5' type = "email"  placeholder = "Enter your Email"/>
      <input value ={password} onChange={(e) =>setPassword(e.target.value)}required className = ' text-black text-xl outline-none bg-transparent border-2 border-emerald-600 rounded-full placeholder:text-white py-3 px-5' type = "password" placeholder ="Enter your Password" />
      <button className = 'mt-5 text-white border-none text-xl outline-none  border-2 bg-emerald-600 rounded-full placeholder:text-white py-3 px-5' >Login </button>
    </form>
  </div>
  </div>
  )
}

export default Login