import "./App.css";
// import Resume from "./components/Resume";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateResume from "./pages/CreateResume";
import VIewResume from "./pages/VIewResume";

export function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/create' element={<CreateResume />} />
					{/* <Route exact path='/view' element={<VIewResume />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
