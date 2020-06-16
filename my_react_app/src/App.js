import React from 'react';
import Title from './Title.js';
import Item from './Item.js';
import './App.css';

function App() {
    const people = [
      {id: 1, name: "Katie", class: "SDI", location: "Denver", role: "Instructor"},
      {id: 2, name: "Jean-Marc", class: "SDI", location: "Chicago",  role: "Instructor"},
      {id: 3, name: "Pete", class: "SDI", location: "New York", role: "Instructor"},
      {id: 4, name: "Mattias", class: "SDI", location: "Dallas", role: "Student"},    
      {id: 5, name: "Tanner", class: "SDI", location: "Maui", role: "Student"},
      {id: 6, name: "Ash", class: "SDI", location: "Minneapolis", role: "Student"},
      {id: 7, name: "Brandon", class: "SDI", lcoation: "Phoenix", role: "Student"},
      {id: 8, name: "Jeff", class: "SDI", location: "Tulsa", role: "Student"},
      {id: 9, name: "Bill", class: "SDI", location: "Miami", role: "Student"},
      {id: 10, name: "Taryn", class: "SDI", location: "Bozeman", role: "Student"},
      {id: 11, name: "David", class: "SDI", location: "Seattle", role: "Student"},
      {id: 12, name: "Layla", class: "SDI", location: "San Francisco", role: "Student"},
  ]
  return (
    <div className="App">
      <Title title= {'Class List'}/>
      <Item list = {people}/>
    </div>
  );
}

export default App;
