import dynamic from "next/dynamic";

const contact = () => {
  const Footer = dynamic(() => import("./components/footer"));
  return (
    <div>
      <Footer />
    </div>
  );
};

export default contact;
