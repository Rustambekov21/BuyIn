import { Drawer } from "antd";
import { menu } from "../constants/menu";
import { NavLink } from "react-router-dom";

const Drower = ({open, setOpen}) => {

    const onCancel = () => {
        setOpen(false)
    }
    return <Drawer width="330px" className="drawer" placement="left" onClose={onCancel} open={open} closable={false}>
       <div className="drawer-list">
       {
          menu.map(item => (
            <NavLink className="drawer-link" onClick={onCancel} to={item.path} key={item.id}>{item.icon} {item.title__ru}</NavLink>
          ))
        }
       </div>
  </Drawer>
}

export default Drower;
