function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤'; // Usamos el carácter de corazón
    heart.classList.add('heart');
    
    // Posición horizontal aleatoria
    heart.style.left = Math.random() * 100 + "vw";
    
    // Tamaño aleatorio
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    
    // Velocidad aleatoria
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    
    // Movimiento lateral aleatorio
    heart.style.setProperty('--x-offset', (Math.random() * 100 - 50) + "px");
    
    // Opacidad aleatoria para dar profundidad
    heart.style.opacity = Math.random();

    document.body.appendChild(heart);

    // Borrar el corazón cuando termine de caer
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Crear un corazón cada 200 milisegundos
setInterval(createHeart, 200);