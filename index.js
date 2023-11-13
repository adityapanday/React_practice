// const heading = document.createElement("h2");
//  heading.textContent = "hello World"
//  heading.className = "header"
//  document.getElementById("root").append(heading);

// const value = document.createElement("h1");
// value.textContent = "practice"
// value.className = "demo"
// document.getElementById("root").append(value);

// const aditya = document.createElement("h2");
// aditya.textContent = "hey"
// document.getElementById("root").append(aditya);
// these were example for creating element in javaScript


// via javaScript using React 
// const reactHead = React.createElement("h1" , {className:"heading" , id:"value"} , "Adiya");
// console.log(reactHead);
// ReactDOM.createRoot(document.getElementById("root")).render(reactHead);

//via Bable



// const value = <h2>Hello JSX from External File</h2>;

// this is how to add multiple element 

// const value= <div> 
// <h1>hello this is first</h1>
// <h1>this is another in as child in root element div</h1>

//this is also not a good practice as isme ek ro div banta hai or attach ho jata hai min div jo html ma hia 
// so to get rid of this we use React.Fragement git rid of Extra Wrapper Class



//  </div>

// const value = <React.Fragment>
// <h1>hello this is first</h1>
// <h1>this is another in as child in root element div</h1>


// </React.Fragment>

// OR **** Syntatic sugar Form use kar sakte hai


// const value = <>
//     <h1>About React</h1>
//     <ul>
//         <li>React is very good</li>
//         <li> single page </li>
//         <li> dynamic </li>
//     </ul>


// </>

// ReactDOM.createRoot(document.getElementById("root")).render(value);

//concept of  react component

// function App(){
//     return (
//         <>
//            <h1>About React</h1>
//              <ul>
//                  <li>React is very good</li>
//                  <li> single page </li>
//                  <li> dynamic </li>
//              </ul>


//          </>
//     );

// }


// Arrow function adva it dont require retrun statement 

// function Name(){
// return ( 
//     <>
//         <h1> hey this is function component </h1>
//     </>
// )

// }


// const App = () => (
//     <>
//         <h1>About React</h1>
//         <ul>
//             <li>React is very good</li>
//             <li> single page </li>
//             <li> dynamic </li>
//         </ul>
//         <Name/>
//     </>
// )

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);



const val = ()=>(
    <>
        <h1>Hello </h1>
    </>
)

function Nam(){
    var value = "world"
    return(
       <h1>hello {value}</h1>
    )
}

function App(){
    return (
        <>
            <h1>Getting Started with Jsx</h1>
            <Nam/>
            <val/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

