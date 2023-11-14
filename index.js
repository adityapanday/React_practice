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




// V imp part


// function Val(){
//     var a = 50
//     return a;
// }

// function Nam(){
//     var value = "world"
//     var age = "21"
//     return(
//         <>
            
//        <h1>hello {value}</h1>
//        <h2>you age is { age}</h2>
//         </>
//     )
// }


// const Car = ()=>(
    
//         <>
//         <h1>List of Cars</h1>
//            <ul>
//             <li>BMW</li>
//             <li>Audi</li>
//             <li>TATA</li>
//             <li>Kia</li>
//            </ul>
//         </>
    
// )

// function App(){
//     let Array = [1,2,3,4,5];
//     var Object = {
//         Name : "Aditya",
//         age : '21'
//     }
//     return (
//         <>
//             <h1>Getting Started with Jsx</h1>
//             <Nam/>
//             <val/>
//             <p>this is example to return fn with dii form  : {Val()}</p>
//                 <p>Normal Way to add Array :  {Array}</p>
//                 <p> Another way to add via map in 1 by 1 manner {Array.map((i)=><h2>{Array[i-1]}</h2>)}</p>
//           <p>  This is Example of Object in jsx : {Object.Name}  </p>


//          <Car/>





//         </>
//     )
// }



function Studen() {
    const Student = [
      { Name: "Aditya", Age: 21, Marks: 89 },
      { Name: "Anjali", Age: 21, Marks: 92 },
      { Name: "XYZ", Age: 32, Marks: 88 },
    ];
  
    return (
      <>
        <h1>Student Data Table</h1>
        <table>
          <tr>
            <td>Student Name</td>
            <td>Student Age</td>
            <td>Student Marks</td>
          </tr>
  
          {Student.map((student, index) => (
            <tr key={index}>
              <td>{student.Name}</td>
              <td>{student.Age}</td>
              <td>{student.Marks}</td>
            </tr>
          ))}
        </table>
      </>
    );
  }

  const Car = () => {
    const itemsSold = [
      { id: 1, name: "iPhone 14", price: 1200, qty: 22 },
      { id: 2, name: "iPad Pro", price: 800, qty: 18 },
      { id: 3, name: "Macbook Air", price: 1500, qty: 7 },
      { id: 4, name: "Samsung S23", price: 1100, qty: 16 },
      { id: 5, name: "Dell Inspiron 5590", price: 1200, qty: 5 }
    ];

    return (
      <>
        <h1>Record of sold items</h1>
        <table border="1px">
         <thead>
           <tr>
           <th>id</th>
           <th>name</th>
           <th>Selling price</th>
           <th>Quantity</th>
           </tr>
         </thead>
         <tbody>
           {itemsSold.map((item, id) => (
             <tr key={id}>
           <td>{item.id}</td>
           <td>{item.name}</td>
           <td>{item.price}</td>
           <td>{item.qty}</td>
           </tr>
           ))}
         </tbody>
        </table>
      </>
    );
  };

  let lofedIn = true;

  function Display(){
      let konH = false;
      if(konH){
          return  <Car/>
      }
      return <Studen/>
  }
  function App(){
   
    return(
         <>
        {/* this is imp condtion ? truthy:falsy  altrnative of if else  */}
        <h1>hello {lofedIn?"Aditya":"User"}</h1>
            <Display/>
        </>
    )
  }

  
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
  

