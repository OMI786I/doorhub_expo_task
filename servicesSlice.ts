import { createSlice } from "@reduxjs/toolkit";

interface Services {
  id: 1;
  type: string;
  unitNumber: number;
  bedroomsNumber: number;
  description?: string;
  time: Date | string | null;
}
interface ServicesState {
  services: Services[];
}

const initialState: ServicesState = {
  services: [
    {
      id: 1,
      type: "Vila",
      unitNumber: 3,
      bedroomsNumber: 3,
      description: "Testing",
      time: "",
    },
  ],
};

const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    addServices: (state, action) => {
      const newService = {
        ...action.payload,
        time: action.payload.time
          ? new Date(action.payload.time).toISOString()
          : null,
      };
      state.services.push(newService);
    },
  },
});

export const { addServices } = serviceSlice.actions;
export default serviceSlice.reducer;
