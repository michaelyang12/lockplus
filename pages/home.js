import Head from 'next/head';
import Image from 'next/image';
import HomeSidebar from '../components/HomeSidebar';
import LoginForm from '../components/LoginForm';



export default function HomePage(props) {

  return (
    <div class="h-screen w-screen bg-lockplus-opacGray">
      <div class="relative bg-gray-800 justify-start">
        <div>
          <HomeSidebar

          />

        </div>
      </div>
    </div>
  );
}
