// import React, { useState } from "react";
// import Getlist from "./data";

//import Getapidata from "./apidata";
import Calculator from "./calculator";
import "./App.scss";



// const App = () => {
//   const [name, SetName] = useState([
//     { id: 1, country: "Germany", population: 83623528 },
//     { id: 2, country: "Austria", population: 8975552 },
//     { id: 3, country: "Switzerland", population: 8616571 },
//   ]);

//   const deletename = (id) => {
//     const newname = name.filter((ns) => ns.id !== id);
//     SetName(newname);
//   };

//   return (
//     <div>
//       <Getlist name={name} deletename={deletename} />
//     </div>
//   );
// };

// export default App;

// const Getapidata = () => {
//   const [data, getdata] = useState (null)

//   const Api_data = () => {
//     data = fetch('https://jsonplaceholder.typicode.com/posts');
//     data.json()
//     getdata(data)
//   }
//   return (<div>{Api_data}</div>)
// }

// export default Getapidata;


// function Example() {
//   return (
//     <section class="ftco-section">
// 		<div class="container">
// 			<div class="row justify-content-center">
// 				<div class="col-md-6 text-center mb-5">
// 					<h2 class="heading-section">Login #04</h2>
// 				</div>
// 			</div>
// 			<div class="row justify-content-center">
// 				<div class="col-md-12 col-lg-10">
// 					<div class="wrap d-md-flex">
// 			      </div>
// 						<div class="login-wrap p-4 p-md-5">
// 			      	<div class="d-flex">
// 			      		<div class="w-100">
// 			      			<h3 class="mb-4">Sign In</h3>
// 			      		</div>
// 								<div class="w-100">
// 									<p class="social-media d-flex justify-content-end">
// 										<a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a>
// 										<a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a>
// 									</p>
// 								</div>
// 			      	</div>
// 							<form action="#" class="signin-form">
// 			      		<div class="form-group mb-3">
// 			      			<label class="label" for="name">Username</label>
// 			      			<input type="text" class="form-control" placeholder="Username" required/>
// 			      		</div>
// 		            <div class="form-group mb-3">
// 		            	<label class="label" for="password">Password</label>
// 		              <input type="password" class="form-control" placeholder="Password" required/>
// 		            </div>
// 		            <div class="form-group">
// 		            	<button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign In</button>
// 		            </div>
// 		          </form>
// 		        </div>
// 		      </div>
// 				</div>
// 			</div>
// 		</div>
//     </section>  
//   );
// }

// export default Example;

const App = () => {
	return ( 
		<Calculator/>
	  );
}
 
export default App;

