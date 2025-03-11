import SearchForm from "../components/SearchForm";




export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {

      const query = (await searchParams).query;
      console.log(query);

  return (
    <>
    <section className="relative pink_container pattern p-cont">
      <h1 className="heading">Pitch Your Startup, <br/> Connect with Etrepreneurs</h1>

      <p className="sub-heading">Submit Ideas, Vote on Pitches, Get Noticed in Virtual Competitions.</p>

      <SearchForm query={query} />
    </section>



    </>
  );
}
