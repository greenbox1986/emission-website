import React from 'react'


const Main = () => {
    return (
        <div>
           	<div style={{"margin":"0 40px"}}>
		        {/*<h3 style={{"marginTop":"40px","marginBottom":"-50px"}}>Mining emission compilation</h3>*/}
                
		        <table id="table" data-toggle="table" data-search="true" data-url="https://blswlgmowg.execute-api.us-east-1.amazonaws.com/Production/emission"  data-pagination="true" data-sort-name="Unique_ID"
  data-sort-order="asc" data-search-highlight="true" data-filter-control="true" data-detail-formatter="detailFormatter">
			        <thead>
			        	<tr>
                            <th data-field="Unique_ID" data-sortable="true">ID</th>
                            <th data-field="LEVEL1" data-sortable="true">LEVEL1</th>
                            <th data-field="LEVEL2" data-sortable="true" data-filter-control="select">LEVEL2</th>
                            <th data-field="LEVEL3" data-sortable="true" data-filter-control="select">LEVEL3</th>
                            <th data-field="LEVEL4" data-sortable="true" data-filter-control="select">LEVEL4</th>
                            <th data-field="POLLUTANT" data-sortable="true">POLLUTANT</th>
                            <th data-field="VALUE" data-sortable="true">VALUE</th>
                            <th data-field="VALUE_UNIT" data-sortable="true">VALUE_UNIT</th>
                            <th data-field="FACTOR" data-sortable="true">FACTOR</th>
                            <th data-field="FACTOR_UNIT" data-sortable="true">FACTOR_UNIT</th>
                            <th data-field="MEASURE" data-sortable="true">MEASURE</th>
                            <th data-field="MATERIAL" data-sortable="true">MATERIAL</th>
                            <th data-field="ACTION" data-sortable="true">ACTION</th>
                            <th data-field="Source" data-sortable="true">Source</th>
                        </tr>
                    </thead>
                </table>
	        </div>
        </div>
    )
}

export default Main
