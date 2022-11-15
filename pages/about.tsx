import dynamic from "next/dynamic";

const about = () => {
  const Footer = dynamic(() => import("./components/footer"));
  return (
    <>
      <main className="about">
        <div className="container">
          <section className="page_title">
            <h1>Who we are</h1>
          </section>
          <section className="content">
            <div className="backstory">
              <p>
                The company itself is a very successful company. I will explain
                that it will be avoided if you see the whole with easy pains,
                and some of the most worthy needs are solved? It is very
                important for the customer to pay attention to the adipiscing
                process. Resilience should be assumed but repels some, hence
                their duties! We can be blinded and do not know how to reject
                life? I followed the greater pleasures themselves.
              </p>
            </div>
          </section>
          <section className="vision_mission">
            <div className="vision">
              <h2>Our vision</h2>
              <div className="text list">
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Hic, iusto.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Hic, iusto.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Hic, iusto.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Hic, iusto.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Hic, iusto.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mission">
              <h2>Our mission</h2>
              <div className="text">
                <p>
                  The company itself is a very successful company. Pleasures and
                  pains are nothing in the forgiveness of debts that have been
                  paid, but will it often happen to the inventor? The error of
                  pains with labor, when it is most pleasing to the right, the
                  times of pleasure, we can say and accuse him of pain,
                  therefore! I will explain that the very pleasures are bound to
                  our pain! Do they not know the architect?
                </p>
              </div>
            </div>
          </section>

          <section className="what_we_do">
            <h2>What we do</h2>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default about;
