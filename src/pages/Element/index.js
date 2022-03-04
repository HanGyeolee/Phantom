import './index.css';
import '../../Main.css';

function Button(props){
    return(
      <button className={props.type}>
        {props.children}
        <a href={props.href}>
          <p>{props.text}</p>
        </a>
      </button>
    );
}

export const Element = () => {
    return(
        <section>
            <h1>Elements</h1>
            <article>
                <h2>TEXT</h2>
                <p>
                This is <b>bold</b>
                and this is <strong>strong</strong>.
                This is <i>italic</i>
                and this is <em>emphasized</em>.
                This is <sup>superscript</sup>text
                and this is <sub>subscript</sub>text.
                This is <u>underlined</u>
                and this is code: <code>for(;;) &#123;...&#125;</code>.
                Finally, <a href="/Phantom">this is a link</a>.
                </p>
                <hr></hr>
                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                <hr></hr>
                <h2>HEADING LEVEL 2</h2>
                <h3>HEADING LEVEL 3</h3>
                <h4>HEADING LEVEL 4</h4>
                <hr></hr>
            </article>
            <article>
                <h2>BLOCKQUOTE</h2>
                <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
            </article>
            <article>
                <h2>PREFORMATTED</h2>
                <pre>
                    <code>
                        <p>
                        i = 0;<br/>
                        <br/>
                        while (!deck.isInOrder()) &#123;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;print 'Iteration ' + i;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;deck.shuffle();<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;i++;<br/>
                        &#125;<br/>
                        <br/>
                        print 'It took ' + i + ' iterations to sort the deck.';<br/>
                        </p>
                    </code>
                </pre> 
            </article>
            <article>
                <h2>LISTS</h2>
                <div className="wrap">
                    <div>
                        <h3>UNORDERED</h3>
                        <ul>
                            <li><p>Dolor pulvinar etiam.</p></li>
                            <li><p>Sagittis adipiscing.</p></li>
                            <li><p>Felis enim feugiat.</p></li>
                        </ul>
                        <h3>ALTERNATE</h3>
                        <ul className="alt">
                            <li><p>Dolor pulvinar etiam.</p></li>
                            <li><p>Sagittis adipiscing.</p></li>
                            <li><p>Felis enim feugiat.</p></li>
                        </ul>
                    </div>
                    <div>
                        <h3>ORDERED</h3>
                        <ol>
                            <li><p>Dolor pulvinar etiam.</p></li>
                            <li><p>Sagittis adipiscing.</p></li>
                            <li><p>Felis enim feugiat.</p></li>
                            <li><p>Dolor pulvinar etiam.</p></li>
                            <li><p>Sagittis adipiscing.</p></li>
                            <li><p>Felis enim feugiat.</p></li>
                        </ol>
                        <h3>ICONS</h3>
                        <ul className="horizontal">
                            <li><svg/></li>
                            <li><svg/></li>
                            <li><svg/></li>
                            <li><svg/></li>
                        </ul>
                        <ul className="horizontal">
                            <li><div className="borderbox"><svg/></div></li>
                            <li><div className="borderbox"><svg/></div></li>
                            <li><div className="borderbox"><svg/></div></li>
                            <li><div className="borderbox"><svg/></div></li>
                        </ul>
                    </div>
                </div>
            </article>
            <article>
                <h2>ACTIONS</h2>
                <div className="wrap">
                    <ul className="alt_no">
                        <li>
                            <ul className="horizontal">
                                <li><Button type="primary" href="" text="DEFAULT"/></li>
                                <li><Button href="" text="DEFAULT"/></li>
                            </ul>
                        </li>
                        <li>
                            <ul className="horizontal">
                                <li><Button type="primary small" href="" text="SMALL"/></li>
                                <li><Button type="small" href="" text="SMALL"/></li>
                            </ul>
                        </li>
                        <li>
                            <ul className="alt_no">
                                <li><Button type="primary" href="" text="DEFAULT"/></li>
                                <li><Button href="" text="DEFAULT"/></li>
                            </ul>
                        </li>
                        <li>
                            <ul className="alt_no">
                                <li><Button type="primary small" href="" text="SMALL"/></li>
                                <li><Button type="small" href="" text="SMALL"/></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="alt_no">
                        <li><li><Button type="primary fit" href="" text="DEFAULT"/></li></li>
                        <li><li><Button type="fit" href="" text="DEFAULT"/></li></li>
                        <li><li><Button type="primary small fit" href="" text="SMALL"/></li></li>
                        <li><li><Button type="small fit" href="" text="SMALL"/></li></li>
                    </ul>
                </div>
            </article>
            <article>
                <h2>TABLE</h2>
                <h3>DEFAULT</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Desciption</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Item One</td>
                            <td>Ante turpis integer aliquet porttitor.</td>
                            <td>29.99</td>
                        </tr>
                        <tr>
                            <td>Item One</td>
                            <td>Vis ac commodo adipiscing arcu aliquet.</td>
                            <td>19.99</td>
                        </tr>
                        <tr>
                            <td>Item One</td>
                            <td>Morbifaucibus arcu accumsan lorem.</td>
                            <td>29.99</td>
                        </tr>
                        <tr>
                            <td>Item One</td>
                            <td>Vitae integer tempus condimentum.</td>
                            <td>19.99</td>
                        </tr>
                        <tr>
                            <td>Item One</td>
                            <td>Ante turpis integer aliquet porttitor.</td>
                            <td>29.99</td>
                        </tr>
                        <tr>
                            <td colSpan="2"></td>
                            <td>100.00</td>
                        </tr>
                    </tbody>
                </table>
                <h3>ALTERNATE</h3>
                <table className="alt">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Desciption</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Item One</td>
                            <td>Ante turpis integer aliquet porttitor.</td>
                            <td>29.99</td>
                        </tr>
                        <tr>
                            <td>Item One</td>
                            <td>Vis ac commodo adipiscing arcu aliquet.</td>
                            <td>19.99</td>
                        </tr>
                        <tr>
                            <td>Item One</td>
                            <td>Morbifaucibus arcu accumsan lorem.</td>
                            <td>29.99</td>
                        </tr>
                        <tr>
                            <td>Item One</td>
                            <td>Vitae integer tempus condimentum.</td>
                            <td>19.99</td>
                        </tr>
                        <tr>
                            <td>Item One</td>
                            <td>Ante turpis integer aliquet porttitor.</td>
                            <td>29.99</td>
                        </tr>
                        <tr>
                            <td colSpan="2"></td>
                            <td>100.00</td>
                        </tr>
                    </tbody>
                </table>
            </article>
            <article>
                <h2>BUTTONS</h2>
                <ul className="alt_no">
                    <li>
                        <ul className="horizontal">
                            <li><Button type="primary" href="" text="PRIMARY"/></li>
                            <li><Button href="" text="DEFAULT"/></li>
                        </ul>
                    </li>
                    <li>
                        <ul className="horizontal">
                            <li><Button type="large" href="" text="LARGE"/></li>
                            <li><Button href="" text="DEFAULT"/></li>
                            <li><Button type="small" href="" text="SMALL"/></li>
                        </ul>
                    </li>
                    <li>
                        <ul className="horizontal fit">
                            <li><Button type="primary" href="" text="FIT"/></li>
                            <li><Button href="" text="FIT"/></li>
                            <li><Button href="" text="FIT"/></li>
                        </ul>
                    </li>
                    <li>
                        <ul className="horizontal fit">
                            <li><Button type="primary small" href="" text="FIT + SMALL"/></li>
                            <li><Button type="small" href="" text="FIT + SMALL"/></li>
                            <li><Button type="small" href="" text="FIT + SMALL"/></li>
                        </ul>
                    </li>
                    <li>
                        <ul className="horizontal">
                            <li>
                                <Button type="primary" href="" text="ICON">
                                <svg></svg>
                                </Button>
                            </li>
                            <li>
                                <Button href="" text="ICON">
                                <svg></svg>
                                </Button>
                            </li>
                            <li>
                                <Button href="" text="ICON">
                                <svg></svg>
                                </Button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className="horizontal">
                            <li><Button type="primary disabled" href="" text="DISABLED"/></li>
                            <li><Button type="disabled" href="" text="DISABLED"/></li>
                        </ul>
                    </li>
                </ul>
            </article>
            <article>
                <h2>FORM</h2>
                <form>
                    <div className="wrap">
                        <input type="text" name="name" placeholder="Name"/>
                        <input type="email" name="email" placeholder="Email"/>
                    </div>
                    <select name="category">
                        <option value="">- Category -</option>
                        <option value="m">Manufacturing</option>
                        <option value="s">Shipping</option>
                        <option value="a">Administration</option>
                        <option value="h">Human Resources</option>
                    </select>
                    <ul className="horizontal fit">
                        <li>
                            <input type="radio" id="low" name="resolution" value="l" defaultChecked="true"/>
                            <label for="low">Low</label>
                        </li>
                        <li>
                            <input type="radio" id="normal" name="resolution" value="n"/>
                            <label for="normal">Normal</label>
                        </li>
                        <li>
                            <input type="radio" id="high" name="resolution" value="h"/>
                            <label for="high">High</label>
                        </li>
                    </ul>
                    <ul className="horizontal fit">
                        <li>
                            <input type="checkbox" id="emailmecopy" name="emailmecopy"/>
                            <label for="emailmecopy">Email me a copy</label>
                        </li>
                        <li>
                            <input type="checkbox" id="human" name="human" defaultChecked="true"/>
                            <label for="human">Not a robot</label>
                        </li>
                    </ul>
                    <textarea placeholder="Enter your message"></textarea>
                    <ul className="horizontal">
                        <li>
                        <input type="submit" value="SEND MESSAGE"/>
                        </li>
                        <li>
                        <input type="reset" value="RESET"/>
                        </li>
                    </ul>
                </form>
            </article>
            <article>
                <h2>IMAGE</h2>
                <h3>FIT</h3>
                <div className="fit">
                    <img src="./img/pic13.jpg" alt="mounatin"></img>
                </div>
                <ul className="alt_no">
                    <li>
                        <ul className="horizontal fit">
                            <li><img src="./img/pic01.jpg" alt="laptop"></img></li>
                            <li><img src="./img/pic02.jpg" alt="wave"></img></li>
                            <li><img src="./img/pic03.jpg" alt="stairs"></img></li>
                        </ul>
                    </li>
                    <li>
                        <ul className="horizontal fit">
                            <li><img src="./img/pic03.jpg" alt="stairs"></img></li>
                            <li><img src="./img/pic01.jpg" alt="laptop"></img></li>
                            <li><img src="./img/pic02.jpg" alt="wave"></img></li>
                        </ul>
                    </li>
                    <li>
                        <ul className="horizontal fit">
                            <li><img src="./img/pic02.jpg" alt="wave"></img></li>
                            <li><img src="./img/pic03.jpg" alt="stairs"></img></li>
                            <li><img src="./img/pic01.jpg" alt="laptop"></img></li>
                        </ul>
                    </li>
                </ul>
                <h3>LEFT &amp; RIGHT</h3>
                <div className="flex">
                    <p className="left">
                        <img src="./img/pic01.jpg" alt="laptop"></img>
                        Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.
                    </p>
                    <p className="right">
                        <img  src="./img/pic02.jpg" alt="wave"></img>
                        Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.
                    </p>
                </div>
            </article>
        </section>
    );
}