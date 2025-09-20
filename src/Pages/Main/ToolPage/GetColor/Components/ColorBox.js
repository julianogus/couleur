import './ColorBox.css';

export default function ColorBox({id, color}){

    const rgb = color.split(",");

    function componentToHex(c) {
        let hex = parseInt(c).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    const hexValue = rgbToHex(rgb[0], rgb[1], rgb[2]);

    return (
        <div className='c-palette'>
            <span className="box" id={id} style={{backgroundColor: `rgb(${color}`}}>
            </span>
            <a>{hexValue}</a>
        </div>
    )
}