import React from 'react'
import logo from  '../images/Logo .svg'

const Footer = () => {
    return (
        <footer className=''>
        <section>
            <div className='company-info'>
                <img src={logo} alt=''/>
                <p>
                Little Lemon provides the best food in town! 
                </p>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>Order Online</a></li>
                    <li><a href='/'>login</a></li>
                </ul>
            </div>
            <div>
                <h3>Contacts</h3>
                <ul>
                    <li> Adress: Lemon Street 58, CHI, USA</li>
                    <li> Phone: + 22 87 664-558</li>
                    <li> Email: little@lemon.com</li>
                </ul>
            </div>
            <div>
                <h3> Social Media Links</h3>
                <ul>
                    <li><a href='/'>Facebook</a></li>
                    <li><a href='/'>Instagram</a></li>
                </ul>
            </div>
        </section>
        </footer>
    )
}



export default Footer;


