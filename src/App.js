import "./App.css";
import "./App-mid.css";
import FixedIcons from "./components/FixedIcons";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
	return (
		<>
			<div className="container">
				<Navbar />

				<FixedIcons />

				<Routes>
					<Route path="/about" element={<About />}></Route>
					<Route path="/projects" element={<Projects />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
					<Route path="/" element={<Home />}></Route>
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
