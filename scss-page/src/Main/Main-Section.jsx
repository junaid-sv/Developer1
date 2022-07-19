import React from 'react';
import './main.scss';
import Left from '../Section-Left/Left';
import Right from '../Section-Right/Right';

const Main = () => {
    return(
        <>
        <div className='main-container'>
            <div className="main-grid">
                <Left/>
                <Right/>
            </div>
        </div>
        </>
    );
}
export default Main;