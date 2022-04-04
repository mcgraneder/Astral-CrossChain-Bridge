import { useState } from "react";

const useOnPageLoad = () => {

    const [loading, setLoading] = useState(true);

  
    setTimeout(function(){
            setLoading(false)
        }, 1300);//wait 2 seconds
    
   

    return loading;
}

export default useOnPageLoad;