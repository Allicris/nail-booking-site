import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

import { SAVE_APPOINTMENT } from '../utils/mutations';
import { Services } from '../../../server/models/index'; //not sure if this is possible or right, not green

const createAppointmentForm = () => {
  if (!Auth.loggedIn()) {
    return (
      <h3>
        You must be logged in to view this page.
      </h3>
    )
  };
    const [formState, setFormState] = useState({ email: '', password: '' });  //think this sets the form input fields
    const [login, { error, data }] = useMutation(LOGIN_USER); // not sure if this is right here
    const [saveAppointment] = useMutation(SAVE_APPOINTMENT);
    const [selectedOption, setSelectedOption] = useState('');
    const servicesData = [Services];

    const options = servicesData.forEach((item) => (
      <option key={item.name} value={item.id}>
        {item.name}
      </option>
    ));



  
   // update state based on form input changes
   const handleChange = (event) => {
    const { name, value } = event.target;
  
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  //need to add all these changes to the handleChange function

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await saveAppointment({
        variables: { ...formState },
      });
  
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  
    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  }

  return (
    <form onSubmit={handleFormSubmit}>

      <div className="form-group">
        <label htmlFor="date">Select a Date:</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MM/dd/yyyy"
        />
      </div>

// feed service in - each service would have their 
      <div className="form-group">
        <label htmlFor="dropdown">Select an Option:</label>
        <select
          id="dropdown"
          className="form-select"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options}
        </select>
      </div>


      <button type="submit">Submit</button>
    </form>
  );
}

export default createAppointmentForm;
