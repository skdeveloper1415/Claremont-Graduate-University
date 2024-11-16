import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getNetSales,getNotes } from '../services/user'


const initialState = {
    Dashboard_Insert_Save_Filterloading: false,
    Dashboard_Insert_Save_Filter: [],

    Dashboard_Get_Save_Filterloading: false,
    Dashboard_Get_Save_Filter: [],

    Dashboard_Update_Save_Filterloading:false,
    Dashboard_Update_Save_Filter:[],
}



export const fetchDashboard_Insert_Save_Filter = createAsyncThunk(
  'fetchDashboard_Insert_Save_Filter',
  async (Dashboard_Insert_Save_Filter, thunkAPI) => {
    Dashboard_Insert_Save_Filter = { ...Dashboard_Insert_Save_Filter, elasticQueryName: "Dashboard_Insert_Save_Filter" }
    const response = await getNetSales(Dashboard_Insert_Save_Filter);
    return response.data
  }
)

export const fetchDashboard_Get_Save_Filter = createAsyncThunk(
  'fetchDashboard_Get_Save_Filter',
  async (Dashboard_Get_Save_Filter, thunkAPI) => {
    Dashboard_Get_Save_Filter = { ...Dashboard_Get_Save_Filter, elasticQueryName: "Dashboard_Get_Save_Filter" }
    const response = await getNotes(Dashboard_Get_Save_Filter);
    return response.data
  }
)

export const fetchDashboard_Update_Save_Filter = createAsyncThunk(
    'fetchDashboard_Update_Save_Filter',
    async (Dashboard_Update_Save_Filter, thunkAPI) => {
        Dashboard_Update_Save_Filter = { ...Dashboard_Update_Save_Filter, elasticQueryName: "Dashboard_Update_Save_Filter" }
      const response = await getNetSales(Dashboard_Update_Save_Filter);
      return response.data
    }
  )


export const saveFilter = createSlice({
    name: 'saveFilter',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDashboard_Insert_Save_Filter.fulfilled, (state, action) => {
        state.Dashboard_Insert_Save_Filter = action.payload;
        state.Dashboard_Insert_Save_Filterloading = false;
        }).addCase(fetchDashboard_Insert_Save_Filter.pending, (state, action) => {
        state.Dashboard_Insert_Save_Filterloading = true;
        })
    
        builder.addCase(fetchDashboard_Get_Save_Filter.fulfilled, (state, action) => {
        state.Dashboard_Get_Save_Filter = action.payload;
        state.Dashboard_Get_Save_Filterloading = false;
        }).addCase(fetchDashboard_Get_Save_Filter.pending, (state, action) => {
        state.Dashboard_Get_Save_Filterloading = true;
        })

        builder.addCase(fetchDashboard_Update_Save_Filter.fulfilled, (state, action) => {
            state.Dashboard_Update_Save_Filter = action.payload;
            state.Dashboard_Update_Save_Filterloading = false;
            }).addCase(fetchDashboard_Update_Save_Filter.pending, (state, action) => {
            state.Dashboard_Update_Save_Filterloading = true;
            })

       
}})

export default saveFilter.reducer
