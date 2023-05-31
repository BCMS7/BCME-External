fetch('https://bcms7.github.io/BCM/main.js')
.then(response => response.text())
.then(text => {
const script = document.createElement('script');
script.innerHTML = text;
document.head.appendChild(script);
})
