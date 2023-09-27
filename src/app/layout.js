import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/common/layouts/header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AIO',
  description: 'One app for all your needs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='flex flex-col min-h-screen'>
          <Header />
          <section className="flex flex-col items-center px-10 py-2">
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
