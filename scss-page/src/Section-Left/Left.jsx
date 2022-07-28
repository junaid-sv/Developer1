import React from 'react';
import './section-left.scss'
import Form from './Form';
import Card from '../Card/Card';

const Left = () => {
    return (
        <>
            <main className="left-main">
                <Card>
                    <div className="left-container">
                        <section className='left-center'>
                            <h2 className='left-profile'>N</h2>
                            <div className="left-content">
                                <h2 className='font'><span className='left-name'>Nabeel</span> Ahmad 00</h2>
                                <p href='/' className='font'><i className="fa-solid fa-location-dot"></i>Location area</p>
                                <p href='/ ' className='font'><i className="fa-solid fa-briefcase"></i>Current Location</p>
                                <p>Experienced occupation: ---</p>
                            </div>
                            <div className='left-edit'>
                                <a href='/'><i class="fa-solid fa-pen"></i> edit</a>
                            </div>
                        </section>
                        <Form
                            text='Self-introduction'
                            label='Fill in self-introduction'
                            class='edit'
                            icon='fa-solid fa-pen'
                            icon_name='edit'
                        />
                        <Form
                            text='Working history'
                            label='Add working history'
                            class='addition'
                            icon='fa-solid fa-square-plus'
                            icon_name='addition'
                        />
                        <Form
                            text='Add qualifications'
                            label='Add qualification'
                            class='addition'
                            icon='fa-solid fa-square-plus'
                            icon_name='addition'
                        />
                    </div>
                </Card>
            </main>
        </>
    );
}
export default Left;