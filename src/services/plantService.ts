import { PlantType } from "../types/PlantType"

const url = 'http://127.0.0.1:8000'
const impiantiUrl = url + '/impianti'

export const fetchPlants = async () => {
    const response = await fetch(impiantiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json()
    return data
}

export const putPlants = async (plant: PlantType) => {
    const impiantiUrl = `http://127.0.0.1:8000/impianti/${plant._id}`;
    const response = await fetch(impiantiUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(plant)
    });

    const data = await response.json();
    return data;
}
