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
                //loop through response 
                //append DOM with tasks
        }).catch(function(err){
            console.log(err);
            alert('oops')
    })//end Ajax

}//end getTasks