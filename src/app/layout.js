import Navbar from '@/copmonents/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/copmonents/footer/Footer'
import { ThemeContextProvider } from '@/context/Themecontext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ABBII',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
        <div className="container">
          <div className="wrapper">
            <Navbar/>
            {children}
            <Footer/>
            </div>
        </div>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
