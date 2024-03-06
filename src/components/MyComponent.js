import React from "react";

 class MyComponent extends React.Component {

    state = {
        name:"hung",
        age:'18',
        address:'213123'
    }
    changeName= ()=>{
        console.log(123123);
        this.setState({
            name:"asdasdsa"
        })
    }

    render(){
        return (
            <div>
                my first component asd
                my name is {this.state.name}

                <button onClick={this.changeName}>click</button>
            </div>
        );
    }
}
export default MyComponent;