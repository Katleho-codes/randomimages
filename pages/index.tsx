import Link from "next/link";
import Image from "next/image";
import man1 from "../public/images/models/m1.jpg";
import man2 from "../public/images/models/m2.jpg";
import woman1 from "../public/images/models/w1.jpg";
import woman2 from "../public/images/models/w2.jpg";
const Home = () => {
  return (
    <>
      <main className="home">
        <div className="container">
          <section className="homepage_text">
            <h1>Become a star</h1>
            <h4>Modelling agency</h4>
            <Link href="/about" className="btn home_cta">
              Who we are
            </Link>
          </section>
          <section className="images_home">
            <article className="col">
              <Image src={man1} alt="" />
            </article>
            <article className="col">
              <Image src={woman1} alt="" />
            </article>
            <article className="col">
              <Image src={man2} alt="" />
            </article>
            <article className="col">
              <Image src={woman2} alt="" />
            </article>
          </section>
          <section className="who_we_are page_title ">
            <h1>Who we are</h1>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
