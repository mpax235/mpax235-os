/*
    BSD 2-Clause License

    Copyright (c) 2024, mpax235

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:

    1. Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.

    2. Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
    SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
    CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
    OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

let windowCount = 0;

function createWindow(title, src) {
    windowCount++;

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

    const appTitle = document.createElement("span");
    appTitle.className = "OSTitle";
    appTitle.textContent = title;

    const closeBtn = document.createElement("span");
    closeBtn.className = "close-btn";
    closeBtn.textContent = "X";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "12px";
    closeBtn.onclick = () => {
        document.body.removeChild(appWindow);
        windowCount--;
    };

    topBar.appendChild(appTitle);
    topBar.appendChild(closeBtn);

    const iframe = document.createElement("iframe");
    iframe.id = `appOSWindowPage-${windowCount}`;
    iframe.src = src;
    iframe.style.width = "100%";
    iframe.style.height = "calc(100% - 30px)";
    iframe.style.border = "none";
    iframe.style.backgroundColor = "black";

    appWindow.appendChild(topBar);
    appWindow.appendChild(iframe);

    document.body.appendChild(appWindow);

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

function developers() {
    createWindow("Developers", "../programs/developers/index.html");
}

function mpax235store() {
    createWindow("Mpax235 Store", "../programs/store/games.html");
}