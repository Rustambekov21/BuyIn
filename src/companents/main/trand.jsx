import { NavLink } from "react-router-dom";
import { TrendList } from "../../utils/trand-list";
import { Button } from "antd";
import { Icons } from "../../assets/icons";
// import add from "../assets/images/add.png"

const Trend = () => {
    return <div className="trend">
        <div className="title">В Тренде</div>
        <div className="trend-main">
            {
                TrendList.map(item => (
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
            <div className="add">
            <div className="add-img">
                <img src="https://favoritmarket.com/st/2216/8965492/1.jpg" alt="" />
                </div>
            <div className="add-img">
                <img src="https://s3.kinoteatr.ru/upload/a1/00/01/02/31/UXeNyAiUev21RZKLWN6V.jpg" alt="" />
                </div>
            <div className="add-img">
                <img src="https://s3.kinoteatr.ru/upload/a1/00/01/02/31/UXeNyAiUev21RZKLWN6V.jpg" alt="" />
                </div>
            <div className="add-img">
                <img src="https://s3.kinoteatr.ru/upload/a1/00/01/02/31/UXeNyAiUev21RZKLWN6V.jpg" alt="" />
                </div>
            </div>
    </div>
}

export default Trend;