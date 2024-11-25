import Header from "../UI/organisms/header/Header";
import Main from "../UI/organisms/main/Main";
import '../pages/layout.css'
const Dashboard = () => {
    return (
      <div className="dashboard-layout">
        <Header/>
        <Main/>
      </div>
    )
  };
  
  export default Dashboard;