import React from 'react';
import { MenuContext, MenuProvider } from "./MenuContext";
import MenuContainer from "./MenuContainer";
import { makeStyles } from '@material-ui/core/styles';



const Menu = () => {
  
    return (
        <div>
            <MenuProvider>
                <MenuContainer />
            </MenuProvider>
        </div>
    )
}

export default Menu;