import React from 'react';
import { connect } from 'react-redux';
import store from './store';
import { removeAll, toggleInfo } from '../actions';


import './top-nav.css';

export  class TopNav extends React.Component {
    

    onInfo(event) {
        event.preventDefault();
        if (this.props.onInfo) {
            this.props.onInfo();
        }
    }

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={e => this.props.dispatch(toggleInfo())}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => this.props.dispatch(removeAll())}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export const mapStateToProps = (props, state) => ({
    
})

export default connect(mapStateToProps)(TopNav);

