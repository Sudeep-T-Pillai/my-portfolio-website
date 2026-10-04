import Image from "next/image";
import Introduction from "./introduction/page";
import AboutMe from "./about-me/page";

export default function Home() {
  return (
    <div>
      <main className=" h-[80vh]">
        <section>
          <Introduction/>
        </section>
      </main>
    </div>
  );
}
