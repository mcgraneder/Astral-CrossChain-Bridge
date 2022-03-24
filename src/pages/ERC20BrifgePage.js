import React, { useState } from "react";
import ERC20BridgeModal from "../components/ERC20BridgeModal/ERC20BridgeModal";
import useBalance from "../hooks/useBalance";

const ERC20BridgePage = () => {

    const [show1, setShow1] = useState(false);
    const toggle1 = () => setShow1(!show1);
 
    const { balance, setBalance } = useBalance()

    return (

        <>
            <ERC20BridgeModal close={toggle1} balance={balance} setBalance={setBalance}></ERC20BridgeModal>
        </>
    )
}

export default ERC20BridgePage
