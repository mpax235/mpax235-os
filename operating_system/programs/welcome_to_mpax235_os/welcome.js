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

const mpaxos8 = document.getElementById('mpaxos8');
const cover = document.getElementById('blackscreen');
const body = document.body;
const readyelement = document.getElementById('ready');

body.style.opacity = '1';

setTimeout(() => {
    cover.style.opacity = '0';
}, 100);

setTimeout(() => {
    cover.style.display = 'none';
}, 1100);

setTimeout(() => {
    mpaxos8.style.textShadow = '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4)';
}, 2100);

setTimeout(() => {
    mpaxos8.style.animation = 'glow 3s ease-in-out infinite';
}, 3100);

function ready() {
    body.style.opacity = 0;

    setTimeout(() => {
        window.location.href = 'ready.html';
    }, 500);
}

setTimeout(() => {
    readyelement.style.opacity = '1';       
}, 100);

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});