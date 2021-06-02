import React,{createRef} from 'react';
import './App.css';
import Data from './Components/data';
import Home from "./Components/home";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      "titles" : ["Animals","Fruits","Books","Songs"],
      "titleData" : [
          ['Lion','Tiger','Élephant','Hippo'],
          ['Orange','WaterMelon','Kiwi','Banana'],
          ['Three thousand Stiches','The Fountain Head','Death','Ikigai'],
          ['The nights','Bad guy','IUIHU']
      ]
    }
    this.addItem = this.addItem.bind(this)
    this.stateIndex = createRef()
    this.toAddValue = createRef()
  }

  addItem(){
    let value = this.toAddValue.current.value
    let index = Number(this.stateIndex.current.value) 
    this.state.titleData[index].push(value)
    this.setState(this.state)
  }

 render(){
  return (
    <div>
      <Home></Home>
      <div style={{overFlow:'hidden',margin:'30px'}}>
      <input style={{marginRight:'20px'}} type='text' placeholder='Enter a value' ref={this.toAddValue} />
      <select ref={this.stateIndex}>
        <option value='0'>Animals</option>
        <option value='1'>Fruits</option>
        <option value='2'>Books</option>
        <option value='3'>Songs</option>
      </select>
      <button className='bnt btn-info m-3' onClick={this.addItem}>Add</button>
      </div>
      {
        this.state.titles.map((x,index)=><Data key={x} title={x} items={this.state.titleData[index]}></Data>)
      }
    </div>
  )
  }
}

export default App;
