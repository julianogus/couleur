import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer(){
   return (
      <section className="footer">
         <nav>
         <Link to="/about">About</Link>
         <Link to="/contact">Contact Us</Link>
         </nav>
      </section>
   ) 
}