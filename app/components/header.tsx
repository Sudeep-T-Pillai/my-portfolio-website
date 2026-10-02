import Link from "next/link";

export function Header() {
    return (
        <header className="flex h-[8vh] justify-end">
            <nav className="flex gap-10 mx-8 my-5">
                <Link className="font-sans text-2xl transition-transform duration-500 ease-out hover:scale-150" href = "/">Home</Link>
                <Link className="font-sans text-2xl transition-transform duration-500 ease-out hover:scale-150" href="../about-me">About Me</Link>
                <Link className="font-sans text-2xl transition-transform duration-500 ease-out hover:scale-150" href = "../projects">Projects</Link>
            </nav>
        </header>
    )     
} 