import { useState } from 'react';
import { useRouter } from 'next/router';

export default function HomeSidebar() {
  const router = useRouter();
  return (
    <>
      <div class="relative min-h-screen md:flex">
        <div class="bg-gray-800 text-gray-100 flex justify-between md:flex">
            <div class="sidebar bg-lockplus-blue text-blue-100 w-40 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
            <a href="#" class="text-white flex items-center space-x-2 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>  
                <span class="text-2xl font-bold font-lockplus">lock +</span>
            </a>
            </div>
        </div>
      </div>

    </>
  );
}