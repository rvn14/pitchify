import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";






export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {

      const query = (await searchParams).query;


      const posts = [
        {
          _createdAt: new Date(),
          views: 100,
          author: { _id:1, name: "John Doe"},
          _id: "1",
          description: "this is description",
          image: "https://placehold.co/600x600",
          category: "Tech",
          title: "Robots"
        },
      ]
      

  return (
    <>
    <section className="relative pink_container pattern p-cont">
      <h1 className="heading">Pitch Your Startup, <br/> Connect with Etrepreneurs</h1>

      <p className="sub-heading">Submit Ideas, Vote on Pitches, Get Noticed in Virtual Competitions.</p>

      <SearchForm query={query} />
    </section>

    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Search results for "${query}"` : "All Startups"}
      </p>

      <ul className="mt-7 card_grid">
          {posts?.length > 0 ? posts.map((post: StartupCardType) => (
            <StartupCard key={post?._id} post={post}/>
          )) : <p className="no-result">No startups found</p>
          }
      </ul>
    </section>



    </>
  );
}
