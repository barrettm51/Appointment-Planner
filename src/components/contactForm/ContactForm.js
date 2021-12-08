import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  onChange,
  checkForDuplicate
}) => {
  const regex= /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/;

  return (
    <form style={{maxWidth: 200}} onSubmit={handleSubmit} >
      <label>Name</label>
      <input type='text' name='name' onChange={onChange} value={name}/>
      <span style={{ color: 'red', fontSize: 12 }}>{checkForDuplicate() ? 'This name is already in contacts' : ''} </span>
      <label>Email</label>
      <input type='text' name='email' onChange={onChange} value={email} />
      <label>Phone Number</label>
      <input type='text' name='phone' onChange={onChange} value={phone}/>
      <span style={{ color: 'red', fontSize: 12 }}>{regex.test(phone)  ? '' : 'Please enter a valid US phone number'} </span>
      <input type='submit' />
    </form> 
  );
};
