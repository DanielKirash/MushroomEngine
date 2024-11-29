import { useEffect, useState } from "react";
import Header from "../UI/organisms/header/Header";
import Main from "../UI/organisms/main/Main";
import '../pages/layout.css'
import ButtonCrud from "../UI/atoms/buttons/ButtonCrud";

export type DashboardProps = {
  setIsAuthenticated: (value: boolean) => void;
}

const Dashboard = (setIsAuthenticated: DashboardProps) => {
  async function fetchData(){

    const response = await fetch('http://127.0.0.1:8000/impianti');
    const data = await response.json();
  
    localStorage.setItem('impianti', JSON.stringify(data));
  
    setData(data);
  }
  const [data, setData] = useState<any>(null)
  useEffect(()=>{
    fetchData()
  },[])
  
  const handleAdd = () => {
    console.log("ADD");
}

    return (
      <div className="dashboard-layout">
        <Header {...setIsAuthenticated}/>
        <Main/>
        <ButtonCrud funzioneBtn="aggiungi" testo="+" onClick={handleAdd}/>
      </div>
    )
  };
  
  export default Dashboard;