$(document).ready(onReady);
function createListItem(){
    console.log('in createListItem');
    //get user input and put into object 
    const objectToSend = {
        name: $('#input1').val(),
        priority: $('#priorityIn').val(),
        complete: "no"
    }
    $.ajax({
        method: 'POST',
        url: '/tasks',
        data: objectToSend
    }).then(function(response){
        //send to server via post  
        console.log('back from POST with:', response); 
        //update DOM
        getTasks();
    }).catch(function(err){
        console.log(err);
        alert('did not happen');
    })
   
}//end creatListItem

function getTasks(){
console.log('in getTasks');
//make get ajax call
    $.ajax({
    method: 'GET',
    url: '/tasks'
        }).then(function(response){
             console.log('back from GET with:',response);
                //empty output el
                let el = $('#taskOut');
                el.empty();
                //loop through response 
                for (let i = 0; i < response.length; i++) {
                    //append DOM with tasks
                    el.append(`<li>
                    ${response[i].name} - priority:
                    ${response[i].priority}
                    <input type="checkbox" id="complete" name="complete" value="completeCheckbox" data-id = "${response[i].id}>
                    <label for="complete>Mark Complete</label><br>
                    <button id="delete" data-id = "${response[i].id}">Delete</button>
                    </li>`)
                }//end for
        }).catch(function(err){
            console.log(err);
            alert('oops')
    })//end Ajax

}//end getTasks

function onReady() {
    getTasks();
$('#submitBtn').on('click', createListItem);
}