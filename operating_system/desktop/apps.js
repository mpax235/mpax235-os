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

function createWindow(title, src, appIconImage) {
    windowCount++;

    const appWindow = document.createElement("div");
    appWindow.id = `appWindow-${windowCount}`;
    appWindow.className = "appWindow";
    appWindow.style.position = "absolute";
    appWindow.style.top = `${100 + windowCount * 30}px`;
    appWindow.style.left = `${100 + windowCount * 30}px`;
    appWindow.style.width = "600px";
    appWindow.style.height = "420px";
    appWindow.style.borderRadius = "12px";
    appWindow.style.border = "1px solid rgba(0, 255, 255, 0.18)";
    appWindow.style.zIndex = 500 + windowCount;
    //appWindow.style.resize = "both";
    appWindow.style.overflow = "hidden";

    const topBar = document.createElement("div");
    topBar.className = "topBar";
    topBar.style.background = "#00454562";
    topBar.style.border = "none";
    topBar.style.borderBottomWidth = "0";
    topBar.style.backdropFilter = "blur(7px)";
    topBar.style.color = "#00ffff";
    topBar.style.padding = "6px 9px";
    topBar.style.fontFamily = "Montserrat, sans-serif";
    topBar.style.cursor = "move";
    topBar.style.display = "flex";
    topBar.style.fontSize = "12px";
    topBar.style.justifyContent = "space-between";
    topBar.style.alignItems = "center";

    const appTitle = document.createElement("span");
    appTitle.className = "OSTitle";
    appTitle.textContent = title;

    const appIcon = document.createElement("img");
    appIcon.className = "OSAppIcon";
    appIcon.src = appIconImage;
    appIcon.style.borderRadius = "100%";
    appIcon.style.height = "24px";
    appIcon.style.width = "24px";

    const closeBtn = document.createElement("span");
    closeBtn.className = "close-btn";
    closeBtn.textContent = "X";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "12px";
    closeBtn.style.fontFamily = "Montserrat";
    closeBtn.style.marginRight = "5px";
    closeBtn.style.zIndex = "2000";
    closeBtn.onclick = () => {
        document.body.removeChild(appWindow);
        windowCount--;
    };

    topBar.appendChild(appIcon);
    topBar.appendChild(appTitle);

    const iframe = document.createElement("iframe");
    iframe.id = `appOSWindowPage-${windowCount}`;
    iframe.src = src;
    iframe.style.width = "100%";
    iframe.style.height = "calc(100% - 30px)";
    iframe.style.border = "none";
    iframe.style.backgroundColor = "black";
    iframe.style.borderTopWidth = "0";

    const cover = document.createElement("div");
    cover.style.position = "absolute";
    cover.style.top = "0";
    cover.style.left = "0";
    cover.style.width = "100%";
    cover.style.height = "100%";
    cover.style.display = "none";
    appWindow.appendChild(cover);
    topBar.appendChild(closeBtn);
    closeBtn.style.zIndex = "1000";

    appWindow.appendChild(topBar);
    appWindow.appendChild(iframe);

    document.body.appendChild(appWindow);

    makeDraggable(appWindow, topBar, cover);
    //makeResizable(appWindow);
}

function makeDraggable(element, handle, cover) {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    handle.onmousedown = (e) => {
        isDragging = true;
        offsetX = e.clientX - element.offsetLeft;
        offsetY = e.clientY - element.offsetTop;
        cover.style.display = "block";

        document.onmousemove = (e) => {
            if (isDragging) {
                element.style.left = `${e.clientX - offsetX}px`;
                element.style.top = `${e.clientY - offsetY}px`;
            }
        };

        document.onmouseup = () => {
            isDragging = false;
            cover.style.display = "none";
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };

    document.addEventListener('mouseleave', () => {
        isDragging = false;
        cover.style.display = "none";
        document.onmousemove = null;
        document.onmouseup = null;
    })
}

/*function makeResizable(element) {
    const resizers = document.createElement('div');
    resizers.className = "resizers";
    resizers.innerHTML = `
        <div class="resizer top-left"></div>
        <div class="resizer top-right"></div>
        <div class="resizer bottom-left"></div>
        <div class="resizer bottom-right"></div>
    `;
    element.appendChild(resizers);

    const minimumSize = 100;
    let originalWidth = 0;
    let originalHeight = 0;
    let originalX = 0;
    let originalY = 0;
    let originalMouseX = 0;
    let originalMouseY = 0;

    const resizersList = resizers.querySelectorAll(".resizer");
    resizersList.forEach(resizer => {
        resizer.addEventListener("mousedown", e => {
            e.preventDefault();
            originalWidth = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
            originalHeight = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
            originalX = element.getBoundingClientRect().left;
            originalY = element.getBoundingClientRect().top;
            originalMouseX = e.pageX;
            originalMouseY = e.pageY;

            document.addEventListener("mousemove", resize);
            document.addEventListener("mouseup", stopResize);
        });

        function resize(e) {
            if (resizer.classList.contains("bottom-right")) {
                const width = originalWidth + (e.pageX - originalMouseX);
                const height = originalHeight + (e.pageY - originalMouseY);
                if (width > minimumSize) {
                    element.style.width = width + "px";
                }
                if (height > minimumSize) {
                    element.style.height = height + "px";
                }
            } else if (resizer.classList.contains("bottom-left")) {
                const height = originalHeight + (e.pageY - originalMouseY);
                const width = originalWidth - (e.pageX - originalMouseX);
                if (height > minimumSize) {
                    element.style.height = height + "px";
                }
                if (width > minimumSize) {
                    element.style.width = width + "px";
                    element.style.left = originalX + (e.pageX - originalMouseX) + "px";
                }
            } else if (resizer.classList.contains("top-right")) {
                const width = originalWidth + (e.pageX - originalMouseX);
                const height = originalHeight - (e.pageY - originalMouseY);
                if (width > minimumSize) {
                    element.style.width = width + "px";
                }
                if (height > minimumSize) {
                    element.style.height = height + "px";
                    element.style.top = originalY + (e.pageY - originalMouseY) + "px";
                }
            } else {
                const width = originalWidth - (e.pageX - originalMouseX);
                const height = originalHeight - (e.pageY - originalMouseY);
                if (width > minimumSize) {
                    element.style.width = width + "px";
                    element.style.left = originalX + (e.pageX - originalMouseX) + "px";
                }
                if (height > minimumSize) {
                    element.style.height = height + "px";
                    element.style.top = originalY + (e.pageY - originalMouseY) + "px";
                }
            }
        }

        function stopResize() {
            document.removeEventListener("mousemove", resize);
            document.removeEventListener("mouseup", stopResize);
        }
    });
}*/

function developers() {
    createWindow("Developers", "../programs/developers/index.html", "../taskbar/icons/developers.png");
}

function mpax235store() {
    createWindow("mpax235 Store", "../programs/store/games.html", "../taskbar/icons/store.png");
}