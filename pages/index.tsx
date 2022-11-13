import Link from "next/link";

const Home = () => {
  return (
    <>
      <main className="home">
        <div className="hero_image">
          <section className="homepage_text">
            <h1>Become a star</h1>
            <h4>Modelling agency</h4>
            <Link href="/about" className="btn home_cta">
              Who we are
            </Link>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
