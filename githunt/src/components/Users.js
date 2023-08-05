import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/Users.css";

const Users = () => {
  const [getData, setData] = useState([]);
  useEffect(() => {
    axios.get("https://api.github.com/users").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div className="users">
      <h1 className="top-users">⭐Top Users</h1>
      {getData.map((element, index) => {
        return (
          <div key={index}>
            <div className="avatar-name">
              <div>
                <img src={element.avatar_url} alt="" />
              </div>
              <div className="content">
                <h1>{element.login}</h1>
                {console.log(element.following)}
                {/* <h4>Followers: {element.followers}</h4>
                <h4>Following: {element.following}</h4> */}

                <a href={element.html_url} target="_blank">
                  <button>Visit Profile</button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
