import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout = ({children}) => {
    return (
      <div>
        <Navbar/>{/* This Content will not change*/}

        <div className="main-content min-h-screen"> {/* This Content will change*/}
            {children}
        </div>

        <Footer/>{/* This Content will not change*/}
      </div>
    )
  }
  export default Layout