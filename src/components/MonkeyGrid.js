import React, { useEffect, useState } from 'react';

const MonkeyGrid = () => {
  const [accessiblePoints, setAccessiblePoints] = useState(0);

  useEffect(() => {
    // Update the state with the result
    calculateAccessiblePoints();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Function to calculate the sum of digits of a number
  const sumOfDigits = (num) => {
    return num
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, digit) => acc + digit, 0);
  };

  // Function to check if a point is accessible
  const isAccessible = (x, y) => {
    const absX = Math.abs(x);
    const absY = Math.abs(y);
    const sumOfDigitsX = sumOfDigits(absX);
    const sumOfDigitsY = sumOfDigits(absY);
    return sumOfDigitsX + sumOfDigitsY <= 19;
  };

  // Function to calculate the number of accessible points
  const calculateAccessiblePoints = () => {
    let count = 0;
    for (let x = -19; x <= 19; x++) {
      for (let y = -19; y <= 19; y++) {
        if (isAccessible(x, y)) {
          count++;
        }
      }
    }
    setAccessiblePoints(count);
  };

  return (
    <div>
      <h1>Accessible Points for the Monkey</h1>
      <p>Number of accessible points: {accessiblePoints}</p>
    </div>
  );
};

export default MonkeyGrid;
