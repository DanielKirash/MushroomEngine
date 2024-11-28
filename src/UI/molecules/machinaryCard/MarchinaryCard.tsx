
import { MachinaryType } from '../../../types/MachinaryType';
import ButtonCrud from '../../atoms/buttons/ButtonCrud';
import './machinarycard.css';

const MachinaryCard = ({ machinaryItem }: { machinaryItem: MachinaryType }) => {
    return (
        <div className="smallMachinaryCardContainer">
            <div className="smallMachinaryInfo">
                <div className="smallMachinaryName">Nome: {machinaryItem.name}</div>
                <div className="smallMachinaryType">Tipo: {machinaryItem.type}</div>
                <div className="smallMachinaryStatus">Status: {machinaryItem.status}</div>
                <div className='crudButtons'>
                    <ButtonCrud funzioneBtn='modificaMachinary' testo='MODIFICA'/>
                    <ButtonCrud funzioneBtn='eliminaMachinary' testo='ELIMINA'/>
                </div>
            </div>
        </div>
    );
};

export default MachinaryCard;