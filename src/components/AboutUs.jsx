import React from 'react';

/* import images */
import Banner from '../assets/img/big_pic.jpg';
import Grid2 from '../assets/img/man_on_call.jpg';
import Grid3 from '../assets/img/man.jpg';

function AboutUs () {
    return (
        <>
            <div className="goal-board">
                <h3 className='goal-title'>Our Dream is <br /> High Quality <br /> Design</h3>
                <p className='goal-par1'>
                    Empowering businesses through visually <br />striking
                    and effective signage solutions <br /> that elevate brand visibility
                    , attract <br /> customers, and create a lasting impression.
                </p>
                <p className='goal-par2'>
                    Presscraft Technology and Logistics is a <br />
                    dynamic and innovative sign company <br /> dedicated
                    to delivering high-quality <br /> signage solutions across diverse <br /> 
                    industries. With an unwavering commitment to <br /> excellence and 
                    a passion for design, <br /> we have become a trusted <br />
                    partner for business seeking to <br />
                    enhance their brand visibilty.
                </p>
            </div>
            <div className="image">
                <img src={ Banner } className='banner-image' />
            </div>
            <div className="statistics">
                <div className='grid-1'>
                    <h4>4</h4>
                    <p>Years Experience</p>
                </div>
                <div className='grid-2'>
                    <img src={Grid2} className='img-grid2'/>
                </div>
                <div className='grid-3'>
                    <img src={Grid3}  className='img-grid3'/>
                </div>
                <div className='grid-4'>
                    <h4>839+</h4>
                    <p>Happy Customers</p>
                </div>
            </div>
        </>
    )
}

export default AboutUs;