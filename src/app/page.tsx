import Image from "next/image";
import Navbar from "@/components/Navigation/Navigation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow grid grid-rows-[auto_1fr_auto] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-2xl font-bold">Welcome to SupplySync</h1>
        <Image 
          src="https://cdn.discordapp.com/attachments/1287406928414249066/1289839851595632662/image.jpg?ex=66fa4878&is=66f8f6f8&hm=9acf7c40a240e5df7d194e67f3fc8ee8da9200f358e9ecde1dfa26661125fc39" 
          alt="SupplySync Logo" 
          width={1000} 
          height={1000}
          className="max-w-full h-auto"
        />
      </main>
    </div>
  );
}