import React from "react"
import john from './john.png'



class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: true,
        }
    }
    render() {
        return (
            <header>
                <div className="container">
                    <nav>
                        <ul className="header-nav">
                            <li className="header-nav__item1">Works</li>
                            <li className="header-nav__item2">Blog</li>
                            <li className="header-nav__item3">Contact</li>
                        </ul>
                    </nav>
                    <div className="hello-block">
                        <div className='hello-block-text'>
                            <h2 className="hello-block-h2">Hi, I am John, <br />
                                <span>Creative</span> Technologist</h2>
                            <p className="hello-block-p">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                        <img src={john} alt="" />
                    </div>
                    <div className="header-download-btn-wrap">
                        <div className="header-download-btn">Download Resume</div>
                    </div>
                </div>
            </header>
        )
    }

}
export default Header