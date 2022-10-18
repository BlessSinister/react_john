import React from "react";
import FeaturedWorks from "./FeaturedWorks";

class RecentPosts extends React.Component {
    render() {
        return (
            <main>
                <div className="container main-container">
                    <div className="main-h2-block">
                        <h2 >Recent posts</h2>
                        <a href="">View all</a>
                    </div>
                    <div className="main-posts-block">
                        <div className="main-posts1">
                            <h2>Making a design system from scratch</h2>
                            <div className="main-date-block">
                                <p>12 Feb 2020</p>
                                <div className="post-line"></div>
                                <p>Design, Pattern</p>
                            </div>
                            <div className="main-post-content">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </div>
                        </div>

                        <div className="main-posts2">
                            <h2>Creating pixel perfect icons in Figma</h2>
                            <div className="main-date-block">
                                <p>12 Feb 2020</p>
                                <div className="post-line"></div>
                                <p>Figma, Icon Design</p>
                            </div>
                            <div className="main-post-content">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </div>
                        </div>
                    </div>
                </div>
                <FeaturedWorks />
            </main>
        )
    }
}
export default RecentPosts