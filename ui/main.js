//Counter code
var button = document.getElementById('counter');

button.onclick = function () {
     
     //Create a request object
     var request = new XMLHttpRequest();
     
     //Capture the response and store it in a variable
     request.onreadystatechange = function() {
         if ( request.readyState === XMLHttpRequest.DONE) {
             //Take some action
             if (request.status === 200) {
                 var counter = request.responseText;
                 var span = document.getElementById('count');
                 span.innerHTML = counter.toString();
            }
        }
     
    };
    
    //Make the request
    request.open('GET', 'http://bhavanacb97.imad.hasura-app.io/counter', true);
    request.send(null);
};

//Submit name
var nameInput = document.getElementById('name');

var names = [];
var submitBtn = document.getElementById('submit_btn');
submitBtn.onclick = function() {
    //Make a request to the server and send the name
    var name = nameInput.value;
    names.push(name);
   // cons
   alert(names);
    //Capture a list of names and render it as a list
   // var names = ['name1','name2','name3'];
    var list = '';
    for(var i=0; i<names.length; i++) {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};
