import { MachinaryType } from "./MachinaryType";

export type PlantType = {
    id: number;
    name: string;
    location: string;
    description: string;
    status: string;
    machinary?: MachinaryType[];
}