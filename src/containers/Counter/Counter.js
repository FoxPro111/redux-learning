import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionsType from './../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                {this.props.storedResults.length ? (
                    <ul>
                        {this.props.storedResults.map((storeResult) => (
                            <li key={storeResult.id} onClick={() => this.props.onDeleteResult(storeResult.id)}>{storeResult.value}</li>
                        ))}
                    </ul>)
                    : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({
            type: actionsType.INCREMENT
        }),
        onDecrementCounter: () => dispatch({
            type: actionsType.DECREMENT
        }),
        onAddCounter: () => dispatch({
            type: actionsType.ADD,
            value: 5
        }),
        onSubCounter: () => dispatch({
            type: actionsType.SUB,
            value: 5
        }),
        onStoreResult: (result) => dispatch({
            result,
            type: actionsType.STORE_RESULT
        }),
        onDeleteResult: (id) => dispatch({
            type: actionsType.DELETE_RESULT,
            resultElID: id
        }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);