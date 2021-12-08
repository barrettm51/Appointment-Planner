import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
  handleChange,
  appointmentContact
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form style={{maxWidth: 200}} onSubmit={handleSubmit}>
      <label>Title</label>
      <input name='title' type='text' onChange={handleChange} value={title} />
      <label>Date</label>
      <input name='date' type='text' onChange={handleChange} value={date} />
      <label>Time</label>
      <input name='time' type='text' onChange={handleChange} value={time} />
      <ContactPicker contacts={contacts}
                     handleChange={handleChange}
                     appointmentContact={appointmentContact} />
      <br/> 
      <input type='submit' /> 
    </form>
  );
};
