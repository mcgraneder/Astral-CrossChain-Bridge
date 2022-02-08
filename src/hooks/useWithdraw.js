import React from "react";

const useWalletTransaction = (text, inputText) => {

    const [text, setText] = useState(" ")
    const [inputText, setInputText] = useState("Deposit")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const { library, account } = useAuth()

    const handleDeposit = async() => {

        const bridge = getContract("0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", abi, library, account);
        const ren1 = getContract("0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f", abi2, library, account);

        const walletBalance = await ren1.balanceOf(account)
        const amount = Web3.utils.toWei(text.toString(), "Gwei")
        console.log( amount)
        console.log(walletBalance)
        if(text > walletBalance) {

            setError("insufficient balance")
            console.log("hey")
            return
        }
       
        setLoading(true)
        try {

            const tx1 = await ren1.approve("0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", amount);
            const txReceipt = await tx1.wait()
           

            console.log(amount)
            const tx2 = await bridge.transferFrom(account, "0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", amount, "BTC")

            const depositReceipt = await tx2.wait()
            .then(() => {
                bridge.getContractTokenbalance("BTC")
                .then((balance) => {
                    console.log(balance)
                    const n = Web3.utils.fromWei(balance.toString(), "Gwei")
                    setBalance(n)
                    setLoading(false)
                });
            });
            
            console.log(depositReceipt)
            
        } catch(error) {

            console.error(error)
            setError(error.message)
            console.log(error)
            setLoading(false)
        }


    }

    const handleWithdraw = async() => {

        const bridge1 = getContract("0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", abi, library, account);
        const renContract = getContract("0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f", abi2, library, account);
        const walletBalance = await bridge1.getContractTokenbalance("BTC")
        console.log(walletBalance)
        console.log(library)
        if(text > walletBalance) {

            setError("insufficient balance")
            return
        }
        const amount = Web3.utils.toWei(text.toString(), "Gwei")
        console.log(amount)
        console.log(account)
        try {

            const withdraw = await bridge1.transfer(account, amount, "BTC")
            
            const depositReceipt = await withdraw.wait()
            .then(() => {
                bridge1.getContractTokenbalance("BTC")
                .then((balance) => {
                    console.log(balance)
                    const n = Web3.utils.fromWei(balance.toString(), "Gwei")
                    setBalance(n)
                    setLoading(false)
                });
            });

        } catch(error) {

            console.error(error)
            setError(error.message)
            console.log(error)
            setLoading(false)
        }
      
    }

    return { handleDeposit, handleWithdraw, setError, error, setLoading, loading}


}

export default useWalletTransaction