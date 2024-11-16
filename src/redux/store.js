import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'    
import networkingcapitalpopup from './slice/networkingcapital'; 
import global from './slice/globaleState' 
import cguDashboard from './slice/cguDashboard' 
import saveFilter from './slice/saveFilter';

const reducer = combineReducers({  
  'global':global, 
  'networkingcapitalpopup': networkingcapitalpopup, 
  'cguDashboard': cguDashboard,
  'saveFilter':saveFilter
})
const store = configureStore({
  reducer,
})
 

export default store;