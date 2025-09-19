export default function getImgURL(file){
    // Gets the URL of the image to parse it on the ColorThief
    return new Promise( (resolve) => { 
        const reader = new FileReader();
        reader.onload = event => {
            resolve(event.target.result);
        }
        reader.readAsDataURL(file);
    });
}