import './PaletteBody.css';
import { cloneElement } from 'react';
import ColorBox from './ColorBox';

export default function PaletteBody({imageURL, palette, paletteRef}){

    function getPaletteArray(palette){
        let rgbArr = [];
        for(let i = 0; i <= palette.length-1; i++){
          rgbArr[i] = palette[i][0] + ',' +  palette[i][1] + ',' + palette[i][2];
        }

        let boxArr = [];

        for(let i = 0; i <= rgbArr.length-1; i++){
            boxArr[i] = <ColorBox key={i} color={rgbArr[i]}/>
        }
        return boxArr;
    }

    return (
        <>
        <img src={imageURL} alt="User uploaded image."/>
        <div className="output-palette" id="output-palette" ref={paletteRef}>
            {
                getPaletteArray(palette, boxArr => {
                    boxArr.map((box) => {
                        cloneElement(box)})
                    })
            }
        </div>
        </>
    )
}