import React, { useState, useEffect } from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList'

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!duplicate){
      //Llamar addContact via props sólo si el estado duplicate es falso, lo que 
      //nos quiere decir que no existe un contacto con el mismo nombre
      //Y después de llamar a la función se setea a como estaba orginalmente cada una
      //De los campos en el form
      addContact(name, phone, email)
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  useEffect(() =>{
    //Función que revisa si existe el nombre dentro de la lista de contactos
    const nameExist = () =>{
      const exist = contacts.find((contact) => contact.name === name);
      if (exist !== undefined){
        return true;
      }
      else{
        return false;
      }
    }
    //Como la función nameExist revisa si el nombre existe el siguiente if 
    //va a determinar cómo regresará el setDuplicate.
    if(nameExist()){
      setDuplicate(true);
    }
    else{
      setDuplicate(false);
    }
  }, [name, contacts, duplicate]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
