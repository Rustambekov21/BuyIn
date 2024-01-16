import { Button, Checkbox, Flex, Radio, Slider } from "antd";
import {
    SportButtonList,
    SportList,
    SportMenuBrend,
    SportMenuPeriod,
    SportMenuSize,
} from "../../utils/pages/sport/sport-list";
import { Link, NavLink } from "react-router-dom";
import { Icons } from "../../assets/icons";
import { useState } from "react";

const SportPage = () => {
    const [value, setValue] = useState(false);

    // const handlyClick = () => {
    //     setValue(true)
    // }

    return (
        <div className='sport'>
            <div className='sport-top'>
                <p className='sport-loc'>
                    Главная / Спорт / <b>Спортивные кроссовки</b>{" "}
                </p>
                <div className='sport-titles'>
                    <h2 className='sport-title'>Спортивные кроссовки</h2>
                    <p className='sport-text'>341 товаров</p>
                </div>
                <Flex gap='12px' className='sport-btn__list'>
                    {SportButtonList.map((item) => (
                        <NavLink key={item.id}>
                            <Button>{item.title}</Button>
                        </NavLink>
                    ))}
                </Flex>
            </div>
            <Flex>
                <div className='sport-menu'>
                    <div className='sport-menu__order'>
                        <div className='order-top'>
                            <h2 className='order-title'>Срок доставки</h2>
                            <Icons.select />
                        </div>
                        <div className='order-period__list'>
                            {SportMenuPeriod.map((item) => (
                                <Flex key={item.id}>
                                    <Radio />
                                    {item.title}
                                </Flex>
                            ))}
                        </div>
                    </div>

                    <div className='sport-menu__brend'>
                        <div className='order-top'>
                            <h2 className='order-title'>Бренд</h2>
                            <Icons.select />
                        </div>
                        <div className='menu-brend__list'>
                            {SportMenuBrend.map((item) => (
                                <Flex key={item.id} gap='5px'>
                                    <Checkbox />
                                    {item.title}
                                </Flex>
                            ))}
                        </div>
                        <div className='brend-link'>
                            <Link>Показать все</Link>
                        </div>
                    </div>

                    <div className='sport-menu__size'>
                        <div className='order-top'>
                            <h2 className='order-title'>Размер</h2>
                            <Icons.select />
                        </div>
                        <div className='menu-size__list'>
                            {SportMenuSize.map((item) => (
                                <Flex key={item.id} gap='5px'>
                                    <Checkbox />
                                    {item.title}
                                </Flex>
                            ))}
                        </div>
                        <div className='brend-link'>
                            <Link>Показать все</Link>
                        </div>
                    </div>

                    <div className='sport-menu__color'>
                        <div className='order-top'>
                            <h2 className='order-title'>Размер</h2>
                            <Icons.select />
                        </div>
                        <div className='menu-color__list'>
                            <NavLink className='w red'></NavLink>
                            <NavLink className='w blue'></NavLink>
                            <NavLink className='w green'></NavLink>
                            <NavLink className='w pink'></NavLink>
                            <NavLink className='w aqua'></NavLink>
                            <NavLink className='w black'></NavLink>
                            <NavLink className='w orange'></NavLink>
                            <NavLink className='w blue'></NavLink>
                            <NavLink className='w purple'></NavLink>
                            <NavLink className='w dark-green'></NavLink>
                        </div>
                        <div className='brend-link'>
                            <Link>Показать все</Link>
                        </div>
                    </div>

                    <div className='sport-menu__price'>
                        <div className='order-top'>
                            <h2 className='order-title'>Размер</h2>
                            <Icons.select />
                        </div>
                        <div className='price-slider'>
                            <Slider
                                range={{ draggableTrack: true }}
                                defaultValue={[20, 50]}
                            />
                        </div>
                        <div className='price-btns'>
                            <Button>от 388.000</Button>
                            <Button>до 1.879.000</Button>
                        </div>
                    </div>
                </div>

                <div className='sport-main'>
                    {SportList.map((item) => (
                        <NavLink
                            to={item.path}
                            key={item.id}
                            className='sport-link'>
                            <div className='sport-card'>
                                <div className='sport-img'>
                                    <img src={item.img} alt='' />
                                </div>
                                <h2 className='sport-card__title'>
                                    {item.title}
                                </h2>
                                <div className='card-raiting'>
                                    {item.star} {item.star} {item.star}{" "}
                                    {item.star} {item.whiteStar} (31)
                                </div>
                                <div className='card-money'>
                                    {item.icon}{" "}
                                    <p className='card-text'>{item.text}</p>
                                </div>
                                <div className='card-month'>
                                    <h2 className='card-price__month'>
                                        {item.priceForMonth}
                                    </h2>
                                    <p className='card-text'>{item.Month}</p>
                                </div>
                                <h1 className='card-price sport-price'>
                                    {item.price}
                                </h1>
                            </div>
                        </NavLink>
                    ))}
                    <Button className='trend-btn sport-btn'>
                        <Icons.trendBtn /> Показать еще
                    </Button>
                </div>
            </Flex>
        </div>
    );
};

export default SportPage;
