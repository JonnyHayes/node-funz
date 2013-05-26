/* Author: YOUR NAME HERE
*/

$(document).ready(function() {   
 
var socket = io.connect('http://127.0.0.1:8081/');

  $('#sender').bind('click', function() {
   socket.emit('message', 'I AM A CUNT Message Sent on ' + new Date());     
  });

  socket.on('server_message', function(data){
   $('#receiver').append('<li>' + data + '</li>');  
  });
});