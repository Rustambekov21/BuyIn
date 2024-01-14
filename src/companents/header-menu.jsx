import { Drawer, Flex, Input } from "antd";
import { NavLink } from "react-router-dom";
import { Icons } from "../assets/icons";
import { HeaderMenuList } from "../utils/header-menu__list";
import useLanguage from "../hooks/useLanguage";
import { useState } from "react";
import Drower from "./header-drower";


const HeaderMenu = () => {

    const [open, setOpen] = useState(false)


    const translate = useLanguage()

    const openCat = () => {
        setOpen(true)
    }

    return (
    <Flex align="center" className="header-menu" justify="space-between">
        <Flex align="center" gap="64px">
        <Flex className="header-logo">
            <div className="header-menu__logo">BUY</div>
            <div>IN</div>
        </Flex>
        <button className="header-menu__layout" onClick={openCat}>
            <Icons.menu/>
            {translate("category")}
        </button>
            <Drower open={open} setOpen={setOpen}/>
        </Flex>
        <Flex className="search" gap="10px">
            <Input type="text" className="header-menu__input"/>
            <button className="header-menu__search">
            <Icons.search/>
            </button>
        </Flex>
        <Flex gap="10px" className="header-menu__list" align="center">
            {
                HeaderMenuList.map(item => (
                    <NavLink to={item.path} key={item.id} className="header-menu__link">
                       {item.icon} {translate(item.title)}
                    </NavLink>
                ))
            }
        </Flex>
        <button className="header-menu__button"><Icons.register/> Регистрация</button>
    </Flex>
    )
} 

export default HeaderMenu;
