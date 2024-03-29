import "../globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
export const metadata = {
  title: "LinkTree ",
  description: "Generated by create next app",
};

export default function HomeLayout({ children }) {

  return (
    <div className="bodycontainer">
      <div className="containerlayout">
        <Navbar />
        <div className="maincontent">{children}</div>
        <Footer />
      </div>  
      </div>
  );
}
