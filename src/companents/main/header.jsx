import { Carousel, Flex } from "antd";
// import Tv from "../assets/images/TV.png"
import { HeaderList } from "../../utils/header-list";
import { NavLink } from "react-router-dom";

const Header = () => {
    return <div className="header">
        <Carousel autoplay className="header-carousel">
            <div className="header-carousel__first">
                <div className="card1">
                <div className="header-carousel__info">
                    <h1 className="header-carousel__title">SAMSUNG</h1>
                    <h2 className="header-carousel__text">50" QLED 4K Q60B</h2>
                    <button className="header-carousel__btn">Подробнее</button>
                </div>
                <div className="header-carousel__sale">
                    <p className="sale-text">с рассрочкой 0%</p>
                    <p className="sale-num">0-0-12</p>
                    <div className="card1-bg"></div>
                </div>
                <div className="header-carousel__img">
                    <img src="https://finomania.ru/images/detailed/10/ver-63326-1.jpg" alt="" />
                </div>
                </div>
            </div>

            <div className="header-carousel__first">
                <div className="card1">
                <div className="header-carousel__info">
                    <h1 className="header-carousel__title">SAMSUNG</h1>
                    <h2 className="header-carousel__text">50" QLED 4K Q60B</h2>
                    <button className="header-carousel__btn">Подробнее</button>
                </div>
                <div className="header-carousel__sale">
                    <p className="sale-text">с рассрочкой 0%</p>
                    <p className="sale-num">0-0-12</p>
                    <div className="card1-bg"></div>
                </div>
                <div className="header-carousel__img">
                    <img src="https://finomania.ru/images/detailed/10/ver-63326-1.jpg" alt="" />
                </div>
                </div>
            </div>

            <div className="header-carousel__first">
                <div className="card1">
                <div className="header-carousel__info">
                    <h1 className="header-carousel__title">SAMSUNG</h1>
                    <h2 className="header-carousel__text">50" QLED 4K Q60B</h2>
                    <button className="header-carousel__btn">Подробнее</button>
                </div>
                <div className="header-carousel__sale">
                    <p className="sale-text">с рассрочкой 0%</p>
                    <p className="sale-num">0-0-12</p>
                    <div className="card1-bg"></div>
                </div>
                    <div className="header-carousel__img">
                    <img src="https://finomania.ru/images/detailed/10/ver-63326-1.jpg" alt="" />
                </div>
                </div>
            </div>

            <div className="header-carousel__first">
                <div className="card1">
                <div className="header-carousel__info">
                    <h1 className="header-carousel__title">SAMSUNG</h1>
                    <h2 className="header-carousel__text">50" QLED 4K Q60B</h2>
                    <button className="header-carousel__btn">Подробнее</button>
                </div>
                <div className="header-carousel__sale">
                    <p className="sale-text">с рассрочкой 0%</p>
                    <p className="sale-num">0-0-12</p>
                    <div className="card1-bg"></div>
                </div>
                    <div className="header-carousel__img">
                    <img src="https://finomania.ru/images/detailed/10/ver-63326-1.jpg" alt="" />
                </div>
                </div>
            </div>

            <div className="header-carousel__first">
                <div className="card1">
                <div className="header-carousel__info">
                    <h1 className="header-carousel__title">SAMSUNG</h1>
                    <h2 className="header-carousel__text">50" QLED 4K Q60B</h2>
                    <button className="header-carousel__btn">Подробнее</button>
                </div>
                <div className="header-carousel__sale">
                    <p className="sale-text">с рассрочкой 0%</p>
                    <p className="sale-num">0-0-12</p>
                    <div className="card1-bg"></div>
                </div>
                    <div className="header-carousel__img">
                    <img src="https://finomania.ru/images/detailed/10/ver-63326-1.jpg" alt="" />
                </div>
                </div>
            </div>
        </Carousel>

        <div className="header-list">
        {
            HeaderList.map(item => (
                <NavLink key={item.id}>
                <ul className="header-cards">
                    <li className="header-card">
                    <div className="card-bg"></div>
                        <div>
                        <div className="card-title">{item.title}</div>
                        <p className="card-text">{item.text}</p>
                        </div>
                        <div className="card-img">
                            <img src={item.img} alt="" />
                        </div>
                    </li>
                </ul>
                </NavLink>
            ))
        }
        </div>
    </div>
}

export default Header;
