import {createSelector} from 'reselect';
import { RootState } from '../../store';
const usersSelecters = (( state:RootState ) => state.users);

export const getUserId = createSelector(
    [usersSelecters],
    state => state.userid
)

