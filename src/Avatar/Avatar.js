import { Component } from "react";
import './Avatar.css';

class Avatar extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
render(){
    return(
     <div className="Avatar">
      
         <img src={this.props.url} alt="" width={this.props.width} className={this.props.shape} />
      
     </div>
    );
}

}

export default Avatar;