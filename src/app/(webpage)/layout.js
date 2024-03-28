import connect from "@/backend/dbConnection/db";
export default function webLayout({ children }) {
    connect();
  return (
    <>
       {children}
    </>
        );
}
