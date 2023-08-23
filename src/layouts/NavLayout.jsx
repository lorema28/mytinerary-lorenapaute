import NavBar from "../components/NavBar";
import Footer from "../components/Footer"


export default function NavLayout({children}) {
  return (
    <div className='w-full  bg-[#ebebeb] flex flex-col'>

      <NavBar />
      {children}
      
    </div>
  );
}