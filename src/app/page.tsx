import Navbar from "@/components/ui/navbar";
import bg from "../assets/background.jpg";
import bubble from "../assets/bubble.png";
import bubble_2 from "../assets/bubble_2.png";
import Button from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="relative z-20 bg-center bg-no-repeat bg-cover overflow-hidden max-h-[100vh]"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div>
        <Navbar></Navbar>
      </div>
      <div className="pt-36">
        <div className="text-white flex flex-col justify-center items-center">
          <h1 className="text-7xl font-bold">LIFE IS BETTER WITH</h1>{" "}
          <span className="text-7xl font-bold text-transparent bg-gradient-to-r bg-purple-700 from-blue-900 bg-clip-text">
            AI
          </span>
          <p className="text-lg w-[800px] mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae, quam. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Cupiditate voluptatum, odit veritatis adipisci
            tempore voluptatibus.
          </p>
          <div className="mt-5 flex gap-5">
            <Button
              bgColor="gradient-to-r bg-purple-700 from-blue-900"
              hoverBg="transparent"
              textColor="white"
              buttonText="Explore"
              hoverText="white"
            ></Button>
            <Button
              bgColor="gradient-to-r bg-purple-700 from-blue-900"
              textColor="white"
              buttonText="Documentation"
              hoverBg="transparent"
              hoverText="white"
            ></Button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Image src={bubble_2} className="w-[800px]" alt="Bubble image" />
      </div>
    </main>
  );
}
