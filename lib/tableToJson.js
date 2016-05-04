// data source: http://screensiz.es/phone
function tableToJson(table) {
    var data = [];
    
    // first row needs to be headers
    var headers = [];
    for (var i=0; i<table.rows[0].cells.length; i++) {
        if (i==0) {
            headers.push('device name');
        } else {
            headers.push(table.rows[0].cells[i].getAttribute('name').toLowerCase().trim());
        
        }
    }
    
    // go through cells
    for (var i=1; i<table.rows.length; i++) {
        
        var tableRow = table.rows[i];
        var rowData = {};
        
        var deviceType = tableRow.className.match(/phone|tablet|monitor/)[0];
        
        for (var j=0; j<tableRow.cells.length; j++) {
            rowData['device type'] = deviceType;
            rowData[ headers[j] ] = tableRow.cells[j].innerText.trim();
        }
        
        data.push(rowData);
    }       
    
    return data;
}