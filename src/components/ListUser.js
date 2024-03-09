import React, { useState } from "react";



// class ListUser extends React.Component {
    
    
//     render() {
//         const { listUsers  } = this.props;
//         return (
//             <>

//                 {true && 
//                     <div>
//                     {listUsers.map((item)=>{
//                             return (
//                                 <div key={item.id}>
//                                     {item.id} + {item.name}+ {item.age}
//                                 </div>
//                             );
//                     })}
//                     </div>
//                 }
                
//             </>

//         );
//     }
    
// }

    const ListUser = (props) =>{
            const { listUsers  } = props;
            const [isShowHideListUser,setShowHidListUser] = useState(true);


            const handleShowHideListUser = () =>{
                setShowHidListUser(!isShowHideListUser)
            }

            return (
                <>
                    <span
                    onClick={()=>{handleShowHideListUser()}}
                    >
                        Show list user
                        {isShowHideListUser!==true ? "show" :"hide"}
                    </span>
                    {isShowHideListUser && 
                        <div>
                        {listUsers.map((item)=>{
                                return (
                                    <div key={item.id}>
                                        {item.id} + {item.name}+ {item.age}
                                    </div>
                                );
                        })}
                        </div>
                    }
                    
                </>
    
            );
        }

    
    
    
export default ListUser;