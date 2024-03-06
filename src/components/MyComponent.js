import React from "react";

 class MyComponent extends React.Component {
    state = {
        name:"hung",
        age:'18',
        address:'213123'
    }

    clicks(e){
        console.log(123);
    }

    render(){
        return (
            <div>
                my first component asd
                my name is {this.state.name}
                <button onClick={this.clicks}>click</button>
            </div>
        );
    }
}
export default MyComponent;