import React from "react";


class FeaturedWorks extends React.Component {
    render() {
        return (
            <section>
                <div className="container">
                    <h2 className="feature-h2-adaptcenter">
                        Featured works
                    </h2>
                    <div className="feature-block-container">
                        <div className="feature-block-img-side"></div>
                        <div className="feature-block-text-side">
                            <h2>Designing Dashboards</h2>
                            <div className="feature-block-text-elem-position">
                                <div className="feature-date-project">
                                    2020
                                </div>
                                <p>Dashboard</p>
                            </div>
                            <p className="feature-block-p-content">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>

                    <div className="feature-block-container adapt-visability">
                        <div className="feature-block-img-side-2"></div>
                        <div className="feature-block-text-side">
                            <h2>Vibrant Portraits of 2020</h2>
                            <div className="feature-block-text-elem-position">
                                <div className="feature-date-project">
                                    2018
                                </div>
                                <p>Illustrationd</p>
                            </div>
                            <p className="feature-block-p-content">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>

                    <div className="feature-block-container plusmb adapt-visability">
                        <div className="feature-block-img-side-3"></div>
                        <div className="feature-block-text-side">
                            <h2>36 Days of Malayalam type</h2>
                            <div className="feature-block-text-elem-position">
                                <div className="feature-date-project">
                                    2018
                                </div>
                                <p>Typography</p>
                            </div>
                            <p className="feature-block-p-content">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default FeaturedWorks