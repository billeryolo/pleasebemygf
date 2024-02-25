const yesBtn = document.getElementById('yesBtn')
const noBtn = document.getElementById('noBtn')

yesBtn.addEventListener('click', () => {
    alert('THANK YOU!')
});

noBtn.addEventListener('mouseover', () => {
    let top = Math.floor(Math.random() * 90);
    let left = Math.floor(Math.random() * 90);

    noBtn.style.position = "absolute";
    noBtn.style.top = `${top}%`
    noBtn.style.left = `${left}%`;
});