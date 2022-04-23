import React from 'react'
import ChargeFile from '../components/Input';
// import ShowResult from '../components/showResult';
import {imgDev} from '../constants/'
import '../styles/styleHome.css'
 const Home = () => {
    return (
        <div className="mainHome" >
            <div className="contentResume" >                
            Home    
            udshcbs chuysdv jdsuyvisd   
            udshcbs chuysdv jdsuyvisd   
         </div>
         <div className="contentChargeFile-res" >
        <div className="firstFlex" >
            <h2> Charger votre photo ici </h2>
            <ChargeFile />   
       </div>
         <div className="lastFlex photoLoaded" >
            <h2> Photo chargée   </h2>
            <img src={imgDev} alt="..."/>           
        </div>
        <div className="lastFlex" >
            <h2> Resultat de la prédiction   </h2>
            <h4> Resultat attendu  </h4>
            <h4> Resultat de la prediction  </h4>
        </div>
       
       </div>

        </div>
    )
}
export default Home;