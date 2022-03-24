import React, { useState } from "react";
import DexModal from "../components/DexModal/DexModal";
import TokenListModal from "../components/TokenListModal/TokenListModal";

const DexPage = () => {

    const [showTokenModal, setShowTokenModal] = useState(false)
    const toggleTokenModal = () => setShowTokenModal(!showTokenModal)

    return (

        <>
            <TokenListModal visible={showTokenModal} close={toggleTokenModal}></TokenListModal>
            <DexModal visible={showTokenModal} close={toggleTokenModal}></DexModal>
        </>
    )
}

export default React.memo(DexPage)
