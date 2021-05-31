const a = document.createElement('a');
chrome.storage.sync.get(['name','color'],function(data){
    const name = data.name;
    a.innerHTML = name;
    const setcolor = data.color;
    console.log(setcolor);
    a.setAttribute('style',"font-size: 70px; margin: 30px; font-family: cursive; font-weight:bold; color:"+setcolor+";");
    var fullurl = chrome.extension.getURL('/popup.html');
    console.log(fullurl);
    a.setAttribute("href",fullurl);
});


const t = document.getElementsByClassName('L3eUgb');
const tchild = t[0].getElementsByClassName('o3j99 LLD4me yr19Zb LS8OJ');
var elem = tchild[0].getElementsByClassName('k1zIA rSk4se');
for(index = elem.length-1;index>=0;index--){
    elem[index].parentNode.removeChild(elem[index]);
}
tchild[0].appendChild(a);
