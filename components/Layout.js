import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import Logo from "./Logo";
export default function Layout({ children }) {
  const [showNav,setShowNav] = useState(false)
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-cyan-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 px-4 rounded-lg"
          >
            Loging with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-slate-400 min-h-screen ">
      <div className="md:hidden flex items-center p-4">
      <button onClick={() => setShowNav(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="flex grow justify-center mr-6">
      <Logo/>
      </div>
      
      </div>
     
      <div className="flex">
        <Nav show={showNav} />
        <div className="bg-slate-300 flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
        
          {children}
        </div>
      </div>
    </div>
  );
}
