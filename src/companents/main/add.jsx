import { NavLink } from "react-router-dom";
import { AddList } from "../../utils/add-list";

const Add = () => {
    return <div className="adversting">
        <div className="adversting-main">
        {
            AddList.map(item => (
                <NavLink key={item.id} to={item.path} className="adversting-card">
                    <div>
                        <h2 className="adversting-title">{item.title}</h2>
                        <p className="adversting-text">{item.text}</p>
                    </div>
                    <div className="adversting-img">
                        <img src={item.img} alt={item.title} />
                    </div>
                </NavLink>
            ))
        }
        </div>
    </div>
}

export default Add;
