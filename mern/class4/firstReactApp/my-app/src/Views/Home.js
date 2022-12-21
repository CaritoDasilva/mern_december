import React, { Component } from 'react';
import styles from './Home.module.css';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "On"
        };
    }
    render() {
        const { students } = this.props;
        const { position } = this.state;
        console.log("🚀 ~ file: Home.js:6 ~ Home ~ render ~ this.props", this.props)

        return (
            <div>
                <div className={styles.home}>
                    This is our first class component of {students[2]}.
                </div>
                <h1>{position}</h1>
                <button 
                    onClick={() => this.setState(
                        { ...this.state, position: position === "On" ? "Off" : "On" })}>
                            Click me!
                </button>
            </div>
        );
    }
}

export default Home;