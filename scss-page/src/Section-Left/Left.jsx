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
                    {/* <form action="#">
                        <div className='left-input-field'>
                            <input type="text" className='left-input-field' placeholder='Self-introduction'/>
                            <div className='edit'> <a href="/"><i className="fa-solid fa-pen"></i> edit</a></div>
                            <label htmlFor="self-introduction">Fill in self-introduction</label>
                        </div>
                        <div className='left-input-field'>
                            <input type="text" className='left-input-field' placeholder='Working history'/>
                            <div className='addition'> <a href="/"><i className="fa-solid fa-square-plus"></i> addition</a></div>
                            <label htmlFor="Add working history">Add working history</label>
                        </div>
                        <div className='left-input-field'>
                            <input type="text" className='left-input-field' placeholder='All qualifications'/>
                            <div className='addition'> <a href="/"><i className="fa-solid fa-square-plus"></i> addition</a></div>
                            <label htmlFor="Add Qualifications">Add qualification</label>
                        </div>
                    </form> */}
                    <Form 
                        placeholder='Self-introduction'
                        name='edit'
                        label='Fill in self-introduction'
                    />
                    <Form 
                        placeholder='Working history'
                        name='edit'
                        label='Fill in self-introduction'
                    />
                    <Form 
                        placeholder='Self-introduction'
                        name='edit'
                        label='Fill in self-introduction'
                    />
                </div>
            </main>
        </Card>
        </>
    );
}
export default Left;