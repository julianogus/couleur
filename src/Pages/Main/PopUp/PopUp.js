import './PopUp.css';

export default function NavBar(){
    return (
        <section className="popup">
            <a href=".">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 120" width="100%" height="120" role="img">
                    <g transform="translate(40,60)">
                        <circle cx="0" cy="0" r="34" fill="none" stroke="#E0E0E0" strokeWidth="0"/>
                        <circle cx="-18" cy="-12" r="19.8" fill="#E53935"/>
                        <circle cx="0" cy="-22" r="19.8" fill="#FB8C00"/>
                        <circle cx="18" cy="-12" r="19.8" fill="#FDD835"/>
                        <circle cx="12" cy="12" r="19.8" fill="#1E88E5"/>
                        <circle cx="-12" cy="12" r="19.8" fill="#8E24AA"/>
                    </g>

                <g transform="translate(90,90)">
                    <text x="0" y="0" fontFamily="Inter sans" fontWeight="700" fontSize="5rem" fill="#e6e6e6">
                CoolorIt 
                    </text>
                </g>
                </svg>
            </a>
        </section>
    )
}