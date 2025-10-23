const button = document.querySelector('.glow-button');

button.addEventListener('click', (e) => {
  for (let i = 0; i < 15; i++) {
    const particle = document.createElement('span');
    particle.classList.add('particle');
    particle.style.left = `${e.offsetX}px`;
    particle.style.top = `${e.offsetY}px`;
    
    const x = (Math.random() - 0.5) * 200 + "px";
    const y = (Math.random() - 0.5) * 200 + "px";
    particle.style.setProperty('--x', x);
    particle.style.setProperty('--y', y);
    
    button.appendChild(particle);

    setTimeout(() => particle.remove(), 600);
  }
});
