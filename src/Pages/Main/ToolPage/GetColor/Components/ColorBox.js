import './ColorBox.css';
import { useState } from 'react';

export default function ColorBox({id, color}){

    const rgb = color.split(",");

    function componentToHex(c) {
        let hex = parseInt(c).toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    const hexValue = rgbToHex(rgb[0], rgb[1], rgb[2]);

    // Implementar copiar pro clipboard
    function clipboardHex(){
        console.log(color.toString(16));

    }

    return (
        <div className='c-palette'>
            <span className="box" id={id} style={{backgroundColor: `rgb(${color}`}}>
            </span>
            <a>{hexValue}</a>
        </div>
    )
}