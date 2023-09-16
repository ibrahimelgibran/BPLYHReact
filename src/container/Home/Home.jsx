import React, { Component } from "react";
// import YouTubeComp from "../../components/YouTubeComp/YouTubeComp";
import "./Home.css";
// import Product from "../Product/Product";
// import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import BlogPost from "../BlogPost/BlogPost";

class Home extends Component {
  state = {
    showComponent: true,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false,
    //   });
    // }, 15000);
  }

  render() {
    return (
      <div>
        {/* <p className="judul">Youtube Component</p>
        <hr />
        <YouTubeComp
          time="7.17"
          title="Tutorial Create Server Clinet NodeJS - Bagian 1"
          desc="100x ditonton, 2 hari yang lalu"
        />
        <YouTubeComp
          time="10.04"
          title="Tutorial Create Server Clinet NodeJS - Bagian 2"
          desc="200x ditonton, 1 hari yang lalu"
        />
        <YouTubeComp
          time="3.46"
          title="Tutorial Create Server Clinet NodeJS - Bagian 3"
          desc="500x ditonton, 6 hari yang lalu"
        />
        <YouTubeComp
          time="17.17"
          title="Tutorial Create Server Clinet NodeJS - Bagian 4"
          desc="1000x ditonton, 10 hari yang lalu"
        />
        <YouTubeComp />
        <p>Counter</p>
        <hr />
        <Product /> */}
        {/* <p>LifeCycleComponent</p>
        <hr />
        {this.state.showComponent ? <LifeCycleComp /> : null} */}
        <p>Blog Post</p>
        <hr />
        <BlogPost />
      </div>
    );
  }
}

export default Home;
