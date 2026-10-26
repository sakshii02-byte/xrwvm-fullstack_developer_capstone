import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Registration form submitted.');
  };

  return (
    <div className="container mt-5">
      <h2>Sign-up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <input id="username" name="username" className="form-control"
            value={formData.username} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="first_name">First Name</label>
          <input id="first_name" name="first_name" className="form-control"
            value={formData.first_name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="last_name">Last Name</label>
          <input id="last_name" name="last_name" className="form-control"
            value={formData.last_name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="form-control"
            value={formData.email} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password"
            className="form-control" value={formData.password}
            onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default Register;
