import React from "react";
import AddUser from "./AddUser";
import ListUser from "./ListUser";

 class MyComponent extends React.Component {

    state = {
       list:[
        {
            id:1,
            name:"hung",
            age:123
        },
        {
            id:2,
            name:"hung2",
            age:1232
        },
        {
            id:3,
            name:"hung3",
            age:1233
        }
       ]
    }
    
    addUser =  (user)=>{
        console.log(user);
        this.setState({
            list:[...this.state.list,user]
        })  
    }

    handleOnSubmit(e){
        e.preventDefault();

    }

    render(){
        return (
            <div>
               <AddUser addUser={this.addUser} />
                <ListUser listUsers={this.state.list}/>
                
            </div>
        );
    }
}
export default MyComponent;