import Head from 'next/head';
import Image from 'next/image';
import HomeSidebar from '../components/HomeSidebar';
import LoginForm from '../components/LoginForm';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  if (session) {
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
  } else {
    return (
      <div className="h-screen w-screen bg-black text-white">LOCKED OUT</div>
    );
  }
}
