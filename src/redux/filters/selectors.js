import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filters) => {
    const filteredContacts = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filters.toLowerCase()) ||
        contact.number.includes(filters)
    );
    return filteredContacts;
  }
);
