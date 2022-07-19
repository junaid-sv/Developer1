import React from 'react';
import './section-left.scss'

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
                    <form action="#">
                        <div className='left-input-field'>
                            <input type="text" className='left-input-field' placeholder='Self-introduction'/>
                            <div className='edit'><i className="fa-solid fa-pen"></i> edit</div>
                            <label htmlFor="self-introduction">Fill in self-introduction</label>
                        </div>
                        <div className='left-input-field'>
                            <input type="text" className='left-input-field' placeholder='Working history'/>
                            <div className='addition'><i class="fa-solid fa-square-plus"></i> addition</div>
                            <label htmlFor="Add working history">Add working history</label>
                        </div>
                        <div className='left-input-field'>
                            <input type="text" className='left-input-field' placeholder='All qualifications'/>
                            <div className='addition'><i class="fa-solid fa-square-plus"></i> addition</div>
                            <label htmlFor="Add Qualifications">Add qualification</label>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}
export default Left;