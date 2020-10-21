import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

const CounterContainer = () => {
    const {number} = useSelector(state => state.counter);
    // const number = useSelector(state = > state.counter.number);

    const dispatch = useDispatch();

    // useCallback으로 디스패치 함수 감싸준다.
    const onIncrease = useCallback(()=>dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(()=>dispatch(decrease()), [dispatch]);

    return (
        <Counter 
            number={number}
            // 숫자가 바뀌어서 컴포넌트가 재랜더링 될 때 마다 함수도 새로 생성되고 있음.
            //onIncrease={() => dispatch(increase())}
            //onDecrease={() => dispatch(decrease())}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    );
};

const mapStateToProps = state => ({
    number: state.counter.number
});

export default CounterContainer;
