import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import staffService from "./staffService";
import myImage from '../../images/applications-image-01.jpg'

let initialState = {
  staff: [
    {
      id: "0",
      image: myImage,
      name: "Patricia Semklo",
      email: "patricia.semklo@app.com",
      salary: "$2,890.66",
      address: "🇬🇧 London, UK",
      role: "admin",
      position: "Manager",
      fav: true,
    },
    {
      id: "1",
      image: '',
      name: "Dominik Lamakani",
      email: "dominik.lamakani@gmail.com",
      address: "🇩🇪 Dortmund, DE",
      role: "admin",
      position: "account",
      salary: "$14,767.04",
      fav: false,
    },
    {
      id: "2",
      image: myImage,
      name: "Ivan Mesaros",
      email: "imivanmes@gmail.com",
      address: "🇫🇷 Paris, FR",
      role: "admin",
      position: "clerk",
      salary: "$4,996.00",
      fav: true,
    },
    {
      id: "3",
      image: myImage,
      name: "Maria Martinez",
      email: "martinezhome@gmail.com",
      address: "🇮🇹 Bologna, IT",
      role: "admin",
      position: "cook",
      salary: "$3,220.66",
      fav: false,
    },
    {
      id: "4",
      image: null,
      name: "Vicky Jung",
      email: "itsvicky@contact.com",
      address: "🇬🇧 London, UK",
      role: "admin",
      position: "cleaner",
      salary: "$2,890.66",
      fav: true,
    },
    {
      id: "5",
      image: null,
      name: "Tisho Yanchev",
      email: "tisho.y@kurlytech.com",
      address: "🇬🇧 London, UK",
      role: "admin",
      position: "cleaner",
      salary: "$1,649.99",
      fav: true,
    },
    {
      id: "6",
      image: myImage,
      name: "James Cameron",
      email: "james.ceo@james.tech",
      address: "🇫🇷 Marseille, FR",
      role: "admin",
      position: "cleaner",
      salary: "$3,569.87",
      fav: true,
    },
    {
      id: "7",
      image: myImage,
      name: "Haruki Masuno",
      email: "haruki@supermail.jp",
      address: "🇯🇵 Tokio, JP",
      role: "1admin",
      position: "driver",
      salary: "$19,246.07",
      fav: false,
    },
    {
      id: "8",
      image: 0,
      name: "Joe Huang",
      email: "joehuang@hotmail.com",
      address: "🇨🇳 Shanghai, CN",
      role: "admin",
      position: "cook",
      salary: "$12,276.92",
      fav: true,
    },
    {
      id: "9",
      image: myImage,
      name: "Carolyn McNeail",
      email: "carolynlove@gmail.com",
      address: "🇮🇹 Milan, IT",
      role: "admin",
      position: "laundry man",
      salary: "$1,289.97",
      fav: false,
    },
    {
      id: "10",
      image: myImage,
      name: "Oke Edafe Great",
      email: "carolynlove@gmail.com",
      address: "🇮🇹 Milan, IT",
      role: "admin",
      position: "laundry man",
      salary: "$1,289.97",
      fav: false,
    },
  ],
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: "",
};

//Register staff
export const register = createAsyncThunk(
  "staff/register",
  async (staff, thunkAPI) => {
    console.log("Service: ", "staff");
    try {
      return await staffService.register(staff);
    } catch (error) {
      console.log(error);
      // const message =
      //   (error.response && error.response.data && response.data.message) ||
      //   error.message ||
      //   error.toString();
      // return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getAllStaff = createAsyncThunk("staff/staff", async (thunkAPI) => {
  try {
    return await staffService.getAllStaff();
  } catch (error) {
    const message =
      (error.response && error.response.data && response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
      state.staff = null;
    },
    reg: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
      console.log(action.payload);
      console.log(state.staff);
      state.staff = [...state.staff, {...action.payload, id: state.staff.length.toString()}];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        isError = false;
        isSuccess = false;
        message = null;
        staff = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.staff = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.staff = null;
      })
      .addCase(getAllStaff.fulfilled, (state) => {
        (state.staff = action.payload),
          (state.isSuccess = true),
          (state.isLoading = false);
      })
      .addCase(getAllStaff.pending, (state) => {
        state.isLoading = true;
        state.message = null;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getAllStaff.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true;
      });
  },
});
export const { reset, reg } = staffSlice.actions;
export default staffSlice.reducer;
