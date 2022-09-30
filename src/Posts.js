import React from "react"



class Posts extends React.Component {
    render() {
        let cont = { position: 'absolute', width: 1920, height: 396, left: 0, top: 595, background: '#EDF7FA', overflowX: 'hidden' },
            recent = { position: 'absolute', width: 129, height: 60, left: 548, top: 602, fontFamily: 'Heebo', fontStyle: 'normal', fontWeight: 400, fontSize: 22, lineHeight: 60, display: 'flex', alignItems: 'flex-end', marginTop: 35 },
            linkStyle = { position: 'absolute', width: 208, height: 20, left: 1170, top: -150, lineHeight: 24, textAlign: 'right', color: '#00A8CC', },
            f1H2 = `Making a design system from  scratch`,
            f2H2 = `Creating pixel perfect icons in Figma`,
            f1P1 = `12 Feb 2020`,
            f1P2 = `Design, Pattern`,
            f1P3 = `met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`
        return (
            <div className="date-posts-cont" style={cont}>
                <p style={recent}>Recent posts</p>
                <a href="./john.png" style={linkStyle}>View all</a>
                <div>
                    <div className="contentContainer">
                        <h2 className="data-posts-h2">{f1H2}
                        </h2>
                        <p className="data-posts-p1">{f1P1}</p>
                        <div className="data-posts-div"></div>
                        <p className="data-posts-p2">{f1P2}</p>
                        <p className="data-posts-p3">{f1P3}</p>
                    </div>
                    <div className="contentContainer-2">
                        <h2 className="data-posts-h2-2">{f2H2}
                        </h2>
                        <p className="data-posts-p1-2">{f1P1}</p>
                        <div className="data-posts-div-2"></div>
                        <p className="data-posts-p2-2">{f1P2}</p>
                        <p className="data-posts-p3-2">{f1P3}</p>
                    </div>
                </div>
            </div>
        )
    }

}
export default Posts