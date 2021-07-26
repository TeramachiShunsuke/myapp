import * as actions from './actions';
import { IUser } from  './types';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

const init:IUser = {
    isSignedIn: false,
    userid: "",
    username: "",
    token:""
}
const userReducers = reducerWithInitialState(init)
.case(actions.signInAction,(state,payload)=>({
    ...state,
    ...payload
}))
.case(actions.signOutAction,(state,payload)=>({
    ...state,
    ...payload
}));

export default userReducers;