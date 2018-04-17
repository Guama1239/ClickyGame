import React, {Component} from "react";
import "./square.css";

class Square extends Component {
    
    state = {
        name: "",
        counter: 1
        //shuffle: //create  that function, tell it up the enght fo data (12) and then shuffle randomly.

    }


    handleClick = () => {

        console.log(this.state.counter++)
        // if (this.state.label === "Luis") {
        //     console.log("clicked!!");
        //     this.setState({label: "X"});
        //   //  this.setState.label.counter = 1+
       // }
    }
    render () {
        return (
            <div onClick={this.handleClick} className="square">
                { this.state.counter}
            </div>
        );
    }
}
export default Square;
