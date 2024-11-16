import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getNetSales } from '../services/user'


const initialState = {
    CandidatesGetQueryloading: false,
    CandidatesGetQuery: [],

    IDC_Forecastloading: false,
    IDC_Forecast: [],

    IDC_SpreadSheetloading: false,
    IDC_SpreadSheet: [],

    IDC_SpreadSheet_Filterloading: false,
    IDC_SpreadSheet_Filter: [],
}



export const fetchCandidatesGetQuery = createAsyncThunk(
  'fetchCandidatesGetQuery',
  async (CandidatesGetQuery, thunkAPI) => {
    CandidatesGetQuery = { ...CandidatesGetQuery, elasticQueryName: "CandidatesGetQuery" }
    const response = await getNetSales(CandidatesGetQuery);
    return response.data
  }
)

export const fetchIDC_Forecast = createAsyncThunk(
  'fetchIDC_Forecast',
  async (IDC_Forecast, thunkAPI) => {
    IDC_Forecast = { ...IDC_Forecast, elasticQueryName: "IDC_Forecast" }
    const response = await getNetSales(IDC_Forecast);
    return response.data
  }
)

export const fetchIDC_SpreadSheet = createAsyncThunk(
  'fetchIDC_SpreadSheet',
  async (IDC_SpreadSheet, thunkAPI) => {
    IDC_SpreadSheet = { ...IDC_SpreadSheet, elasticQueryName: "IDC_SpreadSheet" }
    const response = await getNetSales(IDC_SpreadSheet);
    return response.data
  }
)

export const fetchIDC_SpreadSheet_Filter = createAsyncThunk(
  'fetchIDC_SpreadSheet_Filter',
  async (IDC_SpreadSheet_Filter, thunkAPI) => {
    IDC_SpreadSheet_Filter = { ...IDC_SpreadSheet_Filter, elasticQueryName: "IDC_SpreadSheet_Filter" }
    const response = await getNetSales(IDC_SpreadSheet_Filter);
    return response.data
  }
)



export const salesperson = createSlice({
    name: 'cguDashboard',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCandidatesGetQuery.fulfilled, (state, action) => {
        state.CandidatesGetQuery = action.payload;
        state.CandidatesGetQueryloading = false;
        }).addCase(fetchCandidatesGetQuery.pending, (state, action) => {
        state.CandidatesGetQueryloading = true;
        })
    
        builder.addCase(fetchIDC_Forecast.fulfilled, (state, action) => {
        state.IDC_Forecast = action.payload;
        state.IDC_Forecastloading = false;
        }).addCase(fetchIDC_Forecast.pending, (state, action) => {
        state.IDC_Forecastloading = true;
        })

        builder.addCase(fetchIDC_SpreadSheet.fulfilled, (state, action) => {
        state.IDC_SpreadSheet = action.payload;
        state.IDC_SpreadSheetloading = false;
        }).addCase(fetchIDC_SpreadSheet.pending, (state, action) => {
        state.IDC_SpreadSheetloading = true;
        })
    
        builder.addCase(fetchIDC_SpreadSheet_Filter.fulfilled, (state, action) => {
        state.IDC_SpreadSheet_Filter = action.payload;
        state.IDC_SpreadSheet_Filterloading = false;
        }).addCase(fetchIDC_SpreadSheet_Filter.pending, (state, action) => {
        state.IDC_SpreadSheet_Filterloading = true;
        })
}})

export default salesperson.reducer
