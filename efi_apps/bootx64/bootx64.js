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

const loadingbar = document.getElementById('loadingbar');

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

function fadeInLogo() {
    const logo = document.getElementById("logo1");
    logo.style.transform = 'scale(100%)';
    logo.style.opacity = 1;

    setTimeout(fadeOutLogo, 5000);
}

setTimeout(() => {
    loadingbar.style.animation = 'loadingbar 2s ease-in-out';
    setTimeout(() => {
        loadingbar.style.width = '300px';
    }, 1999);
}, 3000);

function fadeOutLogo() {
    const logo = document.getElementById("logo1");
    logo.style.transform = 'scale(500%)';
    logo.style.opacity = 0;
}

setTimeout(function() {
    window.location.href = "../../operating_system/programs/welcome_to_mpax235_os/index.html";
}, 8000);

window.onload = function() {
    fadeInLogo();
};