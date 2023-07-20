import { createSlice } from '@reduxjs/toolkit';

export interface UserFormState {
  hamburgerMenu: boolean;
}

const initialState: UserFormState = {
  hamburgerMenu: false,
};

export const userFormSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setHamburgerMenu: (state) => {
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHamburgerMenu } = userFormSlice.actions;
export default userFormSlice.reducer;
