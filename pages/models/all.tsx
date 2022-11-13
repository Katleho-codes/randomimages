import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import man1 from "../../public/images/models/m1.jpg";
import man2 from "../../public/images/models/m2.jpg";
import man3 from "../../public/images/models/m3.jpg";
import man4 from "../../public/images/models/m4.jpg";
import man5 from "../../public/images/models/m5.jpg";
import man6 from "../../public/images/models/m6.jpg";
import woman1 from "../../public/images/models/w1.jpg";
import woman2 from "../../public/images/models/w2.jpg";
import woman3 from "../../public/images/models/w3.jpg";
import woman5 from "../../public/images/models/w5.jpg";
import woman6 from "../../public/images/models/w6.jpg";
import woman7 from "../../public/images/models/w7.jpg";

const Allmodels = () => {
  const Footer = dynamic(() => import("../components/footer"));
  return (
    <>
      <main className="models">
        <div className="container">
          <section className="page_title">
            <h1 className="text-center">Our models</h1>
          </section>
          <section className="filter_buttons">
            <Link href="/models/all" className="btn">
              All
            </Link>

            <Link href="/models/men" className="btn">
              Men
            </Link>
            <Link href="/models/women" className="btn">
              Women
            </Link>
          </section>
          <section className="row">
            <div className="col">
              <Link href="">
                <Image src={man1} alt="" placeholder="blur" />
              </Link>
            </div>
            <div className="col">
              <Link href="">
                <Image src={woman1} alt="" placeholder="blur" />
              </Link>
            </div>
            <div className="col">
              <Link href="">
                <Image src={man2} alt="" placeholder="blur" />
              </Link>
            </div>
          </section>
          <section className="row">
            <div className="col">
              <Link href="">
                <Image src={woman2} alt="" placeholder="blur" />
              </Link>
            </div>
            <div className="col">
              <Link href="">
                <Image src={man3} alt="" placeholder="blur" />
              </Link>
            </div>
            <div className="col">
              <Link href="">
                <Image src={woman3} alt="" placeholder="blur" />
              </Link>
            </div>
          </section>
          <section className="row">
            <div className="col">
              <Link href="">
                <Image src={man4} alt="" placeholder="blur" />
              </Link>
            </div>
            <div className="col">
              <Link href="">
                {" "}
                <Image src={woman5} alt="" placeholder="blur" />
              </Link>
            </div>
            <div className="col">
              <Link href="">
                <Image src={man5} alt="" placeholder="blur" />
              </Link>
            </div>
          </section>
          <section className="row">
            <div className="col">
              <Link href="">
                <Image src={woman6} alt="" placeholder="blur" />
              </Link>
            </div>
            <div className="col">
              <Link href="">
                {" "}
                <Image src={man6} alt="" placeholder="blur" />
              </Link>
            </div>
            <div className="col">
              <Link href="">
                {" "}
                <Image src={woman7} alt="" placeholder="blur" />
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Allmodels;
