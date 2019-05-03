import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import loginReducer from './SigninReducer';
import SignupReducer from './SignupReducer';
import TweetReducer from './TweetReducer';
import fetchTweetsReducer from './fetchTweetsReducer';

export default combineReducers({
  exampleReducer, loginReducer, SignupReducer, TweetReducer, fetchTweetsReducer
});