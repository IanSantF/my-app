import "./App.css";
import Header from './components/Header/Header';

export default function App() {
  const name = 'Destec';
  return ( 
  <div className="App">
    <Header company={name}/>
  </div>
  );
}









// // import React from 'react';

// // export default class App extends React.Component{
// //   constructor(props){
// //     super(props)
// //   }
// //   render(){
    
// //       return <div className="App"></div>;
    
// //   }
// }
