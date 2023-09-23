import { BsTelephoneForwardFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import './index.css';

const Contact = () => {
    return (
        <div className='contact-container' id='contact'>
            <h2 className='contact-title'>Contact Us</h2>
            <div className='cards-container'>
                <div className='contact-card'>
                    <BsTelephoneForwardFill className='contact' />
                    <p className='contact-type'>Phone :</p>
                    <h1 className='mail'>7674085001</h1>
                </div>
                <div className='contact-card'>
                    <GrMail className='contact' />
                    <p className='contact-type'>Mail :</p>
                    <h2 className='mail'>ramakrishnachintha78@gmail.com</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;
