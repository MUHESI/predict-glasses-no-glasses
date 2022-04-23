import React, { useEffect, useState } from "react";
import ChargeFile from "../components/Input";
// import ShowResult from '../components/showResult';
import { imgDev } from "../constants/";
import "../styles/styleHome.css";
import "../styles/chargeFile.css";
import { handleUploadFiles } from "../utils/controllerUploadFile";
import { postAPI } from "../utils/fetchData";

const Home = () => {
  const [image, setImage] = useState({
    uri: null,
    file: null
  });
  const [resPred, setResPred] = useState({ attendu: "", prediction: "" });

  const loadImage = (e) => {
    const URI = URL.createObjectURL(e.target.files[0]);
    setImage({ uri: URI, file: e.target.files[0] });
    //
    console.clear();
    console.log("file", image.file);
  };

  // Load a picture
  const handleSubmit = async (img_) => {
    let fileUploaded = null;
    if (img_.file) {
      fileUploaded = await handleUploadFiles.uploadFile(img_);
      const { url } = fileUploaded;

      // call API-IA
      if (url) {
        //
        // const resPrediction =
      }
      console.clear();
      console.log("url", url);
      // setFormData({ ...formData, avatar: url });
    }
  };

  const createPrediction = async () => {
    const res = await postAPI("");
    if (res) {
      //
    }
  };
  useEffect(() => {
    //
  }, []);

  return (
    <div className='mainHome'>
      <div className='contentResume'>
        Home udshcbs chuysdv jdsuyvisd udshcbs chuysdv jdsuyvisd
      </div>
      <div className='contentChargeFile-res'>
        <div className='firstFlex'>
          <h2> Charger votre photo ici </h2>

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
                <input type='file' className='' onChange={() => loadImage()} />
              </div>
              <div>
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={() => handleSubmit(image)}
                >
                  Charger
                </button>
              </div>
            </div>
          </div>
          {/* fin */}

          {/* <ChargeFile /> */}
        </div>
        <div className='lastFlex photoLoaded'>
          <h2> Photo chargée </h2>
          <img src={imgDev} alt='...' />
        </div>
        <div className='lastFlex'>
          <h2> Resultat de la prédiction </h2>
          <h4> Resultat attendu </h4>
          <h4> Resultat de la prediction </h4>
        </div>
      </div>
    </div>
  );
};
export default Home;
