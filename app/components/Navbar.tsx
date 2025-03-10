import { auth,signIn, signOut } from "@/auth"
import Image from "next/image"
import Link from "next/link"

const Navbar = async () => {

    const session = await auth()
    
    const [fname, lname] = session?.user?.name?.split(" ") || ["", ""]
        
    
    
  return (
    <header className="navbar px-5 py-3 bg-white shadow-sm font-work-sans"> 
        <nav className="flex justify-between items-center">
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={144} height={30} priority />
            </Link>

            <div className="flex items-center gap-5 text-black">
                {session && session?.user ? (  
                    <>
                    <Link href="/startup/create">
                        <span>Create</span>
                    </Link>

                    <form action={async () => {
                        "use server";

                        await signOut({redirectTo: "/"})
                    }}>
                        <button type="submit">
                            <span>Logout</span>
                        </button>
                    </form>
                    
                    <Link href={`/user/${session?.user.id}`} >
                        <div className="flex flex-col items-center">
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
                        <button type="submit">
                            Login
                        </button>
                    </form>
                )
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar