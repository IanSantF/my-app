import "./App.css";
import Header from './components/Header/Header';

export default function App() {
  const name = 'Company Name';
  return ( 
  <div className="App">
    <Header company={name} title="Hard" />
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
