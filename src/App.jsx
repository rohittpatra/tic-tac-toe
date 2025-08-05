import { useState } from 'react'
import './App.css'
import Block from './components/block.jsx'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const newBoard = [...board];
    
    if (calculateWinner(newBoard) || newBoard[index]) {
      return;
    }
    
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(board);
  const isTie = !winner && board.every(square => square !== null);

  const getStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (isTie) {
      return "It's a tie!";
    } else {
      return `Next player: ${isXNext ? 'X' : 'O'}`;
    }
  };

  return (
    <div className='board'>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Tic Tac Toe</h1>
      <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '20px' }}>
        {getStatus()}
      </p>
      
      <div className='row'>
        <Block value={board[0]} onClick={() => handleClick(0)} />
        <Block value={board[1]} onClick={() => handleClick(1)} />
        <Block value={board[2]} onClick={() => handleClick(2)} />
      </div>
      <div className='row'>
        <Block value={board[3]} onClick={() => handleClick(3)} />
        <Block value={board[4]} onClick={() => handleClick(4)} />
        <Block value={board[5]} onClick={() => handleClick(5)} />
      </div>
      <div className='row'>
        <Block value={board[6]} onClick={() => handleClick(6)} />
        <Block value={board[7]} onClick={() => handleClick(7)} />
        <Block value={board[8]} onClick={() => handleClick(8)} />
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button 
          onClick={resetGame}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default App