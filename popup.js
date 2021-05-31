function work(){
    var name = $('#name').val();
    var col = $('#color').val();
    chrome.storage.sync.set({'name': name, 'color': col});
    $('#greet').text('Hey, '+name);
    chrome.tabs.update({url:'background.html'});
    
}

document.getElementById('clickme').addEventListener('click',work);