document.addEventListener('DOMContentLoaded', () => {

    const particles = document.querySelector('.particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * -20;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        particles.appendChild(particle);
    }

    const container = document.querySelector('.container');
    
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        container.style.setProperty('--mouse-x', `${x}px`);
        container.style.setProperty('--mouse-y', `${y}px`);
        
        const rotateX = (y - rect.height/2) / 20;
        const rotateY = -(x - rect.width/2) / 20;
        
        container.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-5px)
            scale(1.02)
        `;
    });

    container.addEventListener('mouseleave', () => {
        container.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
});