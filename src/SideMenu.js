import {Redirect, useHistory } from 'react-router-dom'
import {ReactComponent as X} from './svg/close.svg';
import './SideMenu.css';
import './Main.css';
import { useState } from 'react';

export const SideMenu = (props) => {
    const history = useHistory();
    const [clicked, setClicked] = useState(false);
    const [href, setHref] = useState("");
  
    const Move = () => {
        history.push(href);
    }

    function Click(href){
        setClicked(true);
        setHref(href);
    }

    return (
        <aside className={props.menuActive} 
            onTransitionEnd={() => {
                if(clicked) Move(); // 애니메이션 종료 후 화면 전환
                setClicked(false);
            }}
        >
            <X onClick={() => props.closeMenu()} ></X>
            <div onClick={() => props.closeMenu()}></div>
            <article>
                <h2>MENU</h2>
                <ul className="alt">
                    <li>
                        <a onClick={() => {props.closeMenu(); Click("/Phantom");}} className="none">Home</a>
                    </li>
                    <li>
                        <a onClick={() => {props.closeMenu(); Click("/Generic");}} className="none">Ipsum veroeros</a>
                    </li>
                    <li>
                        <a onClick={() => {props.closeMenu(); Click("/Generic");}} className="none">Tempus etiam</a>
                    </li>
                    <li>
                        <a onClick={() => {props.closeMenu(); Click("/Generic");}} className="none">Consequat dolor</a>
                    </li>
                    <li>
                        <a onClick={() => {props.closeMenu(); Click("/Element");}} className="none">Elements</a>
                    </li>
                </ul>
            </article>
        </aside>
    );
}