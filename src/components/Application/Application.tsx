import React from "react";

const Application = () => {
  return (
    <div>
      <form action="/submit" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <br />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />
        <br />

        <label htmlFor="interests">Interests:</label>
        <br />
        <input type="checkbox" id="music" name="interests" value="music" />
        <label htmlFor="music">Music</label>
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Application;
