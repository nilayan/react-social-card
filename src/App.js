import React, { Component } from 'react';
import './App.css';
import SocialCard from './components/SocialCard';
import People from './people-data';

class App extends Component {
  render() {
    const peopleList = People.map((person, index) =>
      <SocialCard key={index}
        firstName={person.first_name}
        lastName={person.last_name}
        email={person.email}
        image={person.image} />
    );
    return (
      <div className="App">
        <p>social card: a stateless React component</p>
        {peopleList}
      </div>
    );
  }
}

export default App;
