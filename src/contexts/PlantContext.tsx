
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { PlantType } from '../types/PlantType'; 
import { fetchPlants, putPlants } from '../services/plantService';


interface PlantContextProps {
  impianti: PlantType[];
  setImpianti: React.Dispatch<React.SetStateAction<PlantType[]>>;
  updatePlant: (plant: PlantType) => void;
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

  return (
    <PlantContext.Provider value={{ impianti, setImpianti, updatePlant }}>
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