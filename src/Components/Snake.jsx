import React, { useEffect, useRef, useState } from 'react';

const canvasSize = { width: 300, height: 300 };
const snakeSpeed = 100; // ms per frame
const gridSize = 10;
const cols = canvasSize.width / gridSize;
const rows = canvasSize.height / gridSize;
const initialSnake = [[10, 10]];
const initialDirection = [1, 0];


function Snake() {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState([5, 5]);
  const [direction, setDirection] = useState(initialDirection);
  const [isRunning, setIsRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(1)

  const resetGame = () => {
    setSnake(initialSnake);
    setDirection(initialDirection);
    setFood([5, 5]);
    setGameOver(false);
    setIsRunning(true);
    setScore(1);
  };

  const moveSnake = () => {
    if (!isRunning || gameOver) return;

    const newSnake = [...snake];
    const head = newSnake[newSnake.length - 1];
    const newHead = [head[0] + direction[0], head[1] + direction[1]];

    // Check for wall collision
    if (
      newHead[0] < 0 || newHead[0] >= cols ||
      newHead[1] < 0 || newHead[1] >= rows
    ) {
      setGameOver(true);
      setIsRunning(false);
      return;
    }

    for (let segment of newSnake) {
      if (segment[0] === newHead[0] && segment[1] === newHead[1]) {
        setGameOver(true);
        setIsRunning(false);
        return;
      }
    }


    newSnake.push(newHead);


    if (newHead[0] === food[0] && newHead[1] === food[1]) {
      setFood([
       Math.floor(Math.random() * cols),
       Math.floor(Math.random() * rows)
      ]);
      setScore(prev => prev + 1);
    } else {
      newSnake.shift();
    }

    setSnake(newSnake);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
      if (keys.includes(e.key)) e.preventDefault();

      if (!isRunning) {
        resetGame();
        return;
      }

      switch (e.key) {
        case 'ArrowUp':
          if (direction[1] === 0) setDirection([0, -1]);
          break;
        case 'ArrowDown':
          if (direction[1] === 0) setDirection([0, 1]);
          break;
        case 'ArrowLeft':
          if (direction[0] === 0) setDirection([-1, 0]);
          break;
        case 'ArrowRight':
          if (direction[0] === 0) setDirection([1, 0]);
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isRunning, direction]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning && !gameOver) moveSnake();
    }, snakeSpeed);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    context.clearRect(0, 0, canvasSize.width, canvasSize.height);

    // Draw snake
    context.fillStyle = 'green';
    snake.forEach(([x, y]) => {
      context.fillStyle = 'green';
      context.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);

      context.strokeStyle = '#000';
      context.lineWidth = 1;
      context.strokeRect(x * gridSize, y * gridSize, gridSize, gridSize)
    });

    // Draw food
    context.fillStyle = 'red';
    context.fillRect(food[0] * gridSize, food[1] * gridSize, gridSize, gridSize);

    // Overlay game over
    if (gameOver) {
      context.fillStyle = 'white';
      context.font = '20px Arial';
      context.fillText('Game Over', 90, 150);
      context.font = '14px Arial';
      context.fillText('Press any key to restart', 70, 180);
    } else if (!isRunning) {
      context.fillStyle = 'white';
      context.font = '16px Arial';
      context.fillText('Press any key to start', 80, 160);
    }

  }, [snake, food, gameOver, isRunning]);

  return (
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
        style={{ background: '#222', border: '2px solid #444' }}
      />
      <p style={{ color: 'white', fontSize: '1rem' }}>
      Score: {score}
      </p>
      <p style={{ color: 'white', fontSize: '0.9rem' }}>
        Use arrow keys to play!
      </p>
    </div>
  );
}

export default Snake;
