import "./devicon/devicons.css"
export function Footer() {
    return (
        <footer className="h-[10vh] sticky bottom-0">
           <div className="flex flex-row row-2 justify-center gap-10">
                    <p className="font-sans text-lg">© 2024 Sudeep T Pillai</p>                    
                    <p className="font-sans text-lg"> Icons Provided by: 
                        <i className="devicon-devicon-plain colored text-lg"></i>    
                    </p>   
                    <p className="font-sans text-lg">
                       I hate this UI and I will change this....
                    </p>
 
                    

           </div>
        </footer>
    )
}