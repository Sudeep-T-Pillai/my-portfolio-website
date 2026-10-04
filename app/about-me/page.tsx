import BadgeSection from "../components/badges/badge-selection";

export default function AboutMe() {
    return (
        <section className="flex flex-col ml-10 font-sans">
            <h2 className="text-6xl">About Me</h2>
            <div className=" grid grid-cols-12 gap-40">
                <div className=" col-span-6 flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-4xl mt-5">A little about me </h3>
                        <p className="text-xl text-justify">
                          I’m an engineer interested in building intelligent systems at the intersection of 
                          software, embedded hardware, and machine learning. My work has taken me across a 
                          fairly diverse range of technologies—from software and application development to 
                          embedded systems, and research in spiking neural networks and 
                          brain-computer interfaces.
                        </p>
                        <p className="text-xl text-justify">
                            I enjoy exploring different technologies and learning new stacks when they make 
                            sense for the problem at hand, rather than limiting myself to a single toolset. 
                            Whether it’s training a vision model for real-world detection, experimenting with 
                            neuromorphic computing, or building tactile and interactive desktop hardware, 
                            I like taking ideas from low-level experimentation through to something practical 
                            and polished.
                        </p>

                        <p className="text-xl text-justify">
                            Outside of code and hardware, you’ll usually find me behind a camera lens, playing 
                            keys on my keyboard, or curating low-tech desktop aquariums.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl mt-5">Education</h3>
                    </div>
                    <div>
                        <ul>
                            <li>BTech in Computer Science: TKM College of Engineering (2022-2026)</li>
                        </ul>
                    </div>
                </div>
        
                <div className="col-span-6">
                    <h2 className="text-3xl font-sans">
                       Certifications & Badges
                  </h2>
                    <BadgeSection/>
                </div>
            </div>
        </section>
    )
}