import Sidebar from "../UI/organisms/sidebar/Sidebar";
import Header from "../UI/organisms/header/Header";
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
      <div className="maincontainer">
        <Header/>
        <Sidebar/>
        <Outlet/>
      </div>
    )
  };
  
  export default Layout;