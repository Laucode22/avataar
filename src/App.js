import { Component } from 'react';
import './App.css';
import Avatar from './Avatar/Avatar';

class App extends Component {
  render(){
  return (
    <div className="App">
       <Avatar url= "https://image.shutterstock.com/image-photo/funny-cat-smile-on-cardboard-260nw-1031589889.jpg" width={300} shape="circle"/>

    </div>
  );
}
}
export default App;
