const body = document.body;
const shutdowntext = document.getElementById('shutdown');
const cover = document.getElementById('cover');
const stuff = document.getElementById('stuff');

setTimeout(() => {
    cover.style.opacity = '0';
}, 100);


setTimeout(() => {
    shutdowntext.style.opacity = '0';
}, 3000);

setTimeout(() => {
    shutdowntext.innerHTML = 'Goodbye!';
    shutdowntext.style.opacity = '1';

    setTimeout(() => {
        shutdowntext.style.opacity = '0';
    }, 3000);

    setTimeout(() => {
        cover.style.opacity = '1';

        setTimeout(() => {
            stuff.style.opacity = '1';

            document.addEventListener('keydown', function(event) {
                if (event.key === 'F9') {
                    window.location.href = '../../../efi_apps/bootx64/bootx64.html';
                }
            });
        }, 5000);
    }, 3500);
}, 4000);

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});