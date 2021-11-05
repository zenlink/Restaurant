import React, {useState, createContext} from 'react';
import Home from "./components/Home";
import Menu from "./components/Menu";
import GiftCards from "./components/GiftCards";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Bag from "./components/Bag";
import Checkout from "./components/Checkout";
import Final from "./components/Final";

const AppContext = createContext([{}, ()=>{}]);

   const AppProvider = (props)=>{
        const [state, setState] = useState({
            currentIndex: 0, 
            navArr: ["JiangNan", "Menu", "Events", "Gift Cards", "Contact", "Bags"], 
            componentsArr: [<Home />, <Menu />, <Events />, <GiftCards />, <Contact />, <Bag />, <Checkout />, <Final />], 
            isScrollTop: true, 
            updateTrigger:false,
            navTop: 0, 
            windowWidth:0, 
            orderItem: [], 
            item: 0, 
            subTotal: 0, 
            dialogueBoxOpen: false, 
        })
    
    return (
        <AppContext.Provider value = {[state, setState]}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};
