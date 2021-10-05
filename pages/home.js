import Head from 'next/head';
import Image from 'next/image';
import HomeSidebar from '../components/HomeSidebar';

export default function HomePage() {
    return(
    <>
        <div className="h-screen w-screen bg-black">
          <div className="relative content-center">
            <HomeSidebar />
         </div>
        </div>
    </>
    );
}