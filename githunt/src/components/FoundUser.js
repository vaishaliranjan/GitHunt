import React from "react";

const FoundUser = ({ user }) => {
  return (
    <div>
      {" "}
      <div className="avatar-name">
        <div>
          <img src={user.avatar_url} alt="" />
        </div>
        <div className="content">
          <h1>{user.login}</h1>
          <h4 style={{ margin: "1px" }}>Following: {user.following}</h4>
          <h4 style={{ margin: "1px" }}>Followers: {user.followers}</h4>
          {console.log(user.following)}
          {/* <h4>Followers: {element.followers}</h4>
    <h4>Following: {element.following}</h4> */}

          <a href={user.html_url} target="_blank">
            <button>Visit Profile</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FoundUser;
