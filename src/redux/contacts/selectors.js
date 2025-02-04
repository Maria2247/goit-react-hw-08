export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectModal = (state) => state.contacts.modalIsOpen;

export const selectModalData = (state) => state.contacts.modalData;
