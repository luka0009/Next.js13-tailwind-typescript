import './globals.css';
import Navbar from './components/Navbar';
import ProfilePic from './components/ProfilePic';

export const metadata = {
  title: "Drago's Blog",
  description: 'Blog app created with NextJS-13, tailwind & typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-800 min-h-screen'>
        <Navbar />
        <ProfilePic />
        {children}
      </body>
    </html>
  )
}
