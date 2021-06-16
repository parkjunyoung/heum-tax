import { configureStore ,combineReducers} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import { all, call } from 'redux-saga/effects';
import { employeesReducer , EMPLOYEES } from '../features/employees/slice';
import { employeesSaga } from '../features/employees/saga';
import logger from 'redux-logger';

export const rootReducer =  combineReducers({
  [EMPLOYEES] : employeesReducer
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([
      call(employeesSaga),
    ])
  }

export default function createStore(){

  const store = configureStore({
    reducer : rootReducer,
    devTools : true,
    middleware : [ sagaMiddleware,logger ]
  });

  sagaMiddleware.run(rootSaga);

  return store;
};