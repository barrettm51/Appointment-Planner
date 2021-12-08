import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm"
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
 const [title, setTitle] = useState('');
 const [date, setDate] = useState('');
 const [time, setTime] = useState('');
 const [appointmentContact, setAppointmentContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      title: title,
      date: date,
      time: time,
      appointmentContact: appointmentContact
    };
    props.handleSubmit(newAppointment);
    setTitle('');
    setDate('');
    setTime('');
    setAppointmentContact('');   
  };

  const handleChange = ({target}) => {
    switch(target.name) {
      case 'title':
        setTitle(target.value);
        break;
      case 'date':
        setDate(target.value);
        break;
      case 'time':
        setTime(target.value);
        break;
      case 'appointmentContact':
        setAppointmentContact(target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm contacts={props.contacts} 
                         handleChange={handleChange} 
                         handleSubmit={handleSubmit}
                         title={title}
                         date={date}
                         time={time}
                         appointmentContact={appointmentContact} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList listArray={props.appointments} />
      </section>
    </div>
  );
};
