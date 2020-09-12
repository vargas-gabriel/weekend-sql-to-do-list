$(document).ready(onReady);

function onReady() {
$('#submitBtn').on('click', createListItem);
}
function createListItem(){
    console.log('in createListItem');
}
