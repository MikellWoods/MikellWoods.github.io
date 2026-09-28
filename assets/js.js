/* PAGE PROTECTER */

/* Right-Click */
document.addEventListener('contextmenu', function(e) {
e.preventDefault();
});

/* F12 */
document.addEventListener('keydown', function(e) {
if (e.key === 'F12' || e.keyCode === 123) {
e.preventDefault();
}


var isModifierPressed = e.ctrlKey || e.metaKey;
if (isModifierPressed) {

/* CTRL + S */
if (e.key === 's' || e.key === 'S' || e.keyCode === 83) {
e.preventDefault();
}

/* CTRL + U */
if (e.key === 'u' || e.key === 'U' || e.keyCode === 85) {
e.preventDefault();
}

/* CTRL + SHIFT + I */
if (e.shiftKey && (e.key === 'i' || e.key === 'I' || e.keyCode === 73)) {
e.preventDefault();
}
}
});



/* MENU OPEN & CLOSE */
function openMenu() {
document.getElementById("menu").style.width = "100%";
}

function closeMenu() {
document.getElementById("menu").style.width = "0%";
// Optional: Clear search box when closing menu
document.getElementById("menuSearchInput").value = "";
filterMenu();
}



/* COUNTDOWN */
var countDownDate = new Date("June 30, 2026 15:00:00").getTime();

var x = setInterval(function() {

var now = new Date().getTime();

var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

if (distance < 0) {
clearInterval(x);
document.getElementById("countdown").innerHTML = "COMING SOON";
}
}, 1000);



/* LOADING SCREEN */
(function() {
const renderBar = document.getElementById('render-progress-bar');
const loader = document.getElementById('loading-screen');
let currentProgress = 15;

const progressInterval = setInterval(() => {
if (currentProgress < 85) {
currentProgress += Math.floor(Math.random() * 5) + 2;
if (renderBar) renderBar.style.width = currentProgress + "%";
}
}, 100);

function completeLoading() {
clearInterval(progressInterval);
if (renderBar) renderBar.style.width = "100%";

setTimeout(() => {
if (loader) {
loader.style.opacity = '0';
loader.style.visibility = 'hidden';
setTimeout(() => loader.remove(), 600);
}
}, 800);
}

if (document.readyState === "complete") {
completeLoading();
} else {
window.addEventListener('load', completeLoading);
}
})();



/* HEADER SCROLL BAR */
window.addEventListener('scroll', function() {
const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

document.getElementById("scroll-progress-bar").style.width = scrolled + "%";
});



/* SEARCH BAR */
const searchInput = document.getElementById('menuSearchInput');

function filterMenu() {
const filterValue = searchInput.value.toLowerCase().trim();
const menuItems = document.querySelectorAll('.menu-item');
const separators = document.querySelectorAll('.menu-separator');

menuItems.forEach(item => {
const text = item.textContent.toLowerCase();
        
if (text.includes(filterValue)) {
item.style.display = "block";
item.style.opacity = "1";
item.style.transform = "scale(1)";
            
if (filterValue !== "" && item.tagName === "DETAILS") {
item.setAttribute("open", "true");
}
} else {
item.style.display = "none";
item.style.opacity = "0";
item.style.transform = "scale(0.95)";
}
});

separators.forEach(sep => {
sep.style.display = filterValue === "" ? "block" : "none";
});
}

searchInput.addEventListener('input', filterMenu);



/* ARTISTRY MODAL CONTROLLER */
document.addEventListener("DOMContentLoaded", function() {
const triggers = Array.from(document.querySelectorAll('.artistry-modal-trigger'));
const modal = document.getElementById('artistry-image-gallery-modal');
const modalImg = document.getElementById('artistry-modal-target-image');
const modalCaption = document.getElementById('artistry-modal-target-caption');
const blurContainer = document.getElementById('artistry-modal-blur-background');
const closeBtn = document.querySelector('.artistry-modal-close');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateModalContents(index) {
if (index >= triggers.length) {
currentIndex = 0;
} else if (index < 0) {
currentIndex = triggers.length - 1;
} else {
currentIndex = index;
}

const currentImg = triggers[currentIndex];
modalImg.src = currentImg.src;
modalCaption.innerText = currentImg.getAttribute('artistry-modal-caption-text') || "MW://Artistry.Gallery/Modal-Caption/??ERROR??";
}

triggers.forEach((img, index) => {
img.addEventListener('click', function() {
modal.classList.add('visible');
blurContainer.classList.add('page-blur');
updateModalContents(index);
});
});

nextBtn.addEventListener('click', function(e) {
e.stopPropagation();
updateModalContents(currentIndex + 1);
});

prevBtn.addEventListener('click', function(e) {
e.stopPropagation();
updateModalContents(currentIndex - 1);
});

function hideModal() {
modal.classList.remove('visible');
blurContainer.classList.remove('page-blur');
}

closeBtn.addEventListener('click', hideModal);
modal.addEventListener('click', function(e) {
if (e.target === modal) {
hideModal();
}
});

document.addEventListener('keydown', function(e) {
if (modal.classList.contains('visible')) {
if (e.key === "ArrowRight") {
updateModalContents(currentIndex + 1);
} else if (e.key === "ArrowLeft") {
updateModalContents(currentIndex - 1);
} else if (e.key === "Escape") {
hideModal();
}
}
});
});






/* PHOTOGRAPHY MODAL CONTROLLER */
document.addEventListener("DOMContentLoaded", function() {
const triggers = Array.from(document.querySelectorAll('.photography-modal-trigger'));
const modal = document.getElementById('photography-image-gallery-modal');
const modalImg = document.getElementById('photography-modal-target-image');
const modalCaption = document.getElementById('photography-modal-target-caption');
const blurContainer = document.getElementById('photography-modal-blur-background');
const closeBtn = document.querySelector('.photography-modal-close');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateModalContents(index) {
if (index >= triggers.length) {
currentIndex = 0;
} else if (index < 0) {
currentIndex = triggers.length - 1;
} else {
currentIndex = index;
}

const currentImg = triggers[currentIndex];
modalImg.src = currentImg.src;
modalCaption.innerText = currentImg.getAttribute('photography-modal-caption-text') || "MW://Photography.Gallery/Modal-Caption/??ERROR??";
}

triggers.forEach((img, index) => {
img.addEventListener('click', function() {
modal.classList.add('visible');
blurContainer.classList.add('page-blur');
updateModalContents(index);
});
});

nextBtn.addEventListener('click', function(e) {
e.stopPropagation();
updateModalContents(currentIndex + 1);
});

prevBtn.addEventListener('click', function(e) {
e.stopPropagation();
updateModalContents(currentIndex - 1);
});

function hideModal() {
modal.classList.remove('visible');
blurContainer.classList.remove('page-blur');
}

closeBtn.addEventListener('click', hideModal);
modal.addEventListener('click', function(e) {
if (e.target === modal) {
hideModal();
}
});

document.addEventListener('keydown', function(e) {
if (modal.classList.contains('visible')) {
if (e.key === "ArrowRight") {
updateModalContents(currentIndex + 1);
} else if (e.key === "ArrowLeft") {
updateModalContents(currentIndex - 1);
} else if (e.key === "Escape") {
hideModal();
}
}
});
});







/* GRAPHIC DESIGN MODAL CONTROLLER */
document.addEventListener("DOMContentLoaded", function() {
const triggers = Array.from(document.querySelectorAll('.graphic-design-modal-trigger'));
const modal = document.getElementById('graphic-design-image-gallery-modal');
const modalImg = document.getElementById('graphic-design-modal-target-image');
const modalCaption = document.getElementById('graphic-design-modal-target-caption');
const blurContainer = document.getElementById('graphic-design-modal-blur-background');
const closeBtn = document.querySelector('.graphic-design-modal-close');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateModalContents(index) {
if (index >= triggers.length) {
currentIndex = 0;
} else if (index < 0) {
currentIndex = triggers.length - 1;
} else {
currentIndex = index;
}

const currentImg = triggers[currentIndex];
modalImg.src = currentImg.src;
modalCaption.innerText = currentImg.getAttribute('graphic-design-modal-caption-text') || "MW://GraphicDesign.Gallery/Modal-Caption/??ERROR??";
}

triggers.forEach((img, index) => {
img.addEventListener('click', function() {
modal.classList.add('visible');
blurContainer.classList.add('page-blur');
updateModalContents(index);
});
});

nextBtn.addEventListener('click', function(e) {
e.stopPropagation();
updateModalContents(currentIndex + 1);
});

prevBtn.addEventListener('click', function(e) {
e.stopPropagation();
updateModalContents(currentIndex - 1);
});

function hideModal() {
modal.classList.remove('visible');
blurContainer.classList.remove('page-blur');
}

closeBtn.addEventListener('click', hideModal);
modal.addEventListener('click', function(e) {
if (e.target === modal) {
hideModal();
}
});

document.addEventListener('keydown', function(e) {
if (modal.classList.contains('visible')) {
if (e.key === "ArrowRight") {
updateModalContents(currentIndex + 1);
} else if (e.key === "ArrowLeft") {
updateModalContents(currentIndex - 1);
} else if (e.key === "Escape") {
hideModal();
}
}
});
});








/* ONLY PLAY ONE TRACK AT A TIME */
document.addEventListener('play', function(e) {
const audios = document.querySelectorAll('audio');
audios.forEach(audio => {
if (audio !== e.target) {
audio.pause();
}
});
}, true);



/* AUDIO VISUALIZER */
(function() {
let audioCtx;
let analyser;
let bufferLength;
let dataArray;
const canvas = document.getElementById('music-visualizer-canvas');
const canvasCtx = canvas.getContext('2d');
const audioSourcesMap = new Map();

function initAudioContext() {
if (audioCtx) return;
audioCtx = new (window.AudioContext || window.webkitAudioContext)();
analyser = audioCtx.createAnalyser();
analyser.fftSize = 256;
bufferLength = analyser.frequencyBinCount;
dataArray = new Uint8Array(bufferLength);
analyser.connect(audioCtx.destination);
drawVisualizer();
}

function setupAudioSource(audioElement) {
if (audioSourcesMap.has(audioElement)) return;
initAudioContext();
try {
const source = audioCtx.createMediaElementSource(audioElement);
source.connect(analyser);
audioSourcesMap.set(audioElement, source);
} catch (err) {
console.log("Visualizer routing notice:", err);
}
}

document.addEventListener('play', function(e) {
if (e.target.tagName === 'AUDIO') {
if (audioCtx && audioCtx.state === 'suspended') {
audioCtx.resume();
}
setupAudioSource(e.target);
}
}, true);

function resizeCanvas() {
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function drawVisualizer() {
requestAnimationFrame(drawVisualizer);
if (!analyser) return;
analyser.getByteFrequencyData(dataArray);
canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
const barWidth = (canvas.width / bufferLength) * 1.5;
let barHeight;
let x = 0;
for (let i = 0; i < bufferLength; i++) {
barHeight = dataArray[i] / 2;
canvasCtx.fillStyle = 'rgba(255, 255, 255, ' + (barHeight / 150 + 0.1) + ')';
canvasCtx.fillRect(x, canvas.height - barHeight, barWidth - 2, barHeight);
x += barWidth;
}
}
})();


