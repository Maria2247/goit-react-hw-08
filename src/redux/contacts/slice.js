import { createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  fetchContacts,
} from "../contacts/operations";
import { logout } from "../auth/operations";

const handlePending = (state) => {
  state.error = null;
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.loading = false;
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
    modalIsOpen: false,
    modalData: null,
  },
  reducers: {
    openModal(state, action) {
      state.modalIsOpen = true;
      state.modalData = action.payload;
    },
    closeModal(state) {
      state.modalIsOpen = false;
      state.modalData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.loading = false;
      });
    // .addCase(updateContact.pending, handlePending)
    // .addCase(updateContact.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.error = null;
    //   state.items = state.items.map((contact) =>
    //     contact.id === action.payload.id ? action.payload : contact
    //   );
    // })
    // .addCase(updateContact.rejected, handleRejected);
  },
});
export const { openModal, closeModal } = contactSlice.actions;
export default contactSlice.reducer;
