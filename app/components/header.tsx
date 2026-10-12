import Link from "next/link";
export function Header() {
    return (
        <header className="bg-[linear-gradient(135deg,#E8F5FA_0%,#FFF8D9_35%,#FFE99A_100%)] sticky top-0 z-50 flex h-[8vh] shrink-0 justify-end">
            <nav className="flex gap-10 mx-8 my-5">
                <Link className="font-sans text-2xl transition-transform duration-500 ease-out hover:scale-150" href="#introduction">Home</Link>
                <Link className="font-sans text-2xl transition-transform duration-500 ease-out hover:scale-150" href="#about-me">About Me</Link>
                <Link className="font-sans text-2xl transition-transform duration-500 ease-out hover:scale-150" href = "#projects">Projects</Link>
            </nav>
        </header>
    )     
} 