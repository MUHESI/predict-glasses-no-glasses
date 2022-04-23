import React from "react";
import "../styles/chargeFile.css";
function ChargeFile() {
  return (
    <div className='contentInputPicture'>
      <div className='contentInput'>
        <div>
          {/* <label> Resultat attendu </label> */}
          <input
            type='text'
            className='inputText'
            placeholder=' Entrez le resultat attendu, ex  glasses'
          />
        </div>
        <div>
          {/* <label> Entrer le lien de la photo </label> */}
          <input type='file' className='' />
        </div>
        <div>
          <button type='button' className='btn btn-primary'>
            Charger
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChargeFile;
