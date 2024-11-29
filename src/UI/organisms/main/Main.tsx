import "./main.css";
import Sidebar from "../sidebar/Sidebar";
import MainSection from "../mainSection/MainSection";
import { MainProps } from "../../../types/MainProps";
import { PlantProvider } from "../../../contexts/PlantContext";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <main className="main">
      <PlantProvider>
        <Sidebar />
        <MainSection />
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
