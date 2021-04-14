import React from 'react'


const Main = () => {
    return (
        <div>
           	<div className="" style={{"height":"80vh", "margin":"0 40px"}}>
		        <h3>Mining emission compilation</h3>
		        <table id="table" data-toggle="table" data-flat="true" data-search="true" data-url="https://blswlgmowg.execute-api.us-east-1.amazonaws.com/Production/emission" data-height="500" data-pagination="false">
			        <thead>
			        	<tr>
                            <th data-field="SCC" data-sortable="true">SCC</th>
                            <th data-field="rows.SCC" data-sortable="true">Stargazers</th>
                            <th data-field="github.count.forks" data-sortable="true">Forks</th>
                            <th data-field="github.description" data-sortable="true">Description</th>
                        </tr>
                    </thead>
                </table>
	        </div>
        </div>
    )
}

export default Main
