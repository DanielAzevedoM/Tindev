import React from 'react';
import logo from '../assets/logo.svg'
import dislike from '../assets/dislike.svg'
import like from '../assets/like.svg'
import './Main.css';


export default function Main({ match }){
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev"/>
            <ul>
                <li>
                    <img src={"https://avatars0.githubusercontent.com/u/21148361?v=4"} alt="" />
                    <footer>
                        <strong>Giovanni Stevam</strong> 
                        <p>Mestre das artes místicas da progamação, conhecedor da quarta e quinta dimensão, sou famoso sendo mais conhecido como giovanni nos games!</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="like"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src={"https://avatars0.githubusercontent.com/u/4248081?v=4"} alt="" />
                    <footer>
                        <strong>filipedeschamps</strong> 
                        <p>A nice guy.</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="like"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src={"https://avatars0.githubusercontent.com/u/635?v=4"} alt="" />
                    <footer>
                        <strong>Daniel Eriksson</strong> 
                        <p>Co-founder & Developer at Overstellar</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="like"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src={"https://avatars2.githubusercontent.com/u/2254731?v=4"} alt="" />
                    <footer>
                        <strong>Diego Fernandes</strong> 
                        <p>CTO na @Rocketseat. Apaixonado por Javascript, ReactJS, React Native, NodeJS e todo ecossistema em torno dessas tecnologias.</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="like"/>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}