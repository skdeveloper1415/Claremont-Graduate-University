import client from '../apiClient';

export const getNetSales = (body) => {
  // return client.post('/data-router/data/mssql/search', body)
  return client.post('/api/search', body)
}
export const getNotes = (body) => {
  // return client.post('/data-router/data/mssql/filter', body)
  return client.post('/api/notes', body)
}
export const getUserActivity = (body) => {
  // return client.post('/data-router/data/mssql/filter', body)
  return client.post('/api/userActivity', body)
}
export const getFilters = (body) => {
  // return client.post('/data-router/data/mssql/filter', body)
  return client.post('/api/filter', body)
}

export const getSales = () => { 
  let CustomerId = sessionStorage.getItem("CustomerCodedata") 
  //console.log("22222", CustomerId)
  return client.get(`/api/sales/${CustomerId || ''}`)
}