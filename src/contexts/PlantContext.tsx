
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { PlantType } from '../types/PlantType'; 
import { dropPlant, fetchPlants, putPlants } from '../services/plantService';


interface PlantContextProps {
  impianti: PlantType[];
  setImpianti: React.Dispatch<React.SetStateAction<PlantType[]>>;
  updatePlant: (plant: PlantType) => void;
  deletePlant: (plant: PlantType) => Promise<boolean>;
}

const PlantContext = createContext<PlantContextProps | null>(null);

export const PlantProvider = ({ children }: { children: ReactNode }) => {
  const [impianti, setImpianti] = useState<PlantType[]>([]);

  //FUNZIONE PER FETCHARE I DATI (READ)
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlants();
      if (data) {
        setImpianti(data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log('Modificato lo stato globale');
  }, [impianti]);

  //FUNZIONE PER AGGIORNARE I DATI (UPDATE)
  const updatePlant = async (plant: PlantType) => {
    try {
      const updatedPlant = await putPlants(plant);
  
      // Aggiornaa lo stato locale con i dati aggiornati mappando su quelli esistenti
      setImpianti((prevImpianti) => {
        return prevImpianti.map((impianto) => {
          if (impianto._id === plant._id) {
            return { ...impianto, ...updatedPlant };
          } else {
            return impianto;
          }
        });
      });
    } catch (error) {
      console.error("Error updating plant:", error);
    }
  };

  //FUNZIONE PER ELIMINARE I DATI (DELETE)

  const deletePlant = async (plant: PlantType): Promise<boolean> => {

    if (!plant._id) {
      console.error("Cannot delete plant: Invalid or missing ID");
      return false;
    }

    try {

      const response = await dropPlant(plant);
      if (response.message === "Eliminato con successo") {
        console.log("Plant deleted successfully");
        setImpianti((prevImpianti) => 
          prevImpianti.filter((impianto) => impianto._id !== plant._id)
        );
        
        return true; 
      } else {
        console.error("Plant deletion failed on server");
        return false;
      }
    } catch (error) {
      console.error("Error during plant deletion:", error);
      return false;
    }
  };

  return (
    <PlantContext.Provider value={{ impianti, setImpianti, updatePlant, deletePlant }}>
      {children}
    </PlantContext.Provider>
  );
};

// CUSTOM HOOK PER UTILKIZARE IL CONTESTO
export const usePlants = () => {
  const context = useContext(PlantContext);

  if (!context) {
    throw new Error('useImpianti must be used within an ImpiantiProvider');
  }

  return context;
};