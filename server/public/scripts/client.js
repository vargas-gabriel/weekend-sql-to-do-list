$(document).ready(onReady);

function createListItem(){
    console.log('in createListItem');
    //get user input and put into object 
    if ($('#input1').val() === '') {
       alert('please enter a task');
       return false;
    }
    else {
    const objectToSend = {
        name: $('#input1').val(),
        priority: $('#priorityIn').val(),
        complete: false
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
    //clear input fields
   $('#input1').val('');
   $('#priorityIn').val('');
    }//end else
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
                    let appendString = `<li`;
                if (response[i].complete === true ){
                appendString += ` class=complete`;
                }
                appendString += `>
                ${response[i].name} - priority:
                ${response[i].priority}
                <button class="completeCheck" data-id = "${response[i].id}">Complete</button>
                <button class="deleteBtn" data-id = "${response[i].id}">Delete</button>
                </li>`;
                    //append DOM with tasks
                    el.append(appendString);
                }//end for
        }).catch(function(err){
            console.log(err);
            alert('oops')
    })//end Ajax
}//end getTasks

function onReady() {
    getTasks();
$('#submitBtn').on('click', createListItem);
//click handler for js created buttons
$('#taskOut').on('click','.deleteBtn', deleteButton);
$('#taskOut').on('click', '.completeCheck', markChecked );
$('#darkMode').on('click', toggleDarkMode)
}
function toggleDarkMode(){
    console.log('in toggleDarkMode');
    let webPageBody = document.body;
    webPageBody.classList.toggle("dark-mode");
}

function deleteButton(){
    const myId = $(this).data('id');
    console.log('in deleteButton', myId);
    $.ajax({
        method: 'DELETE',
        url: '/tasks/' + myId

    }).then(function(response){
        console.log('back from DELETE:', response);
        getTasks();
    }).catch(function(err) {
        console.log(err);
        alert('unable to delete');
    })
}

function markChecked(){
    const myId = $(this).data('id');
    console.log('in markChecked:', myId);
    $.ajax({
        method: 'PUT',
        url: '/tasks/' + myId
    }).then(function(response){
        console.log('back from PUT:', response);
        getTasks();
    }).catch(function(err) {
        console.log(err);
        alert('unable to PUT');
    })//end ajax
}