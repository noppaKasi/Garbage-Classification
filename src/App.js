import React from "react";
import "./App.css";

const App = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [result, setResult] = React.useState(null);

  const do_CV = () => {
    if (selectedImage) {
      console.log(selectedImage);
      setResult("result");
    }
  };

  return (
    <div className="App">
      <div className="Photo-box">
        <h1>Select an image to make a classification</h1>
        <img alt="not found" width={"250px"} src={selectedImage} />
      </div>
      <div>
        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(URL.createObjectURL(event.target.files[0]));
          }}
        />
        <button className="Button" onClick={(e) => do_CV()}>
          Classification GO!
        </button>
      </div>
      <div className="Result-box">{result}</div>
    </div>
  );
};

export default App;
