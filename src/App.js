import logo from './logo.svg';
import './App.css';

import { Link } from "react-router-dom";

function Home() {
  return(
    <div>
      <nav>
        <span><Link to="/practice1">Practice 1</Link></span>
      </nav>
    </div>
  );
}


export function Practice1() {
  const a = 5;
  const b = 6;
  const c = 3;
  var result = Combine(a,b,c);
    
    return(
      <div>
        <p>Result for the Expression {a} * {b} / {c} = {result}</p>
      </div>
    );
  
}

function Combine(a,b,c) {
  var output= a * b / c;
  return(output);
}

export function App() {
  return <Home />;
}
