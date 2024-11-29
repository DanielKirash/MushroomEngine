export type MachinaryType = {
    _id?: string,
    plant_id?: string,
    name?: string,
    type?: string, 
    status?:string
    setShowModal?: ((value: boolean) => void) | undefined;
}