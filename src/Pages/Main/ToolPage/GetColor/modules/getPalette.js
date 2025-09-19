import getImgURL from './getImgURL';
import ColorThief from 'colorthief';

export default function getPalette(image){
    const colorThief = new ColorThief();
    const img = new Image();
    return new Promise( resolve => {
            getImgURL(image).then( URL => {
                img.src = URL;
            }).then( () => {
                resolve(colorThief.getPalette(img,8));
            });
    })
}