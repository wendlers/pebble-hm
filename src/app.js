var UI = require('ui');
var ajax = require('ajax');

// Create a Card with title and subtitle
var card = new UI.Card({
  title:'JSON-RPC',
  subtitle:'Fetching...'
});

// Display the Card
card.show();

// Make the request
ajax(
  {
    url: 'http://192.168.1.105/api/homematic.cgi',
    // url: 'http://gurujsonrpc.appspot.com/guru',
    method: 'post',
    type: 'json',
    // data: {"method": "guru.test", "params": ["Stefan"], "id": 123},
    data: {"jsonrpc": "2.0", "method": "system.listMethods", "params": [], "id": 1},
  },
  function(data) {
    // Success!
    console.log('Success: ' + data.result);
    card.subtitle("Response");
    card.body(data.result);
  },
  function(error) {
    // Failure!
    console.log('Failed: ' + error);
  }
);
