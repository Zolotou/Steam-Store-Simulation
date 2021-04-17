import { useState } from "react";
import "./Wallet.scss";
import gif from '../../../assets/icons8-us-dollar-circled.gif'

const Wallet = ({cash, onMoney}) => {

    const [money, setMoney] = useState(0);

    return (
        <div>
            <img className="dollar" onClick={() => onMoney(1)} src={gif} alt="dollar" />
        </div>
    )
}

export default Wallet;