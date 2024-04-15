import React, { useEffect, useState } from 'react';
import Contacts from './contacts/Contacts';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import './App.css';

export function App() {
  const [contacts, setContacts] = useState([]);

  const getContacts = () => {
    const json = localStorage.getItem('contacts');
    const items = JSON.parse(json);
    return items;
  };

  const addContact = newContact => {
    const items = getContacts();
    const result = items.filter(word =>
      word.name.toLowerCase().includes(newContact.name.toLowerCase())
    );
    if (result.length > 0) return alert(`${result[0].name} already exists`);
    items.push(newContact);
    localStorage.setItem('contacts', JSON.stringify(items));
    setContacts(getContacts());
  };

  const findContact = param => {
    const items = getContacts();
    const result = items.filter(word =>
      word.name.toLowerCase().includes(param)
    );
    if (param === '') return setContacts(items);
    setContacts(result);
  };
  const deleteContact = id => {
    const items = getContacts();
    const result = items.findIndex(contact => contact.id === id);
    items.splice(result, 1);
    localStorage.setItem('contacts', JSON.stringify(items));
    setContacts(getContacts());
  };

  useEffect(() => {
    if (localStorage.getItem('contacts') === null)
      localStorage.setItem('contacts', JSON.stringify([]));
    setContacts(getContacts());
  }, []);

  useEffect(() => {}, [contacts]);

  return (
    <div className="app">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filterContacts={findContact} />
      <Contacts contactsList={contacts} deleteContact={deleteContact} />
    </div>
  );
}
