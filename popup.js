function work(){
    var name = $('#name').val();
    var col1 = $('#color1').val();
    var col2 = $('#color2').val();
    chrome.storage.sync.set({'name': name, 'color1': col1,'color2': col2});
    chrome.tabs.update({url:'background.html'});
    
}

document.getElementById('clickme').addEventListener('click',work);