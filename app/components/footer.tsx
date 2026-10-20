import "./devicon/devicons.css"
export function Footer() {
    return (
        <footer className="h-[10vh] sticky bottom-0 bg-[linear-gradient(90deg,#FFF8D9_0%,#FFE99A_100%)]">
           <div className="flex flex-row row-2 justify-center gap-10">
                    <p className="font-sans text-sm md:text-lg">© 2026 Sudeep T Pillai</p>                    
                    <p className="font-sans text-sm md:text-lg "> Icons Provided by: 
                        <i className="devicon-devicon-plain colored text-sm md:text-lg"></i>    
                    </p>   

                    <a className="font-sans text-sm md:text-lg" href="https://github.com/Sudeep-T-Pillai">Github</a>
                    <a className="font-sans text-sm md:text-lg" href="https://www.linkedin.com/in/sudeep-t-pillai/">LinkedIn</a>

                    <p className="hidden lg:block font-sans text-sm lg:text-lg">
                       This is an experimental UI, so I will be replacing it with a better one in the future. Please bear with me.
                    </p>
                    

           </div>
        </footer>
    )
}