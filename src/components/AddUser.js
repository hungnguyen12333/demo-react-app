import React, { useState } from "react";

// class AddUser extends React.Component{

//     state = {
//         id: Math.floor(Math.random()*1000), 
//         name: "name",
//         age:13,
//     }



//     onSubmit(e){
//         e.preventDefault();


//         this.props.addUser({
//             id:this.state.id,
//             name:this.state.name,
//             age:this.state.age
//         })
//     }

//     onChangeInput(e){
//         this.setState({
//             id: Math.floor(Math.random()*100), 
//             name:e.target.value
//         })
//     }
//     render(){
//         const {addUser} = this.props;

//         return (
//             <form onSubmit={(e)=>this.onSubmit(e)}>
//                 <input type="text"  onChange={ (e)=>{this.onChangeInput(e)}} />
//                 <button type="submit">submit</button>
//             </form>
//         );

//     }



// }
    const AddUser  = (props) =>{
    

    const [user , setUser] = useState({
        id: Math.floor(Math.random()*1000), 
        name: "name",
        age:13,
    })

    const onSubmit = (e)=>{
        e.preventDefault();
        props.addUser({
            id:user.id,
            name:user.name,
            age:user.age
        })
    }

    const onChangeInput=(e) => {
        setUser({
            id: Math.floor(Math.random()*100), 
            name:e.target.value
        })
    }
        const {addUser} = props;

        return (
            <form onSubmit={(e)=>onSubmit(e)}>
                <input type="text"  onChange={ (e)=>{onChangeInput(e)}} />
                <button type="submit">submit</button>
            </form>
        );


}
export default AddUser;