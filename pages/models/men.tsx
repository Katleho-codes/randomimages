import Image from "next/image";
import Link from "next/link";
import img1 from "../../public/images/models/m1.jpg";
import img2 from "../../public/images/models/m2.jpg";
import img3 from "../../public/images/models/m3.jpg";
import img4 from "../../public/images/models/m4.jpg";
import img5 from "../../public/images/models/m5.jpg";
import img6 from "../../public/images/models/m6.jpg";
import dynamic from "next/dynamic";

const Men = () => {
  const Footer = dynamic(() => import("../components/footer"));
  return (
    <>
      <main className="men">
        <div className="container">
          <section className="page_title">
            <h1 className="text-center">Men</h1>
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
                <Image src={img2} alt="" placeholder="blur" />
              </Link>
            </div>
            <div className="col">
              <Link href="">
                <Image src={img3} alt="" placeholder="blur" />
              </Link>
            </div>
          </section>
          <section className="row">
            <div className="col">
              <Link href="">
                <Image src={img4} alt="" placeholder="blur" />
              </Link>
            </div>
            <div className="col">
              <Link href="">
                <Image src={img5} alt="" placeholder="blur" />
              </Link>
            </div>
            <div className="col">
              <Link href="">
                <Image src={img6} alt="" placeholder="blur" />
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Men;
