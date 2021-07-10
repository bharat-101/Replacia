const a = document.createElement('a');
chrome.storage.sync.get(['name','color1','color2'],function(data){
    const name = data.name;
    a.innerHTML = name;
    const setstartcolor = data.color1;
    const setendcolor = data.color2;
    console.log(setstartcolor);
    a.setAttribute('style',"font-size: 70px; margin: 30px; font-family: cursive; font-weight:bold; background:" +setstartcolor+";background: -webkit-linear-gradient(to right, "+setstartcolor+" 0%, "+setendcolor+" 100%);background: -moz-linear-gradient(to right, "+setstartcolor+" 0%, "+setendcolor+" 100%);background: linear-gradient(to right, "+setstartcolor+" 0%, "+setendcolor+" 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;");
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
