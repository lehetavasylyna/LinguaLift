import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="screen">
            <div className="div">
                <div className="overlap">
                    <div className="rectangle" />
                    <div className="text-wrapper">Головна</div>
                    <div className="text-wrapper-2">Уроки</div>
                    <div className="text-wrapper-3">Мій Словник</div>
                    <div className="text-wrapper-4">Статистика</div>
                    <div className="frame">
                        <div className="text-wrapper-5">Зареєструватися</div>
                    </div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-6">Почнемо!</div>
                    </div>
                    <div className="frame-2">
                        <div className="text-wrapper-7">Увійти</div>
                    </div>
                    <p className="hello-are-you-ready">
                        Hello! Are you ready to <br />
                        study?
                    </p>
                </div>
                <div className="frame-3">
                    <div className="text-wrapper-8">Ще...</div>
                </div>
                <div className="overlap-group">
                    <div className="rectangle-2" />
                    <div className="text-wrapper-9">Артикль a/an, the</div>
                    <div className="text-wrapper-10">Elementary</div>
                    <div className="text-wrapper-11">+5</div>
                </div>
                <div className="overlap-group-2">
                    <div className="rectangle-2" />
                    <p className="p">Many/much, a little/ a few</p>
                    <div className="text-wrapper-10">Intermediate</div>
                    <div className="text-wrapper-12">+30</div>
                </div>
                <div className="overlap-2">
                    <div className="rectangle-2" />
                    <div className="text-wrapper-13">So/ such</div>
                    <div className="text-wrapper-10">Elementary</div>
                    <div className="text-wrapper-11">+5</div>
                </div>
                <div className="overlap-3">
                    <div className="rectangle-2" />
                    <div className="text-wrapper-10">Intermediate</div>
                    <div className="text-wrapper-14">Present Tenses</div>
                    <div className="text-wrapper-12">+30</div>
                </div>
                <div className="overlap-4">
                    <div className="group-4">
                        <div className="text-wrapper-15">Головна</div>
                        <div className="text-wrapper-16">Новини</div>
                        <div className="text-wrapper-17">Про нас</div>
                        <div className="text-wrapper-18">Наша команда</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
