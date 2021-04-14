import React from 'react'
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{"height":"10vh"}}>
		<a className="navbar-brand" href="#">Emission Website</a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarText">
			<ul className="navbar-nav mr-auto">
				<li className="nav-item active">
					<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">About us</a>
				</li>
			</ul>
			<span className="navbar-text">
				Navbar text with an inline element
			</span>
		</div>
	</nav>
	<div className="" style={{"height":"80vh", "margin":"0 40px"}}>
		<h3>Mining_emission_compilation</h3>
		<table id="table" data-toggle="table" data-flat="true" data-search="true" data-url="json/Mining_emission_compilation.json" data-height="500" data-pagination="false">
			<thead>
				<tr>
					<th data-field="SCC" data-sortable="true">SCC</th>
					<th data-field="github.count.stargazers" data-sortable="true">Stargazers</th>
					<th data-field="github.count.forks" data-sortable="true">Forks</th>
					<th data-field="github.description" data-sortable="true">Description</th>
				</tr>
			</thead>
		</table>
	</div>
	<div className="card-footer text-muted" style={{"height":"10vh","text-align": "center"}}>
		copyright
	</div>

      </div>
    );
  }
}

export default App;
