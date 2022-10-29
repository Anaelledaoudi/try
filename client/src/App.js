import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios';

const App=(props)=> {
   const [students,setStudents]=useState('');
   
   useEffect(()=>{
     getStudents();
   })

   const getStudents=async()=>{
    try{
        const result=await axios.get('/student');
    if(result.status===200){
      setStudents(result.data)
      console.log(students);
    }
    }
    catch(e){
      console.log(e.response.data.msg)
    }
   }
   
  return (
    <div className="App">
      <header className="App-header">
         {
          students.map(elm=>{
            return(
              <p>{elm.first_name} {elm.last_name}</p>
            )
          }

          )
         }   
       
       
      </header>
    </div>
  );
}

export default App;
