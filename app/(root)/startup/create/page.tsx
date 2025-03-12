import { auth } from "@/auth"
import StartupForm from "@/components/StartupForm"
import { redirect } from "next/navigation"

const page = async () => {
    const session = await auth()
    if (!session) redirect("/")
    


  return (
    <>
        <section className="pink_container !min-h-[230px]">
            <p className="heading">Submit Your Startup</p>

        </section>
        <StartupForm />
    </>
  )
}

export default page