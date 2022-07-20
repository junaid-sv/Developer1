import React from 'react';
import './section-left.scss';
import Card from '../Card/Card';
import Form from './Form';
const Left = () => {
    return (
        <>
        <Card>
            <main>
                <div className="left-UI">
                    <section className='left-center'>
                        <div className="left-logo">
                            <h2 className='left-heading'>N</h2>
                        </div>
                        <div className="left-content">
                            <h2><span className='left-name'>Nabeel</span>  Ahmad  00 </h2>
                            <a href='/' ><i className="fa-solid fa-location-dot"></i>Location area</a>
                            <a href='/'><i className="fa-solid fa-briefcase"></i>Current Location</a>
                            <p>Experienced occupation: ---</p>
                        </div>
                        <div className='left-edit'>
                            <a href='/'><i className="fa-solid fa-pen"></i> edit</a>
                        </div>
                    </section>
                    <Form 
                        placeholder='Self-introduction'
                        name='edit'
                        label='Fill in self-introduction'
                        icon= 'fa-solid fa-pen' 
                        class ='edit'
                    />
                    <Form 
                        placeholder='Working history'
                        name='addition'
                        label='Fill in self-introduction'
                        icon = 'fa-solid fa-square-plus'
                        class = 'addition'
                    />
                    <Form 
                        placeholder='Self-introduction'
                        name='addition'
                        label='Fill in self-introduction'
                        icon = 'fa-solid fa-square-plus'
                        class = 'addition'
                    />
                </div>
            </main>
        </Card>
        </>
    );
}
export default Left;