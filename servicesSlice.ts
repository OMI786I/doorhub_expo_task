import { createSlice } from "@reduxjs/toolkit";

interface Services {
  type: string;
  unitNumber: number;
  bedroomsNumber: number;
  description?: string;
  time: Date | null;
}
interface ServicesState {
  services: Services[];
}

const initialState: ServicesState = {
  services: [
    {
      type: "Vila",
      unitNumber: 3,
      bedroomsNumber: 3,
      description: "Testing",
      time: null,
    },
  ],
};

const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    addServices: (state, action) => {
      state.services.push(action.payload);
    },
  },
});

export const { addServices } = serviceSlice.actions;
export default serviceSlice.reducer;
