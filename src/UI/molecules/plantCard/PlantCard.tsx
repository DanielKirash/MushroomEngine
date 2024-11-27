import ButtonCrud from '../../atoms/buttons/ButtonCrud';
import './plantcard.css';

const PlantCard = () => {

    return (
        <div className="plantCardContainer">
            <div className="plantInfo">
                <div className="plantName">Impianto di Filtraggio</div>
                <div className="plantPosition">Capannone A2</div>
                <div className="plantStatus">ATTIVO</div>
            </div>
            <div className="plantDescription">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    volutpat semper purus, aliquam tincidunt nisi ornare eget. Aenean
                    efficitur eu mauris at euismod.
                </p>
            </div>
            <div className="plantButton">
                <ButtonCrud funzioneBtn='modifica'/>
                <ButtonCrud funzioneBtn='elimina'/>
            </div>
        </div>
    );
};

export default PlantCard;
