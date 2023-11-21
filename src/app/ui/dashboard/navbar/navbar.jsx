"use client"
import Link from "next/link"
import { useTheme } from "next-themes"



import {FiMoon} from "react-icons/fi"
import {BsSun} from "react-icons/bs"
import { useEffect, useState } from "react"
import { signOut,useSession } from "next-auth/react"
 
function Navbar() {

    const {data:session}=useSession();
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
  
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return null
    }

    return (
        <div className="flex justify-between bg-slate-700 text-slate-200 shadow-lg border-slate-100 sticky top-0 px-5 py-2 items-center dark:bg-white dark:text-black ">
           <Link className="flex items-center text-xl hover:text-slate-50 dark:hover:font-bold dark:text-black" href={"/"}><img src="\favicon.ico" alt="Logo"></img><div className="ml-5">Jail Management</div></Link>
           <nav className="flex space-x-8">
            {theme==="dark"?(
                <BsSun className="hover:text-yellow-300" size={35} cursor="pointer" onClick={()=>setTheme("light")}/>
            ):(
                <FiMoon  className="hover:text-black" size={35} cursor="pointer" onClick={()=>setTheme("dark")}/>
            )}
            {!session?(
            <>
              <Link className="text-xl hover:text-slate-50 hover:border-b-2 hover:border-slate-50  dark:hover:font-bold dark:text-black dark:border-black" href={"/login"}>Login</Link>
              <Link className="text-xl hover:text-slate-50 hover:border-b-2 hover:border-slate-50  dark:hover:font-bold dark:text-black dark:border-black" href={"/register"}>Register</Link>
            </>):(
              <div >
              {session.user?.email}
              
                <button className="p-2 px-5 ml-5 bg-slate-900 rounded-full hover:bg-slate-800 dark:bg-black dark:text-slate-50 dark:hover:bg-gray-800" onClick={()=>{signOut()}}>Logout</button>
              
                </div>
            )
            }
            

           </nav>
        </div>
    )
}

export default Navbar
