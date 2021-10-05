import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginForm() {
    const router = useRouter();
  return (
    <div className="w-2/3 h-96 mx-auto mt-162">
        <div className="flex justify-center block w-auto h-48 mt-24 m-4 ">
            <div className="relative h-24 w-64 mt-14">
                <button                         
                    className="text-6xl font-bold font-lockplus text-right text-lockplus-blue pr-4 ml-20 hover:text-lockplus-hoverblue"
                    onClick={() => router.push('/')}>
                        lock+
                </button>
                <div className="text-md font-regular font-lockplus text-right text-lockplus-blue pr-4 mr-12">
                    sign in here
                </div>
                <input
                    type="text"
                    className="h-8 w-48 bg-lockplus-opacGray bg-opacity-50 ml-12 mt-4 focus: outline-none border-2 border-lockplus-blue rounded-xl pl-4 placeholder-lockplus-placeholderGray font-light font-lockplus text-lockplus-placeholderGray"
                    placeholder="Username/email"
                />
                <input
                    type="text"
                    className="h-8 w-48 bg-lockplus-opacGray bg-opacity-50 ml-12 mt-4 focus: outline-none border-2 border-lockplus-blue rounded-xl pl-4 placeholder-lockplus-placeholderGray font-light font-lockplus text-lockplus-placeholderGray"
                    placeholder="Password"
                />
                <button 
                    className="bg-lockplus-blue group h-6 w-24 relative top-2 left-24 rounded-full focus:outline-none transform hover:scale-105 hover:bg-lockplus-hoverblue transition ease-out duration-100 mt-1.5"
                    onClick={() => router.push('/home')}
                >
                    sign in
                </button>
            </div>
        </div>
    </div>
  );
}
