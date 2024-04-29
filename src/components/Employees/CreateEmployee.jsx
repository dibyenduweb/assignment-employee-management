import React, { useState } from 'react';
import axios from 'axios'; 

import Home from '../Home/Home';

const CreateEmployee = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    datetime: '',
    socialMediaLink: '',
    phoneNumber: '',
    employeeType: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post('http://localhost:5000/employeeList', formData);
      console.log(response.data); 
    } catch (error) {
      console.error('Error:', error); 
    }
  };

  return (
    <>
      <Home />
      <form onSubmit={handleSubmit}>
        <div className='px-72'>
          <label htmlFor="name" className="block">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 mb-4 p-2 border border-gray-300 rounded-md w-full" />

          <label htmlFor="email" className="block">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 mb-4 p-2 border border-gray-300 rounded-md w-full" />

          <label htmlFor="password" className="block">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 mb-4 p-2 border border-gray-300 rounded-md w-full" />

          <label htmlFor="datetime" className="block">Date and Time:</label>
          <input type="datetime-local" id="datetime" name="datetime" value={formData.datetime} onChange={handleChange} className="mt-1 mb-4 p-2 border border-gray-300 rounded-md w-full" />

          <label htmlFor="socialMediaLink" className="block">Social Media Link:</label>
          <input type="url" id="socialMediaLink" name="socialMediaLink" value={formData.socialMediaLink} onChange={handleChange} className="mt-1 mb-4 p-2 border border-gray-300 rounded-md w-full" />

          <label htmlFor="phoneNumber" className="block">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="mt-1 mb-4 p-2 border border-gray-300 rounded-md w-full" />

          <label htmlFor="employeeType" className="block">Employee Type:</label>
          <select id="employeeType" name="employeeType" value={formData.employeeType} onChange={handleChange} className="mt-1 mb-4 p-2 border border-gray-300 rounded-md w-full">
            <option value="">Select Employee Type</option>
            <option value="fullTime">Full Time</option>
            <option value="partTime">Part Time</option>
            <option value="contract">Contract</option>
          </select>
          <button type="submit" className='bg-green-500 text-white p-2 rounded'>Submit</button>
        </div>
      </form>
    </>
  );
};

export default CreateEmployee;
