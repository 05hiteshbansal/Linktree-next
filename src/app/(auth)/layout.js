import "../globals.css";
export const metadata = {
  title: "LinkTree "
};

export default function authLayout({ children }) {

  return (
      <div className="containerlayout">
        <div className="maincontent">{children}</div>
      </div>  
  );
}
