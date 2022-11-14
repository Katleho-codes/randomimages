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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                fugiat amet explicabo perspiciatis totam doloribus facilis,
                necessitatibus dignissimos soluta quibusdam? <br /> Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Assumenda mollitia
                sed quibusdam repellat, <br /> unde earum officiis! Obcaecati
                possimus cumque at nesciunt vitae id repudiandae ut? Sequi
                maiores ipsa voluptatum vero.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates dolores nihil in debitis veniam perferendis quae
                  soluta, porro inventore saepe itaque autem eveniet? Error
                  dolorum labore cum placeat maxime velit iure, voluptas
                  tempora, possimus dicta doloremque accusamus, illum itaque!
                  Explicabo ea ipsum ipsa voluptates tenetur nostrum dolore
                  eaque! Architecto, nesciunt?
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default about;
