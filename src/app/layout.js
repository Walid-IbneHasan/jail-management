import { Roboto } from 'next/font/google'
import "./globals.css"
import Navbar from './ui/dashboard/navbar/navbar'
import { getServerSession } from 'next-auth'
import SessionProvider from "@/utils/SessionProvider"
import Providers from './ui/Providers'



const roboto = Roboto({ subsets: ['latin'],weight:["400","500","700"] })

export const metadata = {
  title: 'Jail Management',
  description: 'A project to help the jail management',
}

export default async function RootLayout({ children }) {

  const session=await getServerSession()
  

  return (
    <html lang="en">
      
      <body className= {roboto.className}>
        <Providers>
      
        <SessionProvider session={session}>
        <main className='bg-slate-800 mx-auto dark:bg-gray-300 dark:text-black'>
          <Navbar/>
 
        {children}
        </main>
        </SessionProvider>
        </Providers>
      
      
        </body>
        
    </html>
  )
}
