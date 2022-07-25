import React from 'react';
import './section-right.scss';
import Card from '../Card/Card';
const Right = () => {
    return (
        <>
            <aside>
                <Card>
                    <div className="right-container">
                        <div className="right-title">
                            <h4>hope condition</h4>
                            <a href='/'><i className="fa-solid fa-pen"></i> edit</a>
                        </div>
                        <div className="right-content-top">
                            <p>Occupation--</p>
                            <p>On duty -----</p>
                            <p>Work Style--</p>
                            <p>Facility ----- <br />form</p>
                            <p>annual   ----<br />income</p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="right-container overlay">
                        <div className="right-title">
                            <h4> Personal Information <span>(private)</span> </h4>
                            <a href='/'><i className="fa-solid fa-pen"></i> edit</a>
                        </div>
                        <div className="right-content-bottom">
                            <a href="/"><i className="fa-solid fa-user"></i>  --- ---</a>
                            <a href="/">---</a>
                            <a href="/"><i className="fa-solid fa-envelope"></i>  junaidahmad@southvillesol.com</a>
                            <a href="/"><i className="fa-solid fa-phone-flip"></i> ---</a>
                            <a href="/"><i className="fa-solid fa-house"></i> ---</a>
                            <a href="/"><i className="fa-solid fa-building-columns"></i> <span> Transfer account not set</span></a>
                        </div>
                    </div>
                </Card>
            </aside>
        </>
    );
}
export default Right;