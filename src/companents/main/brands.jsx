import { NavLink } from "react-router-dom";
import { BrandsList } from "../../utils/brands-list";
import { Button } from "antd";
import { Icons } from "../../assets/icons";

const Brands = () => {
    return <div className="brands">
        <div className="title">Бренды</div>
        <div className="brands-main">
            {
                BrandsList.map(item => (
                    <NavLink key={item.id} to={item.path}>
                        <div className="brands-img">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <h2 className="brands-title">{item.title}</h2>
                    </NavLink>
                ))
            }
        </div>
        <Button className="trend-btn"><Icons.trendBtn/> Показать еще</Button>
    </div>
}

export default Brands;
