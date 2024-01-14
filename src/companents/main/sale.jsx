import { NavLink } from "react-router-dom";
import { Button } from "antd";
import { Icons } from "../../assets/icons";
import { SaleList } from "../../utils/sale-list";

const Sale = () => {
    return <div className="sale">
        <div className="title">Распродажа</div>
        <div className="trend-main">
            {
                SaleList.map(item => (
                    <NavLink to={item.path} key={item.id}>
                        <div className="trend-card">
                            <div className="card-img trend-img">
                                <img src={item.img} alt="" />
                            </div>
                            <h2 className="trend-card__title">{item.title}</h2>
                            <div className="card-raiting">{item.star} {item.star} {item.star} {item.star} {item.whiteStar} (31)</div>
                            <div className="card-money">
                            {item.icon} <p className="card-text">{item.text}</p>
                            </div>
                            <div className="card-month">
                            <h2 className="card-price__month">{item.priceForMonth}</h2>
                            <p className="card-text">{item.Month}</p>
                            </div>
                            <h1 className="card-price">{item.price}</h1>
                        </div>
                    </NavLink>
                ))
            }
        </div>
        <Button className="trend-btn"><Icons.trendBtn/> Показать еще</Button>
    </div>
}

export default Sale;
