import { useEffect, useState } from "react";
import Header from "../UI/organisms/header/Header";
import Main from "../UI/organisms/main/Main";
import '../pages/layout.css'

export type DashboardProps = {
  setIsAuthenticated: (value: boolean) => void;
}

const Dashboard = (setIsAuthenticated: DashboardProps) => {
  
  const[impianti, setImpianti] = useState<any>([]);

  async function getData(){

    const cachedData = localStorage.getItem('impianti');
    if (cachedData) {
        console.log('Using cached data');
        setImpianti(JSON.parse(cachedData));
        return
    }
  
    const response = await fetch('http://127.0.0.1:8000/impianti');
    const data = await response.json();
  
    localStorage.setItem('impianti', JSON.stringify(data));
  
    return data;
  }
  
  useEffect(()=>{
    getData()
  },[])

    return (
      <div className="dashboard-layout">
        <Header {...setIsAuthenticated}/>
        <Main/>
      </div>
    )
  };
  
  export default Dashboard;