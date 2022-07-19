import React from 'react';
import './section-left.scss'
import Form from './Form';
import Card from '../Card/Card';

const Left = () => {
    return (
        <>
            <main className="left-container">
                <div className="left-UI">
                    <Card>
                        <section className='left-center'>
                            <h2 className='left-heading'>N</h2>
                            <div className="left-content">
                                <h2 className='font'><span className='left-name'>Nabeel</span>  Ahmad  00 </h2>
                                <a href='/' className='font'><i className="fa-solid fa-location-dot"></i>Location area</a>
                                <a href='/ ' className='font'><i className="fa-solid fa-briefcase"></i>Current Location</a>
                                <p>Experienced occupation: ---</p>
                            </div>
                            <div className='left-edit'>
                                <a href='/'><i class="fa-solid fa-pen"></i> edit</a>
                            </div>
                        </section>
                        <Form
                            placeholder='Self-introduction'
                            name='edit'
                            label='Fill in self-introduction'
                            class='edit'
                            icon='fa-solid fa-pen'
                        />
                        <Form
                            placeholder='Working history'
                            name='addition'
                            label='Add working history'
                            class='addition'
                            icon='fa-solid fa-square-plus'
                        />
                        <Form
                            placeholder='Add qualifications'
                            name='addition'
                            label='Add qualification'
                            class='addition'
                            icon='fa-solid fa-square-plus'
                        />
                    </Card>
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
                {/* </section> */}
                <form action="#">
                    <div className='left-input-field'>
                        <input type="text" className='left-input-field' placeholder='Self-introduction' />
                        <div className='edit'> <a href="/"><i className="fa-solid fa-pen"></i> edit</a></div>
                        <label htmlFor="self-introduction">Fill in self-introduction</label>
                    </div>
                    <div className='left-input-field'>
                        <input type="text" className='left-input-field' placeholder='Working history' />
                        <div className='addition'> <a href="/"><i className="fa-solid fa-square-plus"></i> addition</a></div>
                        <label htmlFor="Add working history">Add working history</label>
                    </div>
                    <div className='left-input-field'>
                        <input type="text" className='left-input-field' placeholder='All qualifications' />
                        <div className='addition'> <a href="/"><i className="fa-solid fa-square-plus"></i> addition</a></div>
                        <label htmlFor="Add Qualifications">Add qualification</label>
                    </div>
                </form>
                {/* </div> */}
            </main>
        </>
    );
}
export default Left;