import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from "redux-first-history";
function Home() {

    // 派发动作的方式跳转路径
    const dispatch = useDispatch();
    
    const gotoCounter = () => {
        dispatch(push('/counter'));
    }
    return (
        <div>
            <p>Home</p>
            <button onClick={gotoCounter}>跳转到/counter</button>
        </div>
    )
}
export default Home;