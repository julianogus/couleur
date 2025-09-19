import './Tool.css';
import Footer from '../Footer/Footer';
import GetColor from './GetColor/GetColor';
import PopUp from '../PopUp/PopUp';

export default function ToolPage(){
    return (
        <section className="tool">
            <PopUp />
            <div className="main">
                <h1> Get the color palette of any image with ease</h1>
                <h2> Just upload the desired image below to get started!</h2>
                <GetColor />
            </div>
            <Footer />
        </section>
    )
}