import React from "react";

 class MyComponent extends React.Component {
    state = {
        name:"hung",
        age:'18',
        address:'213123'
    }


    render(){
        return (
            <div>
                my first component asd
                my name is {this.state.name}
            </div>
        );
    }
}
export default MyComponent;