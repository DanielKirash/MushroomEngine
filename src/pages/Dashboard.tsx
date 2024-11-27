import { useEffect } from "react";
import Header from "../UI/organisms/header/Header";
import Main from "../UI/organisms/main/Main";
import '../pages/layout.css'

async function getData(){

  const cachedData = localStorage.getItem('impianti');
  if (cachedData) {
      console.log('Using cached data');
      return JSON.parse(cachedData);
  }

  const response = await fetch('./data/data.json');
  const data = await response.json();

  localStorage.setItem('impianti', JSON.stringify(data));

  return data;
}


const Dashboard = () => {
  
  useEffect(()=>{
    getData()
  },[])

    return (
      <div className="dashboard-layout">
        <Header/>
        <Main/>
      </div>
    )
  };
  
  export default Dashboard;