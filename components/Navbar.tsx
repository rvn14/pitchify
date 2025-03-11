import { auth,signIn, signOut } from "@/auth"
import {  LogOutIcon } from "lucide-react"
import { Button } from "@/components/ui/button";
import Image from "next/image"
import Link from "next/link"

const Navbar = async () => {

    const session = await auth()
           
    
    
  return (
    <header className="navbar px-5 py-3 bg-white shadow-sm font-work-sans"> 
        <nav className="flex justify-between items-center">
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={144} height={30} priority />
            </Link>

            <div className="flex items-center gap-5 text-black">
                {session && session?.user ? (  
                    <>
                    <Link className="" href="/startup/create">
                        <span>Create</span>
                    </Link>

                    <form action={async () => {
                        "use server";

                        await signOut({redirectTo: "/"})
                    }}>
                        <Button type="submit" className=" flex justify-center items-center gap-1 cursor-pointer text-white">
                            <span className="">
                                logout
                            </span>
                            <LogOutIcon className="size-5"/>
                        </Button>
                    </form>
                    
                    <Link href={`/user/${session?.user.id}`} >
                        <div className="flex items-center rounded-full">
                            <Image className="rounded-full" src={`${session?.user.image}`} width={40} height={40} alt="user-image" />
                        </div>
                    </Link>
                    </>
                ):
                (
                    <form action={async () => {
                        "use server";

                        await signIn("github")
                    }}>
                        <Button type="submit" className="login">
                            Login
                        </Button>
                    </form>
                )
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar