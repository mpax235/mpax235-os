// JavaScript to handle multiple OS windows
let windowCount = 0; // Keeps track of open windows

function createWindow(title, src) {
    windowCount++;

    // Create the main window div
    const appWindow = document.createElement("div");
    appWindow.id = `appWindow-${windowCount}`;
    appWindow.className = "appWindow";
    appWindow.style.borderRadius = "12px";
    appWindow.style.position = "absolute";
    appWindow.style.top = `${100 + windowCount * 30}px`;
    appWindow.style.left = `${100 + windowCount * 30}px`;
    appWindow.style.width = "600px";
    appWindow.style.height = "400px";
    appWindow.style.border = "none";
    appWindow.style.zIndex = 500 + windowCount;
    appWindow.style.resize = "bot h";
    appWindow.style.overflow = "hidden";

    // Create the top bar
    const topBar = document.createElement("div");
    topBar.className = "topBar";
    topBar.style.background = "#00454562";
    topBar.style.backdropFilter = "blur(7px)";
    topBar.style.color = "#00ffff";
    topBar.style.padding = "6px 9px";
    topBar.style.fontFamily = "Montserrat, sans-serif";
    topBar.style.cursor = "move";
    topBar.style.display = "flex";
    topBar.style.fontSize = "12px";
    topBar.style.justifyContent = "space-between";

    // Title
    const appTitle = document.createElement("span");
    appTitle.className = "OSTitle";
    appTitle.textContent = title;

    // Close button
    const closeBtn = document.createElement("span");
    closeBtn.className = "close-btn";
    closeBtn.textContent = "X";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "12px";
    closeBtn.onclick = () => {
        document.body.removeChild(appWindow);
        windowCount--;
    };

    // Append title and close button to top bar
    topBar.appendChild(appTitle);
    topBar.appendChild(closeBtn);

    // Create iframe
    const iframe = document.createElement("iframe");
    iframe.id = `appOSWindowPage-${windowCount}`;
    iframe.src = src;
    iframe.style.width = "100%";
    iframe.style.height = "calc(100% - 30px)";
    iframe.style.border = "none";
    iframe.style.backgroundColor = "black";

    // Append top bar and iframe to main window
    appWindow.appendChild(topBar);
    appWindow.appendChild(iframe);

    // Append the app window to the body
    document.body.appendChild(appWindow);

    // Make the window draggable
    makeDraggable(appWindow, topBar);
}

function makeDraggable(element, handle) {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    handle.onmousedown = (e) => {
        isDragging = true;
        offsetX = e.clientX - element.offsetLeft;
        offsetY = e.clientY - element.offsetTop;

        document.onmousemove = (e) => {
            if (isDragging) {
                element.style.left = `${e.clientX - offsetX}px`;
                element.style.top = `${e.clientY - offsetY}px`;
            }
        };

        document.onmouseup = () => {
            isDragging = false;
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
}

// Functions to open specific windows
function developers() {
    createWindow("Developers", "../programs/developers/index.html");
}

function mpax235store() {
    createWindow("Mpax235 Store", "../programs/store/games.html");
}