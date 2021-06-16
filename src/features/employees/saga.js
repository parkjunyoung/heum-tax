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

function* watchGetEmployees() {
    yield takeLatest( employeesAction.getEmployees , getEmployees);
}

export function* employeesSaga() {
    yield all([
        fork(watchGetEmployees)
    ])
} 