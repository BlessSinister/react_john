import React from "react";
import fb from './footer_icon_fb.png'
import insta from './footer_icon_insta.png'
import twitter from './footer_icon_twitter.png'
import li from './footer_icon_li.png'
class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="footer-wrapper">
                        <img src={fb} alt="" className="footer-icon1" />
                        <img src={insta} alt="" className="footer-icon2" />
                        <img src={twitter} alt="" className="footer-icon3" />
                        <img src={li} alt="" className="footer-icon4" />
                    </div>
                    <p className="footer-copyrights">
                        Copyright ©2020 All rights reserved
                    </p>
                </div>
            </footer>
        )
    }
}
export default Footer