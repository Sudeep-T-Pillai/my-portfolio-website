import Image from "next/image";
import Introduction from "./introduction/page";

export default function Home() {
  return (
    <div>
      <main className=" h-[80vh]">
        <Introduction/>
      </main>
    </div>
  );
}
