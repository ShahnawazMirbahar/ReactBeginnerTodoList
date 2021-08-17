import React,{useState} from 'react';
import './App.css'
import GoalList from './components/GoalList/GoalList';
import NewGoal  from './components/NewGoal/NewGoal';
// // this  is a function. We use functional based components in React 
// const App = () => {
//   return <h1 title="this Works!">A<span> React</span> App!</h1>; //this is jsx which is similar to in js like "React.createElement('h1',{title:'this works!'},'A React App')"
// };

// class App extends React.Component{
//   render(){
//     return <h1 title='This Works'>HI,This is React.Js</h1>; //(this is basically the same thing but with a Javascript class)
//   }
// }
const App = () =>{
  const [courseGoals, setCourseGoals]=useState([{id:'cg1',text:'Complete The Course'},
  {id:'cg2',text:'Learn MERN Properly'},
  {id:'cg3',text:'Use this in CV'},]);
 
  const addNewGoalHandler = (newGoal)=>{
// courseGoals.push(newGoal);
// console.log(courseGoals);
//setCourseGoals(courseGoals.concat(newGoal));
setCourseGoals((prevCourseGoals) =>
  prevCourseGoals.concat(newGoal)
);
  };
  return (
  <div className='course-goals'>
    <h2>Course Goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler}/>
    <GoalList goals={courseGoals}/>
  </div>
  );
};
export default App;
