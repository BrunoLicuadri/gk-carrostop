import './styles.css';
import bugati1 from '../../../assets/bugatti_la_voiture_noire_1.png'
import bugati2 from '../../../assets/bugatti_la_voiture_noire2.png'

export default function Bugati(){
    return(
        <div className="gkct-card-container">
            <img src={bugati1} alt="Img Bugati la voiture noire" />
            <img src={bugati2} alt="Img Bugati la voiture noire" />
            <h2>Bugati la voiture noire</h2>
          </div>
    );
}