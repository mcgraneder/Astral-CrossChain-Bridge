 //  useEffect(() => {

    //      if(library && ren) {
    //         ren.on("Approval", (from, to , value) => {
    //             // console.log(from, to, value)
    //             console.log("helloooooooooooooo")
    //             setTimeout(() => {
    //                 pendingTransactions.pop()
    //                 setPendingTransactions(pendingTransactions)
    //             }, 10000)
    //         });

    //         ren.on("Transfer", (from, to , value) => {
    //             console.log(from, to, value)
    //             setTimeout(() => {
    //                 console.log("helloooooooooooooo")
    //                 pendingTransactions.pop()
    //                 setPendingTransactions(pendingTransactions)
    //             }, 10000)
    //         });

    //         // if(currentHash.length > 1 && currentHash == undefined) {

    //         //     library.getTransaction(currentHash).then((result) => {
    //         //         if(!result.blockNumber) {
    //         //             setLoading(true)
    //         //         } 
    //         //     })
    //         // }



    //      }
    //  }, [library])