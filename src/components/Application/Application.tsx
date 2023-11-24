import React from "react";

const Application = () => {
  return (
    <div>
      <h1>Page Header</h1>
      <h2>Section Header</h2>
      <p>All fields are mandatory</p>
      <form action="/submit" method="post">
        <label htmlFor="fname">First Name:</label>
        <input type="text" id="fname" name="fname" placeholder="First Name" />
        <br />
        <br />

        <label htmlFor="lname">Last Name:</label>
        <input type="text" id="lname" name="lname" />
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
        <label htmlFor="agreeTerms">
          <input type="checkbox" id="agreeTerms" /> I agree with terms
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Application;
