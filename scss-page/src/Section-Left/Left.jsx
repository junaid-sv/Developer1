import React from 'react';
import './section-left.scss'
import Form from './Form';

const Left = () => {
    return (
        <>
            <main className="left-container">
                <div className="left-UI">
                    <section className='left-center'>
                        <div className="left-logo">
                            <h2 className='left-heading'>N</h2>
                        </div>
                        <div className="left-content">
                            <h2><span className='left-name'>Nabeel</span>  Ahmad  00 </h2>
                            <p><i className="fa-solid fa-location-dot"></i>Location area</p>
                            <p><i className="fa-solid fa-briefcase"></i>Current Location</p>
                            <p>Experienced occupation: ---</p>
                        </div>
                        <div className='left-edit'>
                            <p><i class="fa-solid fa-pen"></i> edit</p>
                        </div>
                    </section>
                    <Form 
                        placeholder ='Self-introduction'
                        name ='edit'
                        label = 'Fill in self-introduction'
                        class ='edit'
                        icon = 'fa-solid fa-pen'
                    />
                    <Form 
                        placeholder ='Working history'
                        name ='addition'
                        label = 'Add working history'
                        class ='addition'
                        icon = 'fa-solid fa-square-plus'
                    />
                    <Form 
                        placeholder ='Add qualifications'
                        name ='addition'
                        label = 'Add qualification'
                        class ='addition'
                        icon = 'fa-solid fa-square-plus'
                    />
                </div>
            </main>
        </>
    );
}
export default Left;