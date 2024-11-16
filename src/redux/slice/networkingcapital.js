import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getNetSales } from '../services/user'

const initialState = {

  // ==============

  NWC_Fiveyear_Trendloading: true,
  NWC_Fiveyear_Trend: [],

  NWC_By_Dimensionsloading:true,
  NWC_By_Dimensions:[],

  NWC_Days_By_Dimensions:[],
  NWC_Days_By_Dimensionsloading:true,  

  NWC_Fiveyear_Trend_Comparison:[],
  NWC_Fiveyear_Trend_Comparisonloading:true,

 
}



export const fetchNWC_Fiveyear_Trend = createAsyncThunk(
  'fetchNWC_Fiveyear_Trend',
  async (NWC_Fiveyear_Trend, thunkAPI) => {
    NWC_Fiveyear_Trend = { ...NWC_Fiveyear_Trend, elasticQueryName: "NWC_Fiveyear_Trend" }
    const response = await getNetSales(NWC_Fiveyear_Trend);
    return response.data
  }
)





export const fetchNWC_By_Dimensions = createAsyncThunk(
  'fetchNWC_By_Dimensions',
  async (NWC_By_Dimensions, thunkAPI) => {
    NWC_By_Dimensions = { ...NWC_By_Dimensions, elasticQueryName: "NWC_By_Dimensions" }
    const response = await getNetSales(NWC_By_Dimensions);
    return response.data
  }
)

export const fetchNWC_Fiveyear_Trend_Comparison = createAsyncThunk(
  'fetchNWC_Fiveyear_Trend_Comparison',
  async (NWC_Fiveyear_Trend_Comparison, thunkAPI) => {
    NWC_Fiveyear_Trend_Comparison = { ...NWC_Fiveyear_Trend_Comparison, elasticQueryName: "NWC_Fiveyear_Trend_Comparison" }
    const response = await getNetSales(NWC_Fiveyear_Trend_Comparison);
    return response.data
  }
)


export const fetchNWC_Days_By_Dimensions = createAsyncThunk(
  'fetchNWC_Days_By_Dimensions',
  async (NWC_Days_By_Dimensions, thunkAPI) => {
    NWC_Days_By_Dimensions = { ...NWC_Days_By_Dimensions, elasticQueryName: "NWC_Days_By_Dimensions" }
    const response = await getNetSales(NWC_Days_By_Dimensions);
    return response.data
  }
)




export const networkingcapitalpopup = createSlice({
  name: 'networkingcapitalpopup',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
   

    builder.addCase(fetchNWC_Fiveyear_Trend.fulfilled, (state, action) => {
      state.NWC_Fiveyear_Trend = action.payload;
      state.NWC_Fiveyear_Trendloading = false;
    }).addCase(fetchNWC_Fiveyear_Trend.pending, (state, action) => {
      state.NWC_Fiveyear_Trendloading = true;
    })
    

    

    builder.addCase(fetchNWC_By_Dimensions.fulfilled, (state, action) => {
      state.NWC_By_Dimensions = action.payload;
      state.NWC_By_Dimensionsloading = false;
    }).addCase(fetchNWC_By_Dimensions.pending, (state, action) => {
      state.NWC_By_Dimensionsloading = true;
    })

  
    
    builder.addCase(fetchNWC_Days_By_Dimensions.fulfilled, (state, action) => {
      state.NWC_Days_By_Dimensions = action.payload;
      state.NWC_Days_By_Dimensionsloading = false;
    }).addCase(fetchNWC_Days_By_Dimensions.pending, (state, action) => {
      state.NWC_Days_By_Dimensionsloading = true;

    })
   
    builder.addCase(fetchNWC_Fiveyear_Trend_Comparison.fulfilled, (state, action) => {
      state.NWC_Fiveyear_Trend_Comparison = action.payload;
      state.NWC_Fiveyear_Trend_Comparisonloading = false
    }).addCase(fetchNWC_Fiveyear_Trend_Comparison.pending, (state, action) => {
      state.NWC_Fiveyear_Trend_Comparisonloading = true;
    })

   

    
  }
})


export default networkingcapitalpopup.reducer
