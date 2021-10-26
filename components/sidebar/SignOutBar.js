import { signOut } from 'next-auth/react';

function SignOutBar() {
  const url = 'http://localhost:3000/';
  return (
    <button
      class="text-white flex items-center space-x-2 px-4 ml-1 hover:text-lockplus-hoverGray"
      onClick={() => signOut({ callbackUrl: url })}>
      <span class="text-lg font-bold font-lockplus">sign out</span>
    </button>
  );
}

export default SignOutBar;
