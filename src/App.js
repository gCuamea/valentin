import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

const AnimatedImages = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let animationTimeout;

    if (isActive) {
      // Después de 3 segundos, desactivar la animación
      animationTimeout = setTimeout(() => {
        setIsActive(false);
      }, 3000);
    }

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [isActive]);

  return (
    <div className="container">
      {isActive && (
        <div className="image-container">
          <img style={{left: '10vw', animationDelay: '200ms'}} src="https://i.imgur.com/O1S3VR9.png" alt="Imagen 1" />
          <img style={{left: '30vw', animationDelay: '400ms'}} src="https://i.imgur.com/O1S3VR9.png" alt="Imagen 2" />
          <img style={{left: '70vw', animationDelay: '250ms'}} src="https://i.imgur.com/O1S3VR9.png" alt="Imagen 3" />
        </div>
      )}
    </div>
  );
};

function App() {
  const opciones = ['No', 'Hasta crees que no', 'Me lastimas 🥺', 'No te voy a comprar una casa ya', 'Hoy cenas maruchan de quesito 🤮']
  const [count, setCount] = useState(0);
  const [btnText, setBtnText] = useState(opciones[0]);
  const [sheSaidYes, setSheSaidYes] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({});

  const handleHover = () => {
    const newX = Math.random() * (window.innerWidth - 230); // Adjust 100 based on the button's width
    const newY = Math.random() * (window.innerHeight - 230); // Adjust 40 based on the button's height
    setButtonPosition({ left: newX, top: newY, position: 'absolute' });
    setCount(() => count === 4 ? 0 : count + 1)
    setBtnText(opciones[count])
  }
  
  return (
    <div>
      {!sheSaidYes ? <div>
         <div class='emojibox'>🌻💘</div>
      <p>Tilina... ¿Quisieras ser mi San Valentín? 🥺💕</p>
      
      <button onClick={() => setSheSaidYes(true)}>
        Si 💛
      </button>
      <button
        style={buttonPosition}
        onMouseEnter={handleHover}
      >
        {btnText}
      </button>
      </div> : <div><p>Te amo 💕 (dame un besito)</p><AnimatedImages /></div>}
    </div>
  );
}

export default App;
