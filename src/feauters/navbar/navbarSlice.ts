import { createSlice } from '@reduxjs/toolkit';

export interface NavbarState {
  hamburgerMenu: boolean;
}

const initialState: NavbarState = {
  hamburgerMenu: false,
};

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setHamburgerMenu: (state:{ hamburgerMenu:boolean }) => {
      state.hamburgerMenu = !state.hamburgerMenu;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHamburgerMenu } = navbarSlice.actions;

export default navbarSlice.reducer;
