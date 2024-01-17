import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data:session} = useSession()
  console.log({session});
 return(
  <Layout>
    <div className="text-slate-800 bg-slate-300 flex justify-between">
      <h2>
        Hello, <b>{session?.user?.name}</b>
        </h2>
      <div className="flex bg-slate-800 text-slate-400 gap-1 rounded-lg  overflow-hidden">
      <img src={session?.user?.image} alt="" className="w-6 h-6" />
      <span className="px-2">
      {session?.user?.name}
      </span>
      
      </div>
      
    </div>
  </Layout>
 )
}
