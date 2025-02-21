import { createSlice } from "@reduxjs/toolkit";
import { ImageSourcePropType } from "react-native";

interface Services {
  id: 1;
  title: string;
  type: string;
  unitNumber: number;
  bedroomsNumber: number;
  description?: string;
  time: Date | string | null;
  icons: ImageSourcePropType;
}
interface ServicesState {
  services: Services[];
}

const initialState: ServicesState = {
  services: [],
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
