import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";

function App() {
  const [puppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(puppyId) {
    setFeatPupId(puppyId);
  }

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      <div className="puppy-list">
        {puppies.map((puppy) => (
          <p
            onClick={() => handleClick(puppy.id)}
            key={puppy.id}
            className="puppy-item"
          >
            {puppy.name}
          </p>
        ))}
      </div>

      {featPupId && (
        <div className="puppy-details">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;