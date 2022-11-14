import dynamic from "next/dynamic";
import { useState } from "react";

const Contact = () => {
  const [state, setState] = useState({
    fname: "",
    email: "",
    interest: "",
    budget: "",
    subject: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const Footer = dynamic(() => import("./components/footer"));
  return (
    <>
      <main className="contact">
        <div className="container">
          {" "}
          <section className="page_title">
            <h1>Get in touch</h1>
          </section>
          <form action="#">
            <div className="form_row">
              <div className="form-field_col">
                <label htmlFor="fname">Your name</label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  value={state.fname}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field_col">
                <label htmlFor="email">Your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={state.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form_row">
              <div className="form-field_col">
                <label htmlFor="interest">What you are interested in</label>
                <select
                  id="interest"
                  name="interest"
                  value={state.interest}
                  onChange={handleChange}
                >
                  <option value="Modeling">Modeling</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Branding">Branding</option>
                </select>
              </div>
              <div className="form-field_col">
                <label htmlFor="budget">Project Budget</label>
                <select
                  id="budget"
                  name="budget"
                  value={state.budget}
                  onChange={handleChange}
                >
                  <option value="$0-$100">$0-$100</option>
                  <option value="$100-$1000">$100-$1000</option>
                  <option value="$1000-$10000">$1000-$10000</option>
                </select>
              </div>
            </div>
            <div className="textarea_col">
              <label htmlFor="subject">Message</label>
              <textarea
                name="subject"
                id="subject"
                value={state.subject}
                onChange={handleChange}
              ></textarea>
            </div>
            <input type="submit" className="btn submit" value="Send" />{" "}
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
