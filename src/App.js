import React, { Component } from 'react';

import './App.css';
import ToDoItem from "./component/ToDoItem"
import ToDoItemData from "./component/ToDoItemsData"
import VoteTable from './component/voterFeature';
class App extends Component {
  
  constructor(){
    super();
    this.state={
      isLoggedIn:true,
      toDoData:ToDoItemData,
      fetchingData:true,
      votes:[
        {id: 1, name:"React", votesAmount:0},{id: 2,name:"Angular", votesAmount:0},{id: 3,name:"Vue", votesAmount:0},{id: 4,name:"Ember", votesAmount:0}
      ]
    }
  }
  // Voting Function
  Voted=(ItemId)=>{
    this.setState((state)=>{
      return state.votes.map((item)=>{
        if (item.id===ItemId) {
          item.votesAmount=item.votesAmount+1;
        }
        return item;
      })
    })
  }

  // Login and Out Function
  LogginInOutFunc=()=>{
    if(this.state.isLoggedIn===false){
      this.setState({ isLoggedIn:true })
    }else{
      this.setState({ isLoggedIn:false })
    }
  }

  //Handle the Check For the To Do Item
  handleCheck=(id)=>{
    console.log(id)
    this.setState((state)=>{
    let updateJobs=state.toDoData.map(job=>{
      if (job.id===id) {
        job.completed=!job.completed
      }
      return job
    })
    return {
      state:updateJobs
    }
    })
  }

  // Function that pretend to be retrieving data
  componentDidMount(){
    setTimeout(()=>{
      this.setState({fetchingData:false})
    },2000)
  }

  render() {
    

    let toDoArray=ToDoItemData
                  .filter((data)=>{return data.day!=="";})
                  .map((data)=><ToDoItem key={data.id} job={data} checkJob={this.handleCheck}/>)

    return (
      <div className="App">
      
        <nav>
          <h5>Praticing React</h5>
        </nav>
        <div className="buttonLog">
          <button style={{backgroundColor: this.state.isLoggedIn && "red"}} onClick={this.LogginInOutFunc}>Log {this.state.isLoggedIn ? "Out":"In"} </button>
        </div>
        <small>Aaron Logged {this.state.isLoggedIn ?"In":"Out"}</small>
        <h1>Hello, {this.props.name}</h1>
        {this.state.fetchingData ? <h5 className="fetchingJob">Fetching your Jobs...</h5>: toDoArray}
        
        <VoteTable VoteItems={this.state.votes} VotedAbility={this.Voted}/>
      </div>
    );
  }
}

export default App;
