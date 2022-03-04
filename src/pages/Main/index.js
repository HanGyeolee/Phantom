import {useState} from 'react';
import { useHistory } from 'react-router';
import './index.css';
import '../../Main.css';

// https://html5up.net/phantom

function ImgAnime(props){
    const history = useHistory();

    const Move = () => {
        let path = props.href;
        history.push(path);
    }

    return(
      <div className="imganime">
        <div className={props.colorstyle}>
            <img src={props.src} alt={props.alt}></img>
        </div>
        <a onClick={Move} >
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </a>
      </div>
    );
}

export const Main = () => {
    return (
        <section>
            <h1>This is Phantom, a free, fully responsive site template designed by <a href="/">HTML5 UP</a>.</h1>
            <p>Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.</p>
            <article>
                <ul className="horizontal flex fit">
                    <li><ImgAnime href="/Generic" alt="1" src="https://hangyeolee.github.io/Phantom/img/pic01.jpg" title="MAGNA" colorstyle="style1">Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</ImgAnime></li>
                    <li><ImgAnime href="/Generic" alt="2" src="https://hangyeolee.github.io/Phantom/img/pic02.jpg" title="MAGNA" colorstyle="style2">Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</ImgAnime></li>
                    <li><ImgAnime href="/Generic" alt="3" src="https://hangyeolee.github.io/Phantom/img/pic03.jpg" title="MAGNA" colorstyle="style3">Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</ImgAnime></li>
                    <li><ImgAnime href="/Generic" alt="4" src="https://hangyeolee.github.io/Phantom/img/pic04.jpg" title="MAGNA" colorstyle="style4">Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</ImgAnime></li>
                    <li><ImgAnime href="/Generic" alt="5" src="https://hangyeolee.github.io/Phantom/img/pic05.jpg" title="MAGNA" colorstyle="style5">Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</ImgAnime></li>
                    <li><ImgAnime href="/Generic" alt="6" src="https://hangyeolee.github.io/Phantom/img/pic06.jpg" title="MAGNA" colorstyle="style6">Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</ImgAnime></li>
                    <li><ImgAnime href="/Generic" alt="7" src="https://hangyeolee.github.io/Phantom/img/pic07.jpg" title="MAGNA" colorstyle="style2">Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</ImgAnime></li>
                    <li><ImgAnime href="/Generic" alt="8" src="https://hangyeolee.github.io/Phantom/img/pic08.jpg" title="MAGNA" colorstyle="style3">Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</ImgAnime></li>
                    <li><ImgAnime href="/Generic" alt="9" src="https://hangyeolee.github.io/Phantom/img/pic09.jpg" title="MAGNA" colorstyle="style1">Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</ImgAnime></li>
                    <li><ImgAnime href="/Generic" alt="10" src="https://hangyeolee.github.io/Phantom/img/pic10.jpg" title="MAGNA" colorstyle="style5">Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</ImgAnime></li>
                    <li><ImgAnime href="/Generic" alt="11" src="https://hangyeolee.github.io/Phantom/img/pic11.jpg" title="MAGNA" colorstyle="style6">Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</ImgAnime></li>
                    <li><ImgAnime href="/Generic" alt="12" src="https://hangyeolee.github.io/Phantom/img/pic12.jpg" title="MAGNA" colorstyle="style4">Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</ImgAnime></li>
                </ul>
            </article>
        </section>
    );
}