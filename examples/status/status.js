var esl = require('modesl');
const playRecording = require('./playRecording');

//open a connection
conn = new esl.Connection('52.25.153.34', 8021, 'ClueCon', function() {
    //send the status api command
    conn.api('status', function(res) {
        //log result body and exit
        console.log(res.getBody());
        playRecording.ivrMenu(conn);
        // process.exit(0);
    });

});