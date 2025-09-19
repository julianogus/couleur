import Footer from '../Main/Footer/Footer';
import PopUp from '../Main/PopUp/PopUp';
import './Contact.css';

export default function Contact(){
    return (
        <section className="contact-main">
            <PopUp />
            <div className="contact">
                <h2>Getting in touch</h2>
                <p>Email us at: <a href="mailto:contact@coolorit.com">contact@coolorit.com</a></p>
                <h2>Other links</h2>
                <p>TBA</p>
            </div>
            <Footer />
        </section>
    )
}