import { call, takeLatest, put, all,fork , select, delay} from "redux-saga/effects";
import { employeesAction } from './slice';
import * as employeesApi from '../../api/employees';

function* getEmployees()
{
    
    const { getEmployeesSuccess  , getEmployeesError } = employeesAction;

    try{

        const payload = yield call(employeesApi.getEmployees);

        yield put(getEmployeesSuccess({ data: payload.data }))

    }catch(error){

        yield put(getEmployeesError({
            error
        }))

    }
    

}

function* addEmployees( action )
{

    const { addEmployeesSuccess  , addEmployeesError } = employeesAction;

    try{

      const payload = yield call( employeesApi.addEmployees , action.payload );

      yield put(addEmployeesSuccess({ data: payload.data }))

    }catch(error){

      yield put(addEmployeesError({
          error
      }))

    }
    

}


function* watchGetEmployees() {
    yield takeLatest( employeesAction.getEmployees , getEmployees);
}

function* watchAddEmployees() {
  yield takeLatest( employeesAction.addEmployees , addEmployees);
}

export function* employeesSaga() {
    yield all([
        fork(watchGetEmployees),
        fork(watchAddEmployees)
    ])
} 