import { motion } from "framer-motion";
import { useState } from "react";
import Confetti from "react-confetti";
import "./App.css";

function App() {
  const [showSurprise, setShowSurprise] = useState(false);

  const handleSurprise = () => {
    setShowSurprise(true);
  };

  return (
    <div className="app">
      <Confetti recycle={showSurprise} numberOfPieces={showSurprise ? 200 : 0} />

      {/* Welcome Section */}
      <motion.div
        className="welcome"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Happy 22nd Birthday Diksha! 🎉</h1>
        <p>"Now, where can I sign up to make all your other days just as special?" 🎈</p>
        <button onClick={handleSurprise} className="surprise-button">
          {showSurprise ? "Make It Rain Again 🎊" : "Click Me To Witness an Amazing Journey"}
        </button>
      </motion.div>

      {/* Surprise Section */}
      {showSurprise && (
        <motion.div
          className="surprise-section"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>🎊 Hey Cutie Thanks For Always Sticking Together! 🎊</h2>
          
           <p> Just a Reminder of how much cute you look!:</p>
          <div className="gallery">
            {["image1.jpeg", "image2.jpeg", "image3.jpeg","image4.jpeg"].map((src, index) => (
              <motion.div
                className="gallery-item"
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={src} alt={`Memory ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
      <p>Made with 💖 by Alok Kushwaha.</p>
    </div>
  );
}

export default App;