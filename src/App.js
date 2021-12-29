import { useState } from "react";

function App() {
  //count
  const [count, setCount] = useState(0);
  const [colorMinus, setColorMinus] = useState("#adda1a");
  const [colorPlus, setColorPlus] = useState("#3e8e41");

  const handleMinusClick = () => {
    if(count > 0){
      setCount(count - 1);
    }if(count == 1 || count == 0){
      setColorMinus("red");
    }
    setColorPlus("#3e8e41");
  }

  const handlePlusClick = () => {
    if(count < 10){
      setCount(count + 1)
      if(count == 9){
        setColorPlus("red");
      }
      setColorMinus("#adda1a");   
    }
  }

  return (
    <div className="centralizador">
      <h1>Contador: {count}</h1>

      <button 
      onClick={handlePlusClick} style={{backgroundColor: colorPlus}} className="mais">+</button>

      <button onClick={handleMinusClick} style={{backgroundColor: colorMinus}} className="menos">-</button>
    </div>
  );
}

export default App;
