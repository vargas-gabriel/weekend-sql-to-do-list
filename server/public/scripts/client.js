$(document).ready(onReady);

function onReady() {
    getTasks();
$('#submitBtn').on('click', createListItem);
}
function createListItem(){
    console.log('in createListItem');
}
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
                    <button id="complete" data-id = "${response[i].id}">Complete</button> 
                    <button id="delete" data-id = "${response[i].id}">Delete</button>
                    </li>`)
                }//end for
        }).catch(function(err){
            console.log(err);
            alert('oops')
    })//end Ajax

}//end getTasks