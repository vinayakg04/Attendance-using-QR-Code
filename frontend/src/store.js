import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
import { composeWithDevTools } from "redux-devtools-extension";
import {userReducer,profileReducer,userDetailsReducer,allUsersReducer} from './reducers/studentReducer';
import {adminReducer} from './reducers/adminReducer'
import adminQRCodeReducer from './reducers/qrReducerAdmin';
import studentAttendanceReducer from './reducers/qrReducerStudent';


const rootReducer = combineReducers({
  user: userReducer,
  admin:adminReducer,
  profile:profileReducer,
  allUsers:allUsersReducer,
  userDetails:userDetailsReducer,
   qrcode:adminQRCodeReducer,
   qrScanner:studentAttendanceReducer
});

const middleware=[thunk]

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(...middleware))
    );

export default store;
