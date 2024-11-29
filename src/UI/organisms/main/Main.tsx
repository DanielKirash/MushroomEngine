import "./main.css";
import Sidebar from "../sidebar/Sidebar";
import MainSection from "../mainSection/MainSection";

import { Toaster } from "react-hot-toast";
import { useState } from "react";


const Main = () => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <main className="main">
        <Sidebar showModal={showModal} setShowModal={setShowModal}/>
        <MainSection showModal={showModal} setShowModal={setShowModal}/>
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
