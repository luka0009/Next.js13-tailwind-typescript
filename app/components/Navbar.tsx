import Link from "next/link"
import { FaGithub } from "react-icons/fa"

export default function Navbar() {
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-white/90 no-underline hover:text-white lg:ml-[-250px]">Drago's Blog</Link>
                </h1>
                <div className="flex flex-row align-middle items-center justify-center sm:justify-evenly gap-4 text-white text-4xl lg:text-4xl">
                    
                    <Link className="text-white/90 hover:text-white lg:mr-[-380px]" href="https://github.com/luka0009">
                        <FaGithub />
                    </Link>
                </div>
            </div>
        </nav>
    )
}