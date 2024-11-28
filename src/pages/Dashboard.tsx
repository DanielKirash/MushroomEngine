import { useEffect, useState } from "react";
import Header from "../UI/organisms/header/Header";
import Main from "../UI/organisms/main/Main";
import '../pages/layout.css'

export type DashboardProps = {
  setIsAuthenticated: (value: boolean) => void;
}

const Dashboard = (setIsAuthenticated: DashboardProps) => {
  async function fetchData(){

    const response = await fetch('./data/data.json');
    const data = await response.json();
  
    localStorage.setItem('impianti', JSON.stringify(data));
  
    return data;
  }
  const [data, setData] = useState<any>(null)
  useEffect(()=>{
    fetchData()
  },[])

    return (
      <div className="dashboard-layout">
        <Header {...setIsAuthenticated}/>
        <Main data={data}/>
      </div>
    )
  };
  
  export default Dashboard;