import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
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
