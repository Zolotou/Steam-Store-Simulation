import { useState, useRef} from "react";
import "./Wallet.scss";
import audioFile from "../../../assets/pence.mp3"
import gif from '../../../assets/icons8-us-dollar.svg'
import ReactTooltip from "react-tooltip";

const Wallet = ({ cash, onMoney }) => {
    const [audio] = useState(new Audio(audioFile));

    

    const addCash = () => {
        audio.volume = 0.5;
        audio.currentTime = 0;
        audio.play()
        onMoney(1);
    }

    return (
        <>
            <div>
                <img data-tip data-for="wallet" className="dollar" onClick={() => addCash()} src={gif} alt="dollar" />
            </div>
            <ReactTooltip id="wallet" place="top" type="dark" effect="float">
                <h4>Clicker</h4>
                <p>Just press button to add cash into your wallet</p>
            </ReactTooltip>
        </>

    )
}

export default Wallet;