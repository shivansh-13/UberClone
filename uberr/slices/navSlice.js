import {createSlice} from '@reduxjs/toolkit';

const initialState = {  // initial state of the nav reducer
    origin: null,
    destination: null,
    travelTimeInformation:null,
};
export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
      setOrigin: (state, action) => {
        state.origin = action.payload;
        console.log('Origin set:', action.payload);
      },
      setDestination: (state, action) => {
        state.destination = action.payload;
        console.log('Destination set:', action.payload);
      },
      setTravelTimeInformation: (state, action) => {
        state.travelTimeInformation = action.payload;
        console.log('Travel time information set:', action.payload);
      },
    },
  });
  
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;
//selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;


export default navSlice.reducer; 