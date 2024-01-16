import { Icons } from "../../../assets/icons";
import { UpCircleOutlined, DownCircleOutlined } from "@ant-design/icons";
import { TrainerColor, TrainerImg } from "../../../utils/pages/sport/trainers-list";
import { useState } from "react";

const Trainers = () => {

    // const [id, setId] = useState(0)

    const setId = () => {
        <img src={item.img} alt='trainer' />;

    }

    return (
        <div className='trainers'>
            <div className='trainers-top'>
                <p className='trainers-loc'>
                    Главная / Спорт / Спортивные кроссовки /{" "}
                    <b>Adidas Yeezy 350 V2 “Clay”</b>{" "}
                </p>
                <h1 className='trainers-title'>Adidas Yeezy 350 V2 “Clay”</h1>
                <div className='trainers-raiting'>
                    <div>
                        <Icons.trandStar /> <Icons.trandStar />{" "}
                        <Icons.trandStar /> <Icons.trandStar />{" "}
                        <Icons.trandStarWhite />
                    </div>
                    <p className='trainers-raiting__text'>4 отзывов</p>
                </div>
            </div>
            <div className='trainers-header'>
                <div className='header-imgs'>
                    <div className='trainers-header__menu'>
                        <button className='trainers-header__menu_btn'>
                            <UpCircleOutlined />
                        </button>
                        <div className='trainers-header__menu_miniImg'>
                            {TrainerImg.map((item) => (
                                <button
                                    className='trainers-header__menu_imgBtn'
                                    key={item.id}
                                    onClick={() => setId()}>
                                    <img src={item.img} alt='trainer' />
                                </button>
                            ))}
                        </div>
                        <button className='trainers-header__menu_btn'>
                            <DownCircleOutlined />
                        </button>
                    </div>
                    <div className='img-bg'>
                        <div className='trainers-header__img'>
                            <img
                                src='https://static.cdek.shopping/images/shopping/b8a8a78b34c245899548b8cf0b5ae396.jpg'
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div className='trainers-header__info'>
                    <div className='trainers-header__info_color'>
                        <p>Цвет:</p>
                        <div className='trainers-header__info_list'>
                            {TrainerColor.map((item) => (
                                <button
                                    className='trainers-header__menu_imgBtn'
                                    key={item.id}
                                    onClick={() => setId()}>
                                    <img src={item.img} alt='trainer' />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trainers;
