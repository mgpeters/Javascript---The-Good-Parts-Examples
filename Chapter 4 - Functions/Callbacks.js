// Functions make it easier to deal with discontinuous events.

request = prepare_the_request();
response = send_request_synchronously(request);
display(response);

/* The above example will leave the client in a frozen state.
A better approach is to make an asynchronous request, providing a callback function
that will be invoked when the server's response is received. An asynchronous
function is returned immediatly, so the client isn't blocked. */

request = prepare_the_request();
send_request_asynchronously(request, function (response){
	display(response);
});