import axios from 'axios';

export const getEmployees = () => {

    return axios.get(`http://localhost:4000/employees`);

}

export const addEmployees = (data) => axios.post( 
    `http://localhost:4000/employees`,
    data
  )