import React from "react";

class AddUser extends React.Component{

    onSubmit(e){
        e.preventDefault();

        console.log(123);
        this.props.addUser({
            id:4,
            name:"ád0",
            age:123
        })
    }


    render(){
        const {addUser} = this.props;

        return (
            <form onSubmit={(e)=>this.onSubmit(e)}>
                <input type="text"/>
                <button type="submit">submit</button>
            </form>
        );

    }



}
export default AddUser;