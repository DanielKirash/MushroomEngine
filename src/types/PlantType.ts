import { MachinaryType } from "./MachinaryType";

export type PlantType = {
    id?: string;
    name?: string;
    location?: string;
    description?: string;
    status?: string;
    macchinari?: MachinaryType[];
}