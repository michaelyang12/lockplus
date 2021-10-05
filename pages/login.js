import Head from 'next/head';
import Image from 'next/image';
import LoginForm from '../components/LoginForm';

export default function Login() {
    return(
        <>
        <div className="h-screen w-screen bg-black">
          <div className="relative content-center">
            <LoginForm />
          </div>
        </div>
      </>
    );
}