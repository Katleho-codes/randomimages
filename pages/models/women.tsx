import Image from "next/image";
import Link from "next/link";
import img1 from "../../public/images/models/w1.jpg";
import img2 from "../../public/images/models/w2.jpg";
import img3 from "../../public/images/models/w3.jpg";
import img5 from "../../public/images/models/w5.jpg";
import img6 from "../../public/images/models/w6.jpg";
import img7 from "../../public/images/models/w7.jpg";
import dynamic from "next/dynamic";

const Women = () => {
  const Footer = dynamic(() => import("../components/footer"));
  return (
    <>
      <main className="women">
        <div className="container">
          <section className="page_title">
            <h1 className="text-center">Women</h1>
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
                <Image src={img1} alt="" placeholder="blur" />
              </Link>
            </div>
            <div className="col">
              <Link href="">
                {" "}
                <Image src={img2} alt="" placeholder="blur" />
              </Link>
            </div>
            <div className="col">
              <Link href="">
                {" "}
                <Image src={img3} alt="" placeholder="blur" />
              </Link>
            </div>
          </section>
          <section className="row">
            <div className="col">
              <Link href="">
                <Image src={img5} alt="" placeholder="blur" />
              </Link>
            </div>
            <div className="col">
              <Link href="">
                {" "}
                <Image src={img6} alt="" placeholder="blur" />
              </Link>
            </div>
            <div className="col">
              <Link href="">
                <Image src={img7} alt="" placeholder="blur" />
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Women;
