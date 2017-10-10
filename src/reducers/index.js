import {ADD_GUESS, REMOVE_ALL, TOGGLE_INFO} from '../actions'

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1,
    showInfoModal: false
};

export const guessReducer = (state=initialState, action) => {
  if(action.type === ADD_GUESS){
    const difference = Math.abs(action.guess - state.correctAnswer);
    let feedback;
    if (difference >= 50) {
        feedback = 'You\'re Ice Cold...';
    }
    else if (difference >= 30) {
        feedback = 'You\'re Cold...';
    }
    else if (difference >= 10) {
        feedback = 'You\'re Warm';
    }
    else if (difference >= 1) {
        feedback = 'You\'re Hot!';
    }
    else {
        feedback = 'You got it!';
    }
    return Object.assign({}, state, {
        feedback: feedback,
        guesses: [...state.guesses, action.guess]
    })
  }
  else if(action.type === REMOVE_ALL){
    return Object.assign({}, state, {
        guesses: [],
        feedback: 'Make your guess!',
        correctAnswer: Math.floor(Math.random() * 100) + 1, 
        showInfoModal: false
    })
  }
  else if(action.type === TOGGLE_INFO){
    return Object.assign({}, state, {
        showInfoModal: !state.showInfoModal
    });
  }
  return state
}; 