import React,{Component} from 'react';
import './App.css';
import'./hoc.js';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import{faTrash} from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);

 
class App extends Component {
  constructor (props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput=this.handleInput.bind(this)
    this.addItem=this.addItem.bind(this)
    this.deleteItem=this.deleteItem.bind(this)
    this.setUpdate=this.setUpdate.bind(this)
  }
  handleInput(a){
    this.setState({
      currentItem:{
        text:a.target.value,
        key:Date.now()
      }
    })
  }
  addItem(a){
    a.preventDefault();
    const newItem=this.state.currentItem;
    console.log(newItem);
    if(newItem!==""){
      const newItems=[...this.state.items,newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:'' 
        }
      })
    } 
  }
  deleteItem(key){
    const filteredItems=this.state.items.filter(item=>
      item.key!==key);
      this.setState({items:filteredItems})
  }
  setUpdate(text,key){
    const items=this.state.items;
    items.map(item=>
      {
        if(item.key===key){
          item.text=text;
        }
      })
      this.setState({items:items})
  }
  render(){
    return (
      <hoc>
        <h1>to-do<span>List</span></h1>
        <h4>Welcome User</h4>
        
        <div className='App'>
         
            <form id='to-do-form' onSubmit={this.addItem}>
            <input type="text" placeholder="Enter Text" 
            value={this.state.currentItem.text}
            onChange={this.handleInput}
            />
            <button type='submit'>OK</button>
          </form>
        
        <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}></ListItems>
       
      </div>
      </hoc>
      
      
    );
  }
 
}

export default App;
