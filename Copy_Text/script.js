$('#copy-btn').on('click', function(){
    let text = $('#text');
    text.select();
    // text.setSelectionRange(0, 1000);
    navigator.clipboard.writeText(text.val());
});