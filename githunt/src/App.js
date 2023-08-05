import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Users from "./components/Users";
import axios from "axios";
import FoundUser from "./components/FoundUser";
function App() {
  const [name, setName] = useState("");
  const [foundUser, setFoundUser] = useState(null);
  const handleChange = (e) => {
    setName(e.target.value);
    setFoundUser(null);
  };
  const handlePress = (e) => {
    if (e.key === "Enter") {
      setName("");
      axios
        .get(`https://api.github.com/users/${name}`)
        .then((response) => {
          console.log(response.data);
          setFoundUser(response.data);
        })
        .catch(function (error) {
          console.log("Id not found!");
          setFoundUser(null);
          window.alert("No user found!");
        });
    }
  };

  const handleSubmit = () => {
    setName("");
    axios
      .get(`https://api.github.com/users/${name}`)
      .then((response) => {
        console.log(response.data);
        setFoundUser(response.data);
      })
      .catch(function (error) {
        console.log("Id not found!");
        setFoundUser(null);
        window.alert("No user found!");
      });
  };
  useEffect(() => {}, []);
  return (
    <div className="App">
      <Header />

      <div className="search">
        <input
          value={name}
          type="text"
          name="search"
          placeholder="Search.."
          onChange={handleChange}
          onKeyPress={handlePress}
        ></input>
        <button onClick={handleSubmit}>Search</button>
      </div>

      <div className="body">
        {foundUser && <FoundUser user={foundUser} />}
        <Users />
      </div>
    </div>
  );
}

export default App;
