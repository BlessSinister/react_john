import React from "react"
import john from "./john.png";

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: true,
        }
    }
    render() {
        return (
            <div className="date-header-cont">
                <p className="data-header" ><a href='#' alt='Works'>Works</a></p>
                <p className="data-header"><a href='#' alt='Blog'>Blog</a></p>
                <p className="data-header"><a href='#' alt='Contact'>Contact</a></p>
            </div>
        )
    }

}
export default Header