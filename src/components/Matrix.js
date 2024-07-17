import React, { useState } from 'react';
import './Matrix.css';

const Matrix = () => {
  const size = 3;
  const [matrix, setMatrix] = useState(Array(size * size).fill(null));
  const [clicks, setClicks] = useState([]);
  const [isLastBoxClicked, setIsLastBoxClicked] = useState(false);

  const handleBoxClick = (index) => {
    if (isLastBoxClicked) return;

    const newMatrix = [...matrix];
    newMatrix[index] = 'green';
    setMatrix(newMatrix);

    setClicks([...clicks, index]);

    if (clicks.length === size * size - 1) {
      setIsLastBoxClicked(true);
      changeToOrange(newMatrix, [...clicks, index]);
    }
  };

  const changeToOrange = (newMatrix, clicksOrder) => {
    let delay = 0;
    clicksOrder.forEach((index) => {
      setTimeout(() => {
        newMatrix[index] = 'orange';
        setMatrix([...newMatrix]);
      }, delay);
      delay += 500; // Change color every 500ms
    });
  };

  return (
    <div className="matrix">
      {matrix.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleBoxClick(index)}
        />
      ))}
    </div>
  );
};

export default Matrix;
