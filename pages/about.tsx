import dynamic from "next/dynamic";

const about = () => {
  const Footer = dynamic(() => import("./components/footer"));
  return (
    <div>
      <Footer />
    </div>
  );
};

export default about;
