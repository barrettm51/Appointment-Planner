import React, {useState, useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm.js';
import { TileList } from '../../components/tileList/TileList.js';

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //check for duplicate
    if(checkForDuplicate()) {
      return;
    } 
    const newContact = {
      name: name,
      email: email,
      phone: phone
    };
    props.handleSubmit(newContact);
    setName('');
    setEmail('');
    setPhone('');
  };

  useEffect(() => {

  }, [])
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  const handleChange = ({target}) => {
    switch(target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'email':
        setEmail(target.value);
        break;
      case 'phone':
        setPhone(target.value);
        break;
      default:
        break;
    }
  }

  const checkForDuplicate = () => {
    const duplicate = props.contacts.some(person => person.name === name);
    console.log(duplicate);
    return duplicate;
  }

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm onChange={handleChange} 
                     name={name} 
                     email={email} 
                     phone={phone} 
                     handleSubmit={handleSubmit}
                     checkForDuplicate={checkForDuplicate}
                     />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList listArray={props.contacts} />
      </section>
    </div>
  );
};
