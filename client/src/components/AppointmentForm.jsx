import React, { useState } from "react";
import { SAVE_APPOINTMENT } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import trash from "../assets/images/trash.png";

const AppointmentForm = ({ selectedServices, removeService }) => {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const handleRemoveService = (service) => {
    removeService(service);
  };

  const [saveAppointment, { error }] = useMutation(SAVE_APPOINTMENT);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!appointmentDate || !appointmentTime) {
      alert("Please fill in all fields");
      return;
    }
  
    console.log(selectedServices);
  
    const appointment = {
      services: selectedServices.map((service) => ({
        name: service.name,
        price: service.price,
        description: service.description,
      })),
      appointmentDate,
      appointmentTime,
    };
    console.log("Appointment Data:", appointment);
  
    try {
      const { data } = await saveAppointment({
        variables: {
          appointmentData: appointment,
        },
      });
      console.log("Mutation Response:", data);
  
      setAppointmentDate("");
      setAppointmentTime("");
    } catch (err) {
      console.error(err);
    }
  };

  const headerStyle = {
    fontFamily: "Playfair Display, serif",
    color: "#C75048",
    margin: "50px",
    padding: "40px",
    textAlign: "center",
  };

  const pinkHeaderStyle = {
    fontFamily: "DM Sans, serif",
    color: "#black",
    fontSize: "15px",
    margin: "35px",
  };

  const background = {
    backgroundColor: "#FFB395",
    borderRadius: "25px",
  }

  const submitBtn = {
    backgroundColor: "#C75048",
    color: "white",
    padding: "12px",
    margin: "25px",
    borderRadius: "20px",
    cursor: "pointer"
  }

  const removeBtn = {
    backgroundColor: "#FFDCE6",
    padding: "8px",
    borderRadius: "20px",
    borderColor: "#FFDCE6",
    margin: "10px",
    cursor: "pointer"
  }

  const input = {
    borderRadius: "10px",
    padding: "8px",
    backgroundColor: "#FFDCE6"
  }

  const listItems = {
    fontFamily: "Playfair Display, serif",
    padding: "10px",
    listStyle: "none",
    fontSize: "15px",
    color: "black",
  };

  const xsmImg = {
    maxWidth: "17px",
  };

  return (
    <div style={background}>
      <h2 style={{ ...headerStyle, textShadow: "1px 1px 1px white"}}> Schedule your appointment!</h2>
      <form>
        <div style={pinkHeaderStyle}>
          <label style={{fontFamily: "Playfair Display", fontSize: "25px"}}>Selected Services:</label>
          <ul style={listItems}>
            {selectedServices.map((service) => (
              <li key={service.id}>
                {service.name}
                <button
                style={removeBtn}
                  onClick={() => handleRemoveService(service)}
                >
                <img src={trash} alt="trash" style={xsmImg} />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div style={{...pinkHeaderStyle, paddingTop: "10px"}}>
          <label style={{paddingBottom: "10px"}}>Appointment Date:</label>
          <input
          style={{ ...input, cursor: "pointer"}}
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          />
        </div>
        <div style={pinkHeaderStyle}>
          <label style={{paddingBottom: "10px"}}>Appointment Time:</label>
          <input
          style={{ ...input, cursor: "pointer"}}
            type="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
          />
        </div>
        <div style={pinkHeaderStyle}>
          <button style={submitBtn} onClick={handleSubmit}>
            Schedule Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;