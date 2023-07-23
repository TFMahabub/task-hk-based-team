import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../../components/globalTypes/userType';

export interface UserFormState {
  userDatas: UserInfo[];
}

const initialState: UserFormState = {
  userDatas: [
    {
      id: 1,
      firstName: 'Mahabub',
      lastName: 'Alam',
      email: 'rjmahabub543@gmail.com',
      phoneNumber: '+8801636725669',
      address: 'Nowabgonj, Dhaka',
      city: 'Dhaka',
      state: 'Dhaka',
      postalCode: '1321',
    }, {
      id: 2,
      firstName: 'Rejual',
      lastName: 'Hossain',
      email: 'reju2323@gmail.com',
      phoneNumber: '+880123456789',
      address: 'Dohar, Dhaka',
      city: 'Dhaka',
      state: 'Dhaka',
      postalCode: '1325',
    },
  ],
};

export const userFormSlice = createSlice({
  name: 'userInfoForm',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      // eslint-disable-next-line no-param-reassign
      state.userDatas = [...state.userDatas, action.payload];
    },
    removeUserInfo: (state, action: PayloadAction<number>) => {
      // eslint-disable-next-line no-param-reassign
      state.userDatas = state.userDatas.filter((data) => data.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserInfo } = userFormSlice.actions;
export default userFormSlice.reducer;
