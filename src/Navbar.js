/*Itay Vekselbaum 211871827, Dor Bergel 322271792, Eyal Avni 212211734*/

import logo from './calorieslogo.png'
export default function Navbar() {
    return (
        /*Define a Navbar at the top of the web page include our logo*/
        <div className={"Navbar"}>
            <div>
                <img src={logo} alt="calorielogo" className={"logo"}/>
            </div>
        </div>
    );
}