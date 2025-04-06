import React, { useState } from "react";

const Profile = () => {
  const [userProfile, setUserProfile] = useState({ name: "", age: "" });

  return (
    <div>
      <h2>User Profile</h2>

      <div>
        <label>
          Name :{" "}
          <input
            type="text"
            name="name"
            value={userProfile.name}
            onChange={(event) =>
              setUserProfile({ ...userProfile, name: event.target.value })
            }
          />
        </label>
      </div>
      <div>
        <label>
          Age :{" "}
          <input
            type="number"
            name="age"
            value={userProfile.age}
            onChange={(event) =>
              setUserProfile({ ...userProfile, age: event.target.value })
            }
          />
        </label>
      </div>
      <div>
        <h3>Profile Info</h3>
        <p>Name : {userProfile.name}</p>
        <p>Age : {userProfile.age}</p>
      </div>
    </div>
  );
};

export default Profile;
