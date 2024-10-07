import React from 'react';

function ContactUs () {
    const ContactUsList = [
        {img:'#', title:'Address', info:'P.O.Box Tema, Ghana'},
        {img:'#', title:'Phone Number', info:'12345678'},
        {img:'#', title:'E-mail', info:'example@yahoo.com'},
    ]

    return (
        <>
            <section className='contactus-section'>
                <h1 className='getintouch'>Get In Touch</h1>
                <form className='contact-form'>
                    <h3 className='form-header'>Send a Message</h3>
                    <input type='text' placeholder='Username' />
                    <input type='password' placeholder='Password'/>
                    <input type='text' placeholder='Message' />
                    <a href='#' className='contactus-button'>Submit</a>
                </form>
                {
                    ContactUsList.map((contact, index) => (
                        <div key={index}>
                            <ul className='contact-list'>
                                <li className='contactimg'>{contact.img}</li>
                                <div className='contactdetails'>
                                    <li className='contacttitle'>{contact.title}</li>
                                    <li className='contactinfo'>{contact.info}</li>
                                </div>
                            </ul>
                        </div>
                    ))
                }  
            </section>
        </>
    )
}

export default ContactUs;