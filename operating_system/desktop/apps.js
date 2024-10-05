function developers() {
    var osWindow = document.getElementById('appWindow');
    var iframe = document.getElementById('appOSWindowPage');
    osWindow.style.display = 'block';
    iframe.src = '../programs/developers/index.html';
    document.getElementById("appTitle").innerHTML = "mpax235 Developers";
}

function mpax235store() {
    var osWindow = document.getElementById('appWindow');
    var iframe = document.getElementById('appOSWindowPage');
    osWindow.style.display = 'block';
    iframe.src = '../programs/store/games.html';
    document.getElementById("appTitle").innerHTML = "mpax235 Store";
}

function closeWindow() {
    var osWindow = document.getElementById('appWindow');
    osWindow.style.display = 'none';
}

dragElement(document.getElementById("appWindow"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var topBar = document.getElementById("topbar");

    topBar.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}