import { createSlice } from '@reduxjs/toolkit';
import { reducerUtils } from '../../util/async.utill';

const initialState  = {
  employees : reducerUtils.initial(),
  request : reducerUtils.initial(),
};

const name = 'employees';

const slice = createSlice({
  name ,
  initialState ,
  reducers : {
    getEmployees( state ) {
			state.employees = reducerUtils.loading()
		},
		getEmployeesSuccess( state , { payload }) {
      state.employees = reducerUtils.success(payload.data)
		},
		getEmployeesError( state , { payload }) {
      state.employees = reducerUtils.error(payload)
    },
    addEmployees( state ) {
			state.request = reducerUtils.loading()
		},
		addEmployeesSuccess( state , { payload }) {
      state.request = reducerUtils.success(payload.data)
		},
		addEmployeesError( state , { payload }) {
      state.request = reducerUtils.error(payload)
		}
	}
});

export const employeesReducer = slice.reducer;
export const employeesAction = slice.actions;
export const EMPLOYEES = slice.name;