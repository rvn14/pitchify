import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";








export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {

      const query = (await searchParams).query;
      const params = { search: query || null };
      const { data: posts} = await sanityFetch({query: STARTUPS_QUERY, params});

      const session = await auth(); 
 

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
          {posts?.length > 0 ? posts.map((post: StartupTypeCard) => (
            <StartupCard key={post?._id} post={post}/>
          )) : <p className="no-result">No startups found</p>
          }
      </ul>
    </section>


    <SanityLive />
    </>
  );
}
