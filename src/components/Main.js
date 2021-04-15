import React from 'react'


const Main = () => {
    return (
        <div>
           	<div className="" style={{"margin":"0 40px"}}>
		        <h3 style={{"marginTop":"40px","marginBottom":"-50px"}}>Mining emission compilation</h3>
		        <table id="table" data-toggle="table" data-search="true" data-url="https://blswlgmowg.execute-api.us-east-1.amazonaws.com/Production/emission"  data-pagination="true" data-sort-name="Unique_ID"
  data-sort-order="asc">
			        <thead>
			        	<tr>
                            <th data-field="Unique_ID" data-sortable="true">ID</th>
                            <th data-field="LEVEL1" data-sortable="true">LEVEL1</th>
                            <th data-field="LEVEL2" data-sortable="true">LEVEL2</th>
                            <th data-field="LEVEL4" data-sortable="true">LEVEL4</th>
                            <th data-field="POLLUTANTID" data-sortable="true">POLLUTANTID</th>
                        </tr>
                    </thead>
                </table>
	        </div>
        </div>
    )
}

export default Main
