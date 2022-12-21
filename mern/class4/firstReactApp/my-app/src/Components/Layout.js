import React, { Component } from "react";

class Layout extends Component {

    render() {
        const { children } = this.props
        console.log("🚀 ~ file: Layout.js:7 ~ Layout ~ render ~ this.props", this.props)
        return (
            <div>
                <h1>HEADER</h1>
                <div>{children}</div>
                <h1>FOOTER</h1>
            </div>
        )
    }
};

export default Layout;