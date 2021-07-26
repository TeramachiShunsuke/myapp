import actionCreatorFactory from 'typescript-fsa';
import { IUser } from  './types';


const actionCreator = actionCreatorFactory();
export const signInAction = actionCreator<Partial<IUser>>('SIGIN_IN');
export const signOutAction = actionCreator<Partial<IUser>>('SIGIN_OUT');
