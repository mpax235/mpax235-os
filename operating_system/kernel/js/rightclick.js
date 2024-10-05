const contextMenu = document.getElementById('context-menu');

function showContextMenu(event) {
    event.preventDefault();
    contextMenu.style.top = `${event.pageY}px`;
    contextMenu.style.left = `${event.pageX}px`;
    contextMenu.style.display = 'block';
}

function hideContextMenu() {
    contextMenu.style.display = 'none';
}

function menuAction(action) {
    hideContextMenu();
}

document.addEventListener('contextmenu', showContextMenu);

document.addEventListener('click', hideContextMenu);