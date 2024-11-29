import "./main.css";
import Sidebar from "../sidebar/Sidebar";
import MainSection from "../mainSection/MainSection";
import { PlantProvider } from "../../../contexts/PlantContext";
import { Toaster } from "react-hot-toast";
import { useState } from "react";


const Main = () => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <main className="main">
      <PlantProvider>
        <Sidebar showModal={showModal} setShowModal={setShowModal}/>
        <MainSection showModal={showModal} setShowModal={setShowModal}/>
      </PlantProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
          },
        }}
      />
    </main>
  );
};

export default Main;
