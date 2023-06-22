import React, { useState } from "react";
import axios from "axios";
import "../components/UploadFile.css";
import Battery from "./garbage/Battery";
import Biological from "./garbage/Biological";
import BrownGlass from "./garbage/BrownGlass";
import Trash from "./garbage/Trash";
import Metal from "./garbage/Metal";
import Plastic from "./garbage/Plastic";
import GreenGlass from "./garbage/GreenGlass";
import Paper from "./garbage/Paper";
import Cardboard from "./garbage/Cardboard";
import Clothes from "./garbage/Clothes";
import Shoes from "./garbage/Shoes";
import WhiteGlass from "./garbage/WhiteGlass";

const UploadFile = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [uploadImage, setUploadImage] = useState(null);
  const [data, setData] = useState([]);

  const handleUpload = async () => {
    if (uploadImage) {
      const formData = new FormData();
      formData.append("image", uploadImage);

      try {
        const response = await axios.post(
          "http://localhost:5000/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error uploading image: ", error);
      }
    }
  };

  function getClass(color) {
    switch (color) {
      case "battery":
        return <Battery />;
      case "biological":
        return <Biological />;
      case "brown-glass":
        return <BrownGlass />;
      case "trash":
        return <Trash />;
      case "metal":
        return <Metal />;
      case "plastic":
        return <Plastic />;
      case "green-glass":
        return <GreenGlass />;
      case "paper":
        return <Paper />;
      case "cardboard":
        return <Cardboard />;
      case "clothes":
        return <Clothes />;
      case "shoes":
        return <Shoes />;
      case "white-glass":
        return <WhiteGlass />;
      default:
        return null;
    }
  }

  return (
    <div className="UploadFile">
      <h1>Garbage Classification</h1>
      <h2>Select an image to make a classification</h2>
      <div className="Photo-box">
        {/* eslint-disable-next-line */}
        <img width={"250px"} src={previewImage} />
        <div className="Input">
          <input
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setPreviewImage(URL.createObjectURL(event.target.files[0]));
              setUploadImage(event.target.files[0]);
            }}
          />
        </div>
      </div>
      <div className="Classify">
        <button className="Button" onClick={handleUpload}>
          Classify!
        </button>
      </div>
      <div className="Result">
        <p>{getClass(data.class)}</p>
        {data.confidence && <p>Accuracy: {(data.confidence * 100).toFixed(2)} %</p>}
      </div>
    </div>
  );
};

export default UploadFile;
