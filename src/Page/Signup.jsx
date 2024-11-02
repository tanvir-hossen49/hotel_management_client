import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";

const SignUp = () => {
    const [disable,setDisable]=useState(true)

    
    const {handleSubmit,register,control}=useForm()
    const password=useWatch({control,name:'password',defaultValue:''})
    const confirmPassword=useWatch({control,name:'confirmPassword',defaultValue:''})
    useEffect(()=>{
        if(password!==undefined&&
         password!==''&&
         confirmPassword!==undefined&&
         confirmPassword!==''&&
         password==confirmPassword
        ){
         setDisable(false)
         console.log(password,confirmPassword)
        }else{
         setDisable(true)
        }       
     },[password,confirmPassword])
    const onSubmit=data=>{
        console.log(data)
    }
    return (
        <div className="flex bg-slate-400 h-screen items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex   flex-col p-6 bg-white md:w-1/3 rounded-md"  action="">
                <h1 className="text-center text-slate-900 text-2xl font-semibold mb-8">SingUp</h1>
                <label className="mb-1 text-[15px] font-semibold">Name</label>
                <input className="p-2 rounded border-b-2 border-slate-500 focus:outline-none" placeholder="Name" required type="email" {...register("Name")}  name="Name" id="name" />
                <label className="mb-1 text-[15px] font-semibold">Email</label>
                <input className="p-2 rounded border-b-2 border-slate-500 focus:outline-none" placeholder="Email" required type="email" {...register("email")}  name="email" id="email" />
                <label className="mt-3 mb-1 text-[15px] font-semibold">Password</label>
                <input className="p-2 rounded border-b-2 border-slate-500 focus:outline-none" placeholder="Password" type="password" required {...register("password")} name="password" id="password" /> 
                <label className="mt-3 mb-1 text-[15px] font-semibold">Confirm Password</label>
                <input className="p-2 rounded border-b-2 border-slate-500 focus:outline-none" placeholder="Confirm Password" type="password" required {...register("confirmPassword")} name="confirmPassword" id="confirm password" /> 
                <input type="file"  className="my-4 w-1/2 mx-auto file:bg-gradient-to-b file:from-[#bc7c28] file:to-[#5c3b10] file:border-none file:rounded-full file:px-2 file:py-1 file:shadow-inner file:shadow-white  file:font-semibold file:text-white bg-slate-700 shadow-inner shadow-white p-2 rounded-full text-white" {...register("Image")} name="Image" id="" />
                <button  className={`text-[14px] font-semibold rounded  ${disable?"bg-slate-300":"bg-slate-800"} text-white p-2 mt-4 w-1/4 mx-auto`}>SingUp</button>
            </form>
        </div>
    );
};

export default SignUp;