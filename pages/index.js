import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen w-screen bg-black">
      <div className="block h-24 w-full border border-lockplus-blue"></div>
      <div className="w-2/3 h-96 mx-auto mt-162">
        <div className="flex justify-center block w-auto h-48 mt-24 m-4 ">
          <div className="relative h-24 w-64 mt-14">
            <div className="text-6xl font-bold font-lockplus text-right text-lockplus-blue pr-4">
              lock+
            </div>
            <button className="bg-lockplus-blue h-6 w-24 absolute right-4 rounded-full focus:outline-none transform hover:scale-102 hover:bg-lockplus-hoverblue mt-1">
              <div className="h-auto w-auto mx-auto text-black font-light text-sm font-lockplus">
                Order Now
              </div>
            </button>
          </div>
          <div className="h-42 w-64 text-md font-lockplus text-left text-lockplus-blue tracking-wider font-snug leading-tight pt-16">
            <div className="w-full h-auto">Affordable home security.</div>
            <div className="w-full h-auto">Advanced biometrics.</div>
            <div className="w-full h-auto">Safety, simpler than ever.</div>
            <div className="w-full h-auto text-white">Learn More.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
