import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact: (state, action) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    filterContact: (state, action) => {
      const items = state.contacts;
      const result = items.filter(word =>
        word.name.toLowerCase().includes(action.payload)
      );
      if (action.payload === '') {
        state.contacts = [...items];
        return;
      } else {
        state.contacts = [...result];
      }
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  contactSlice.actions;
