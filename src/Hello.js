import React from "react"
import john from "./john.png";


class Hello extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: true,
        }
    }
    render() {
        const h1 = `  Hi, I am John,
        Creative Technologist`,
            content = `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet.`,
            dataHelloAvatar = { position: 'absolute', width: 243, height: 243, left: 1160, top: 210 }

        return (
            <div className="date-hello-cont">
                <h1 className="data-hello-h1">{h1}</h1>
                <p className="data-hello-p">{content}</p>
                <button className="data-hello-button" type="submit">Download Resume</button>
                <img src={john} alt="avatar" className="data-hello-avatar" style={dataHelloAvatar} />
            </div>
        )
    }

}
export default Hello