import { useState } from "react";
import "./Wallet.scss";

const Wallet = ({cash, onMoney}) => {

    const [money, setMoney] = useState(0);

    return (
        <div>
            <img className="dollar" onClick={() => onMoney(1)} src="https://odollarah.ru//wp-content/uploads/2014/05/gold-dollar-sign.jpg" alt="dollar" />

            <p>Wallet: {cash} $</p>

        </div>
    )
}

export default Wallet;