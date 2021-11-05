import React, { useContext, useEffect } from 'react';
import { AppContext } from '../AppContext'
import { MenuContext } from "./MenuContext";
import MenuNav from './menu/MenuNav';

const MenuContainer = () => {
    const [menu, setMenu] = useContext(MenuContext);
    // const classes = useStyles();
    const [state, setState] = useContext(AppContext);
    useEffect(() => {
        // If top level nav clicked and the menu is selected, go to menunav
        if (state.currentIndex === 1) {
            setMenu({ ...menu, currentMenuComponentIndex: 0 })
        }
    }, [state.updateTrigger])


    return (
        <div>
            {menu.menuComponentArr[menu.currentMenuComponentIndex]}
        </div>
    )
};
export default MenuContainer;
