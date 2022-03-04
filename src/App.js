import { Route, Redirect, useHistory } from 'react-router-dom';
import {ReactComponent as Logo} from './svg/logo.svg';
import {ReactComponent as HBG} from './svg/hamburger.svg';
import './App.css';
import './Main.css';
import {Element, Generic, Main} from './pages';
import {SideMenu} from './SideMenu';
import React, {useState} from 'react';

function Header(props){
  const history = useHistory();

  const Move = () => {
      history.push("/Phantom");
  }

  return(
    <header className="App-header">
      <Logo className="App-logo" alt="logo" />
      <span onClick={Move} >P H A N T O M</span>
      <HBG onClick={() => props.toggleMenu()} className="hamburger" alt="hamburger"/>
    </header>
  );
}

function Footer(){
  return(
    <footer>
      <section className="footer">
        <article>
          <h2>GET IN TOUCH</h2>
          <form>
            <div className="wrap">
                <input type="text" name="name" placeholder="Name"/>
                <input type="email" name="email" placeholder="Email"/>
            </div>
            <textarea placeholder="Message"></textarea>
            <ul className="horizontal">
              <li>
                <input type="submit" value="SEND"/>
              </li>
            </ul>
          </form>
        </article>
        <article>
          <h2>FOLLOW</h2>
          <ul className="horizontal flex">
              <li><div className="borderbox"><svg/></div></li>
              <li><div className="borderbox"><svg/></div></li>
              <li><div className="borderbox"><svg/></div></li>
              <li><div className="borderbox"><svg/></div></li>
              <li><div className="borderbox"><svg/></div></li>
              <li><div className="borderbox"><svg/></div></li>
              <li><div className="borderbox"><svg/></div></li>
              <li><div className="borderbox"><svg/></div></li>
          </ul>
        </article>
      </section>
      <section>
        <ul className="horizontal alt">
          <li><p>© Untitled. All rights reserved</p></li>
          <li><p>Design:&nbsp;<a href="/Phantom">HTML5 UP</a></p></li>
          <li><p>Demo Images:&nbsp;<a href="/Phantom">Unsplash</a></p></li>
        </ul>
      </section>
    </footer>
  );
}

const App = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  }
  const closeMenu = () => {
    setMenu(false);
  }

  return (
    <div>
      <Header toggleMenu={toggleMenu} />
      <SideMenu closeMenu={closeMenu}  menuActive={menu ? 'active' : null} />
      
      <Route exact path="/Phantom" component={Main}/>
      <Route exact path="/Generic" component={Generic}/>
      <Route exact path="/Element" component={Element}/>
      <Footer />
    </div>
  );
}

export default App;
