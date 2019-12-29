import React from 'react';
import './App.css';
// import Customers from "./containers/Customers";
import TopBar from "./components/TopBar"

function App() {
    return (
        <div>
            <TopBar />
        </div>
    );
}

// function App() {
//     return ( <Router >
//         <div >
//         <nav >
//         <Link to = "/"
//         style = {
//             { margin: 10 }
//         } >Home </Link>

//         <Link to = "/customers"
//         style = {
//             { margin: 10 }
//         } >Customers </Link>

//         <Link to = "/books"
//         style = {
//             { margin: 10 }
//         } >Books </Link>

//         <Link to = "/sellers"
//         style = {
//             { margin: 10 }
//         } >Sellers </Link>

//         <Link to = "/categories"
//         style = {
//             { margin: 10 }
//         } >categories </Link> </nav >

//         {
//             /* A <Switch> looks through its children <Route>s and
//                     renders the first one that matches the current URL. */
//         } <
//         div style = {
//             { height: "calc(100vh - 18px)", overflow: "scroll" }
//         } >
//         <Switch >
//         <Route path = "/customers" >
//         <Customers / >
//         </Route>

//         </Switch> </div> </div> </Router>
//     );
// }

export default App;