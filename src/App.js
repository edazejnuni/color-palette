import { useState } from 'react';
import './App.css';

function App() {

  const [selectedColor, setSelectedColor] = useState("#000000")
  const [colorsArray, setColorsArray] = useState([])
  const [backgroundColor, setBackgroundColor] = useState("")
 
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleRemove = (index) =>{
    const updatedColorsArray = [...colorsArray];
    updatedColorsArray.splice(index, 1);
    setColorsArray(updatedColorsArray);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    setColorsArray([...colorsArray, selectedColor]);
    setSelectedColor('');
  };

  return (
    <div className="App"  style={{  backgroundColor: backgroundColor}} >
      <div className='box__handler'>
        <h4 className='title'>Select color:</h4>
        <input type='color' value={selectedColor} onChange={handleColorChange}/> 
      </div>
      <div className='grid-container'>
      {colorsArray.map((color, index) => (
        <div className='flex'>
        <button
          key={index}
          style={{
            backgroundColor: color,
            width: "50px",
            height: "50px",
            border: "2px solid #ffffff"
          }}
          onClick={()=>{setBackgroundColor(color)}}
        ></button>
        <button style={{backgroundColor:"transparent", width:"10px", height:"10px", border:"0", position: "relative",top: "9px",left: "20px",fontSize: "20px", cursor: "pointer"}} onClick={handleRemove}>x</button>
        </div>
      ))}
    </div>

      <button type='submit' onClick={handleSubmit} className='primary__btn'>Add Color</button>
    </div>
  );
}

export default App;
