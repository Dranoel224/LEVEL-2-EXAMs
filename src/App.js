import React, {useEffect, useState} from "react";
import "./App.css";
import SignUpForm from "./component/auth/signup";
import Input from "./component/ui-elements/input";
import Button from "./component/ui-elements/button";
//import Profile from "./component/ui-elements/profile";
//import Wrapper from "./components/Wrapper";
//import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
//import Button from "./components/Button";
import userLogIn from "./component/pages/userLogIn";
import userSignUp from "./component/pages/userSignUp";
import navbar from "./component/pages/navbar";
import Navbar from "./component/pages/navbar";
//import shoppingBasket from "./component/pages/shoppingBasket";




// function App(){
  
//   let [counter, setCounter, decCounter] = useState(0);

//   useEffect(() =>{
//   const interval = setInterval(() => {
//     if(counter >= 0){
//       setCounter((counter) => counter+1)
//     }else if(counter = 60){
//       decCounter((counter) => counter-5)
//     };
//    }, 1000);
//     console.log("incrementing counter")
//   return () => {
//     clearInterval(interval);
//   };
// }, []);

  /*let [counter, setCounter] = useState(0)
  setInterval((e) => {
    let counter = 0;
    if(counter <= 60){
      setCounter((counter) => counter++);
    };
    console.log("incrementing counter")
  }, 1000)
  

//   let decreaseCounter = () => {
//     //useState(60);
//     counter = 60?
//       setCounter(counter => counter-5):"";
//     ;
//     console.log("decrementing counter")
//   }

//   return (<div className="countReturn">
//     <h1>COUNTER</h1>
//     <h3>{counter}</h3>
    {/* <button className="incBtn" onClick={increaseCounter}>Increment Btn</button> }*/
//     <button className="decCounter" onClick={decreaseCounter}>Decrement Btn</button>
//     </div>)
// }
// export default App;
// */


/*const App = () => {
  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        {
          btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => {
                  console.log(`${btn} clicked!`);
                }}
              />
            );
          })
        }
      </ButtonBox>
    </Wrapper>
  );*/
//}
//export default App;




  
/*
  setInterval(() => {
  let counter = 0;
  console.log("incrementing")
  if(counter <= 50){
    counter++;
  };
}, 1000);

let counter = 50;
if(counter >= 0){
  counter--;
};
};

return (
  <div>
  <h1>COUNTER</h1>
  <h3>{counter}</h3>
  <button className="incBtn" onClick={increaseCounter}>Increment Btn</button>
  <button className="decBtn" onClick={decreaseCounter}>Decrement Btn</button>
  </div>
)*/



  /*const increm =()=>{
    for(let i =0; i<=50; i++){
      {
        document.getElementById('root').innerHTML = i;
      }
    }
  };

  const reversBtn = () =>{
    for(let i = 0; i <= 50; i--){
        document.getElementById('root').innerHTML = i;
      };
};
  return (
    <button className="reversBtn" onClick={reversBtn}>Reverse Btn</button>
  )*/





/*import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const App = () => {
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        {
          btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => {
                  console.log(`${btn} clicked!`);
                }}
              />
            );
          })
        }
      </ButtonBox>
    </Wrapper>
  );
};
*/




/*import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

const App = () => {
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        <Button
          className=""
          value="0"
          onClick={() => {
            console.log("Button clicked!");
          }}
        />
      </ButtonBox>
    </Wrapper>
  );
};
export default App;
*/

/*
import './App.css';
import SignUpForm from './component/auth/signup';

function App() {

  return (<div className='container'>
    <SignUpForm/>
    
  </div>)
}
export default App;
*/




  function App(){
  //return a page design
  return (<div className='container'>
   <div>{<Navbar/>}</div>
    <form className='form-container'>
      <Input type="text" placeholder='username' />
      <Input type="password" placeholder='password' />
      <Input type="password" placeholder='confirm-password' />

      <div className="btn-container">
      <Button name="Back" classAttrib="btn back-btn" />
      <Button name="Submit" classAttrib="btn submit-btn" />
      </div>

      {/* <Button name="Cross" classAttrib="btn to-next" /> */}

    </form>
  </div>)
  }
  export default App();
  





  /*function App() {
    /* return (
       <div className="App">
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <p>
             Edit <code>src/App.js</code> and save to reload.
           </p>
           <a
             className="App-link"
             href="https://reactjs.org"
             target="_blank"
             rel="noopener noreferrer"
           >
             Learn React
           </a>
         </header>
       </div>
     );*/
  /*const h1 = <div>
    <h1>Good Morning</h1>
    <h2>Good afternoon</h2>
    <h3>Good Evening</h3>
    <h4>Good Night</h4>
    </div>;*/

  /*return  (<div className="prop"> 
  <h1>Good Morning</h1>
  <h2>Good afternoon</h2>
  <h3>Good Evening</h3>
  <h4>Good Night</h4>
  </div>);*/
  //   const isPresent = false;
  // const applyClass = isPresent? "prop": " ";
  // return  (<div className={applyClass}> 
  // <h1>Good Morning</h1>
  //   <h2>Good afternoon</h2>
  //   <h3>Good Evening</h3>
  //   <h4>Good Night</h4>
  //   </div>)

  /*const isPresent = true;
  const myClass = isPresent? "myCard": " ";
  const myName = "MASSA Leonard";
  const myAge = "";
  const myGender = "";
  const myProfession  = "";
  
  return  (<div className={myClass}> 
    <h3>Name: {myName}</h3>
      <h3>Age: {myAge}</h3>
      <h3>Gender: {myGender}</h3>
      <h3>{myProfession} </h3>
      </div>)*/

  // const Books = ["Pathfinder", "Nelkon & Parker", "Good morning Holy spirit", "Tales from GIF"];
  // const urls = ["https://pathfinder.com", "https://nelkon-parker.com", "https://good-morning-holy-spirit.com", "https://tales-from-gif.net"]
  // return (<div>
  //   <ul>
  //     {
  //       Books.map((book, index)=> {
  //         return <li key={index}> {index} - {book}</li>
  //       })
  //     }
  //   </ul>
  // </div>)

  /*return (<div>
    <ul>{
      Books.map((book, index) => {
        return (<div key={index}>
          <li><a href={urls[index]}>{book}</a></li>
        </div>)
      })
    }
    </ul>
  </div>)*/

  /*return (<form className="container">
    <section><b>SIGN UP</b></section>
    <label className="line one">GIVEN NAME</label>
    <input type="text" className="line two" placeholder="e.g Bonaventure"></input>
    <label className="line three">SURNAME</label>
    <input type="text" className="line four" placeholder="e.g NDUKONG"></input>
    <label className="line five">DATE OF BIRTH</label>
    <input type="date" className="line six"></input>
    <label className="line seven">EMAIL</label>
    <input type="email" className="line eight" placeholder="e.g m.dranoel@gmail.com"></input>
    <label className="line nine">ENTER PASSWORD</label>
    <input type="password" className="line ten" placeholder="password"></input>
    <label className="line eleven">ENTER PASSWORD</label>
    <input type="password" className="line twelve" placeholder="password"></input>
    <button type="submit" className="myBut">SUBMIT</button>
    {/* <ul>{
    Books.map((book, index) => {
      return (<form key={index}>
        <li><input href={urls[index]}></input></li>
        <li><input href={urls[index]}></input></li>
      </form>)
    })
  }
  </ul> }
  </form>)*/
/*
export default App;*/


/* 
Books.map(book, index) =>{
  return (<div key={index} >
    <li><a href={urls[index]}>{book}</a></li>
    </div>)
} */