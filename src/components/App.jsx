import React, { Component } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Tabs from "./Tabs";
import Content from "./Content";

class App extends Component {
    state = {
        contentToShow: 'scotsman'
    }

    changeContentToShow = (contentToShow) => {
        this.setState({ contentToShow });
    }

    render() {
        return (
            <div>
                <Nav/>

                <Hero/>

                <Tabs onTabClick={this.changeContentToShow} currentTab={this.state.contentToShow} />

                <Content contentToShow={this.state.contentToShow} />
            </div>
        );
    }
}

export default App;