import { useEffect, useState } from "react";
import Header from "../UI/organisms/header/Header";
import Main from "../UI/organisms/main/Main";
import '../pages/layout.css'

const Dashboard = () => {
  const [data, setData] = useState<any>(null)
  useEffect(() => {
    fetchData()
  }, [])


  async function fetchData(){
    
    const response = await fetch('http://127.0.0.1:8000/impianti');
    const data = await response.json();
  
    localStorage.setItem('impianti', JSON.stringify(data));
    
    setData(data)

  }

    return (
      <div className="dashboard-layout">
        <Header/>
        <Main data={data}/>
      </div>
    )
  };
  
  export default Dashboard;