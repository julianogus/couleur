import './GetColor.css';
import PaletteBody from './Components/PaletteBody';
import getImgURL from './modules/getImgURL';
import getPalette from './modules/getPalette';
import {useState, useEffect, useRef} from 'react';

export default function GetColor(){

    const [Palette, getPaletteBody] = useState(null);

    const [ isErrDivVisible, getErrDivStatus ] = useState(null);

    const errRef = useRef(null);

    const paletteRef = useRef(null);

    function displayPalette(image){
        if(image) getImgURL(image).then(URL => {
            let img = new Image();
            img.onload = () => {
                // Checks if is an actual image
                    getPalette(image).then(palette => {
                    getPaletteBody(() => {
                        return <PaletteBody imageURL={URL} palette={palette} paletteRef={paletteRef}/>
                    })
                })
            }

            img.onerror = () => {
                getErrDivStatus("visible");
                errRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
                setTimeout( () => {
                    getErrDivStatus(null);
                }, 2700);
            }
            img.src = URL;
        });
    }

    useEffect(() => {
        paletteRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    },[Palette]);

    return (
        <section className="input-tool">
            <div className="input-div">
                <input type="file" name="image-input" id="image-input" accept="image/*" onChange={event => { displayPalette(event.target.files[0]); event.target.value=null}} />
                <label htmlFor="image-input"> 
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=add_photo_alternate" />
                    <span className="material-symbols-outlined" value=""> add_photo_alternate </span> 
                    Upload an image
                </label>
                <div ref={errRef} className={`error-popup ${isErrDivVisible}`}>
                   The selected file is not a valid image!
                </div>
            </div>
            <div className="output" id="output">
                {Palette}
            </div>
        </section>
    )
}