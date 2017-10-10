import React from 'react';
import { connect } from 'react-redux';
import './guess-form.css';
import { addGuess } from '../actions';

export  class GuessForm extends React.Component {
    onGuess(event) {
        event.preventDefault();
        this.props.dispatch(addGuess(this.input.value));
        console.log(this.input.value)
        // if (this.props.onGuess) {
        //     const value = this.input.value;
        //     this.props.onGuess(value);
        // }
        this.input.value = '';
    }

    render() {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                <label htmlFor="userGuess">Enter your Guess</label>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                     required
                    ref={input => this.input = input} />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};
export const mapStateToProps = (props, state) => ({
   
})
export default connect(mapStateToProps)(GuessForm);

