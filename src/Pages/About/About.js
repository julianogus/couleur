import './About.css';
import Footer from '../Main/Footer/Footer';
import PopUp from '../Main/PopUp/PopUp';

export default function ToolPage(){
    return (
        <section className="about-main">
            <PopUp />
            <div className="about">
                <div className="head">
                    <h2> What is CoolorIt</h2>
                    <p>
                        CoolorIt <sup>(ku.lœʁ.it)</sup> is a side project created to extract color palettes from images. <br />
                        It was originally built for my personal use, as I enjoy selecting palettes for my apps based on pictures, videos, and music albums.
                        <br />
                        CoolorIt is built with React.js and is designed to be as straightforward as possible.
                    </p>
                    <h2>Credits</h2>
                        <ul>
                            <li><a href="https://github.com/lokesh/color-thief" target="_blank" rel="noreferrer">ColorThief</a> – used to extract color data from images. </li>
                            <li><a href="https://fonts.google.com/icons" target="_blank" rel="noreferrer">Google Material Icons</a> – used for project icons. </li>
                            <li>Font used: Inter Sans.</li>
                        </ul>
                </div>
                <div className="colors">
                    <h2>Palette Reference </h2>
                        <h3>Colors used in this project:</h3>
                        <br />
                        <p>#433e3f, #833ab4, #cb1aa2, #fafafa, #fb6376, #fc929f, #fee0e4, #c1292e</p>
                </div>
            </div>
            <Footer />
        </section>
    )
}