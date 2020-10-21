import React from "react";
import "./App.scss";
import ScoringContainer from "./components/ScoringContainer/ScoringContainer";

function App() {
	return (
		<div className="App">
			<div className="header-section">
				<h2>Phase 10</h2>
				<div className="card-section">
					<div className="card" id="red-card"></div>
					<div className="card" id="blue-card"></div>
					<div className="card" id="yellow-card"></div>
					<div className="card" id="green-card"></div>
				</div>
			</div>
			<div id="phases">
				<h3>Phases:</h3>
				<ol>
					<li>2 sets of 3</li>
					<li>1 set of 3 + 1 run of 4</li>
					<li>1 set of 4 + 1 run of 4</li>
					<li>1 run of 7</li>
					<li>1 run of 8</li>
					<li>1 run of 9</li>
					<li>2 sets of 4</li>
					<li>7 cards of one color</li>
					<li>1 set of 5 + 1 set of 2</li>
					<li>1 set of 5 + 1 set of 3</li>
				</ol>
			</div>
			<ScoringContainer />
		</div>
	);
}

export default App;
