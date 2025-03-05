

import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio | Pratyush',
  description: "I'm an Embedded Systems Engineer specializing in firmware development, Avionics, STM32 programming and IoT. Explore my projects and technical expertise.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
