import { Link, NavLink } from "react-router-dom";
import { FooterList, FooterList2 } from "../utils/footer-list";
import { Icons } from "../assets/icons";

const Footer = () => {
    return <div className="footer">
        <div className="footer-main">
            <ul className="footer-list1">
                {
                    FooterList.map(item => (
                        <NavLink to={item.path} key={item.id} className="footer-link">{item.title}</NavLink>
                    ))
                }
            </ul>
            <div className="footer-list2">
                <ul className="footer-list2__list1">
                    {
                       FooterList2.map(item => (
                        <NavLink to={item.path} key={item.id} className="footer-link">{item.title}</NavLink>
                    )) 
                    }
                </ul> 
                <ul className="footer-list2__list1">
                    {
                       FooterList2.map(item => (
                        <NavLink to={item.path} key={item.id} className="footer-link">{item.title}</NavLink>
                    )) 
                    }
                </ul> 
            </div>
            <ul className="footer-list1">
                {
                    FooterList.map(item => (
                        <NavLink to={item.path} key={item.id} className="footer-link">{item.title}</NavLink>
                    ))
                }
            </ul>
            <ul className="footer-list2__list1">
                    {
                       FooterList2.map(item => (
                        <NavLink to={item.path} key={item.id} className="footer-link">{item.title}</NavLink>
                    )) 
                    }
                </ul> 
                <div className="footer-list3">
                    <NavLink className="footer-link">Available on</NavLink>
                    <NavLink><Icons.googlePlay/></NavLink>
                    <NavLink><Icons.appStore/></NavLink>
                </div>
        </div>
        <div className="link">
        <NavLink className="under-link">2022 - BuyIn - The most famous e-commerce website in Uzbekistan since in 2022</NavLink>
        </div>
    </div>
}

export default Footer;
