import React from "react";

export const ContactPicker = (props) => {
  return (
    <div>
      <label>Choose a Contact</label>
      <select name='appointmentContact' 
              id="appointmentContact"
              onChange={props.handleChange}
              value={props.appointmentContact} >
        <option value='default' key="default"> </option>
        {props.contacts.map((contact, index) => 
        <option value={contact.name} key={index}>{contact.name}</option>)}
      </select>
    </div>
  );
};
