import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

let arr = new Array(9);
console.log(arr, 'test');

const Square = ({current, game, setCurrent, setGame, num, setWinner, winner})=>{

  useEffect(() => {
    var a1 = [game[0], game[1], game[2]];
    var a2 = [game[0], game[3], game[6]];
    var a3 = [game[0], game[4], game[8]];
    var a4 = [game[3], game[4], game[5]];
    var a5 = [game[6], game[7], game[8]];
    var a6 = [game[1], game[4], game[7]];
    var a7 = [game[2], game[5], game[8]];
    var a8 = [game[2], game[4], game[6]];
    var items = [a1, a2, a3, a4, a5, a6, a7, a8];
    var x = ['x','x','x'];
    var o = ['o', 'o', 'o'];

    items.forEach((item)=>{
      if(JSON.stringify(item) === JSON.stringify(x)){
        setWinner('x');
      }

      else if(JSON.stringify(item) === JSON.stringify(o)){
        setWinner('o');
      }
    });


  }, [game, setWinner]);

  const handleClick = ()=>{
    var a = [...game];

    if (a[num]){

    }
    
    else{
     a.splice(num, 1, current);
     setGame(a);
     console.log(a, 'a');
 
    

      if (current==='x'){
        setCurrent('o');
      }
      else if(current==='o'){
        setCurrent('x');
    }

    
    console.log([a[0] ,a[1], a[2]], 'array');


  }


  }

  const handleNothing = ()=>{

  }



    return (
      <div
        className="square"
        style={squareStyle}
        onClick={winner === 'none' ? handleClick : handleNothing}
        >
        {game[num]}
      </div>
    );
  
    }
  

const Board = ({game, setGame, current, setCurrent, winner, setWinner })=>{

  const handleClear = ()=>{
    setGame(arr);
    setCurrent('x');
    setWinner('none');
    }
   
  
    return (
      <div style={containerStyle} className="gameBoard">
        <div className="status" style={instructionsStyle}>Next player: {current}</div>
        <div className="winner" style={instructionsStyle}>Winner: {winner}</div>
        <button  onClick = {handleClear} style={buttonStyle}>Reset</button>
        <div style={boardStyle}>

          <div className="board-row" style={rowStyle}>
            <Square game ={game} setGame={setGame} current={current} setCurrent={setCurrent} num={0} winner ={winner} setWinner={setWinner}/>
            <Square game ={game} setGame={setGame} current={current} setCurrent={setCurrent} num={1} winner ={winner} setWinner={setWinner}/>
            <Square game ={game} setGame={setGame} current={current} setCurrent={setCurrent} num={2} winner ={winner} setWinner={setWinner}/>
          </div>

          <div className="board-row" style={rowStyle}>
            <Square game ={game} setGame={setGame} current={current} setCurrent={setCurrent} num={3} winner ={winner} setWinner={setWinner}/>
            <Square game ={game} setGame={setGame} current={current} setCurrent={setCurrent} num={4} winner ={winner} setWinner={setWinner}/>
            <Square game ={game} setGame={setGame} current={current} setCurrent={setCurrent} num={5} winner ={winner} setWinner={setWinner}/>
          </div>

          <div className="board-row" style={rowStyle}>
            <Square game ={game} setGame={setGame} current={current} setCurrent={setCurrent} num={6} winner ={winner} setWinner={setWinner}/>
            <Square game ={game} setGame={setGame} current={current} setCurrent={setCurrent} num={7} winner ={winner} setWinner={setWinner}/>
            <Square game ={game} setGame={setGame} current={current} setCurrent={setCurrent} num={8} winner ={winner} setWinner={setWinner}/>
          
          </div>
        </div>
      </div>
    );
  }


const Game = ()=> {
  const [game, setGame] = useState(arr);
  const [winner, setWinner] = useState('none');
  const[current, setCurrent] = useState('x');


  
    return (
      <div className="game">
        <div className="game-board" >
          <Board game={game} setGame={setGame} current={current} setCurrent={setCurrent} winner={winner} setWinner={setWinner}/>
        </div>
      </div>
    );
  }

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
