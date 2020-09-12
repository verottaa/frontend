import {User} from '../../src/models/user';
import {Action, createReducer, on} from '@ngrx/store';
import {user} from '../actions/auth.actions';

export interface State {
  currentUser: User;
}

export const initialState: State = {
  currentUser: null,
};

const _authReducer = createReducer(initialState,
  on(user, state => state)
);

export function reducer(state: State | undefined, action: Action) {
  return _authReducer(state, action);
}
