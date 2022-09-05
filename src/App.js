// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import List from './components/List';
import Data from './components/Data';

function App() {
  const[people,setPeople]=useState(Data);
  // const clearAll=()=>{
  //   setPeople([]);

  // }
  return (
    <div className="App">
      <main>
        <section className="container">
          <h2> {people.length} birthdays todays</h2>
          <List people={people}/>
          <button onClick={()=>setPeople([])}>Clear All</button>      
        </section>
       </main>
    </div>
  );
}

export default App;
