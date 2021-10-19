import Head from 'next/head';
import Image from 'next/image';
import HomeSidebar from '../components/HomeSidebar';
import LoginForm from '../components/LoginForm';

export default function HomePage() {
  return (
    <div class="h-screen w-screen bg-lockplus-opacGray">
      <div class="relative flex bg-gray-800 justify-start">
        <div>
          <HomeSidebar />
        </div>
        <div class="relative flex container h-screen w-screen p-4 bg-gray-800 visible text-lockplus-blue">
          HOME
        </div>
      </div>
    </div>
  );
}
