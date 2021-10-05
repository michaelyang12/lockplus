import Head from 'next/head';
import Image from 'next/image';
import RegisterForm from '../components/RegisterForm';

export default function Register() {
    return(
        <>
        <div className="h-screen w-screen bg-black">
          <div className="relative content-center">
            <RegisterForm />
          </div>
        </div>
      </>
    );
}