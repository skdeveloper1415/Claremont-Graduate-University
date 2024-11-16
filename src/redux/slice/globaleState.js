import { createSlice } from '@reduxjs/toolkit';


// date object
var today = new Date();
var date = today.getDate() ;
var month = today.getMonth()+1;
var year = today.getFullYear()

let resultYear;
if (month >= 1 && month <= 3) {
    resultYear = year;
} else {
    resultYear = year+1;
}


const initialState = {
  dashboardName:{name:"Executive",code:"Executive"},
  pageName:"Summary View",
  reportID:"NETSALES_FIVE_TREND",
  homeTrigger:true,
  Financialyear:[{name:`${resultYear}`, code: `${resultYear}`}],
  FinancialyearAnalysis:[{name:`${resultYear}`, code: `${resultYear}`}],
  HomeParameter:{  name: 'Full Period', code: ["NETSALES_FP", "NETSALES_PREV_FP"],BuildCode:["BILLEDQUANTITY", "BILLEDQUANTITY_PREV_FP"] ,TransMarrginCode : ["TRANSMARGIN_FP","TRANSMARGIN_PREV_FP"]},
  Parameter:{  name: 'Full Period', code: ["NETSALES_FP", "NETSALES_PREV_FP"],BuildCode:["BILLEDQUANTITY", "BILLEDQUANTITY_PREV_FP"] ,TransMarrginCode : ["TRANSMARGIN_FP","TRANSMARGIN_PREV_FP"]},
  DataSource:{  name: 'All', code: []},
  appliedFilters:[
    {
      "columnName": "FINANCIALYEAR",
      "columnValue": [
        `${resultYear}`
      ],
      "excludeKeyword": false
    }
  ],

  appliedFiltersAnalysis:[
    {
      "columnName": "Year",
      "columnValue": [
        `${resultYear}`
      ],
      "excludeKeyword": false
    }
  ],


//below for partnerprofile page filter states
PartnerFinancialyear:[{name:`${resultYear}`, code: `${resultYear}`}],
SelectedMetrics:{'name': "Revenue", 'code': "NETSALES_FP"},
PartnerParameter:{  name: 'Full Period', code: ["NETSALES_FP", "NETSALES_PREV_FP"],BuildCode:["BILLEDQUANTITY", "BILLEDQUANTITY_PREV_FP"] ,TransMarrginCode : ["TRANSMARGIN_FP","TRANSMARGIN_PREV_FP"]},
SelectedDimension1:{'name': "Partner", 'code': "CUSTOMERNAME"},
SelectedDimension2:{'name': "Region", 'code': "REGION_CLUSTER"},
startDate:new Date("2023-11-01"),
endDate:today,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setState: (state, action) => {
        return {
            ...state,
            ...action.payload
          };
      
    },
  },
});

export const { setState } = globalSlice.actions;

export default globalSlice.reducer;