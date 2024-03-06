import React from "react";



class ListUser extends React.Component {



    
    render() {
        const { listUsers  } = this.props;
        return (
            <div>
               {listUsers.map((item)=>{
                    return (
                        <div key={item.id}>
                            {item.id} + {item.name}+ {item.age}
                        </div>
                    );

               })}
            </div>
        );
    }
    
}
export default ListUser;