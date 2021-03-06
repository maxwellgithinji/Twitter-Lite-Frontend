import {TWEET_ATTEMPT, TWEET_FAILED, TWEET_SUCCESS} from '../constants';
import axios from 'axios';

export const tweetRequest = () => ({
    type: TWEET_ATTEMPT
})

export const tweetError = (error) => ({
    type: TWEET_FAILED,
    error
})

export const tweetSuccess = (data) => ({
    type: TWEET_SUCCESS,
    data
})

export const tweet = (data, history) => dispatch => {
    dispatch(tweetRequest())
    const url = "https://andela-twitter.herokuapp.com/tweets";
    const token = localStorage.getItem('user')
    var headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*'
    }
    return axios
        .post(
            url, 
            data, 
            {headers: headers},
          )
        .then(response => {
            if (response.status === 201){
                dispatch(tweetSuccess(response.data))
                window.location.reload(true)
            }else if(response === undefined){
                history.push('/error')
            }
        })
        .catch(error => dispatch(tweetError(error)))
}

export const tweetActions = {
    tweetRequest,
    tweetError,
    tweetSuccess,
    tweet
}

export default tweetActions;

