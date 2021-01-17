import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  
  useLocation,useHistory
} from "react-router-dom";
import {useState,useEffect} from 'react';
import './App.css';





function App() {

  const [names , setNames]= useState({name1:" ",name2:" "});
  
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={Child}> <Child names={names} setNames={setNames}></Child></Route>
      <Route path="/NewPage" component={NewPage}></Route>
    </Switch>
    </Router>
  );
}



const Child = ({setNames,names}) => {
  const query = useQuery();
   const aname = query.get("a");
   const bname = query.get("b");
   useEffect(()=>{
          
    setNames({name1:aname,name2:bname});
      
    },[]);
  const history = useHistory();
          console.log(history);
        
      const ClickHandle = () =>{       
        console.log("clicked")
        history.push({pathname:'/NewPage',
        state:names});
        return(
          <div>
            
            </div>
        )
      }
  return (
    <div>
      <div className="textcenter">

      <h1 >{aname}</h1>
      </div>
      <div className="textcenter">

      <h1 > {bname}</h1>
      </div>
      <div className="textcenter">
      {!aname&&!bname?<button onClick={ClickHandle} className="btn ">Enter Query Parameters</button>:""}
      {aname&&!bname?<button onClick={ClickHandle} className="btn ">Enter Second Query Parameter</button>:""}
      {aname&&bname?<button onClick={ClickHandle} className="btn ">Go Forward</button>:""}
      </div>
    </div>
  )
}



 const useQuery = () => {
  return new URLSearchParams(useLocation().search);

}
const NewPage = (props) => {
  const {name1}=(props.location.state);
  const {name2}=(props.location.state);
  return(<div>
    <div className="textcenter">

    <h1 >{name1}</h1>
    </div>
    <div className="textcenter">

    <h1 >{name2}</h1>
    </div>
    
  </div>)
}
export default App









