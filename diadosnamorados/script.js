// Data do início do namoro
const startDate = new Date('2025-03-16'); // 16 de março de 2025

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    // Cálculos
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // Atualizar os elementos HTML
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
}

// Atualizar o timer a cada segundo
setInterval(updateTimer, 1000);
updateTimer(); // Atualizar imediatamente ao carregar a página

// Adicionar efeito de hover nas fotos
document.querySelectorAll('.photo-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// --- Custom Music Player ---
window.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('customAudio');
    const playBtn = document.getElementById('musicPlayBtn');
    const playIcon = document.getElementById('musicPlayIcon');
    const duration = document.getElementById('musicDuration');

    // Atualiza o botão play/pause
    function updatePlayIcon() {
        if (audio.paused) {
            playIcon.src = 'imagens/botao-play.png';
            playIcon.alt = 'Play';
        } else {
            playIcon.src = 'imagens/pausa.png';
            playIcon.alt = 'Pause';
        }
    }

    // Play/pause ao clicar
    playBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        updatePlayIcon();
    });

    // Atualiza ícone ao pausar/tocar
    audio.addEventListener('play', updatePlayIcon);
    audio.addEventListener('pause', updatePlayIcon);

    // Atualiza duração (negativo, igual ao visual do exemplo)
    audio.addEventListener('loadedmetadata', function() {
        const total = Math.floor(audio.duration);
        const min = Math.floor(total / 60);
        const sec = (total % 60).toString().padStart(2, '0');
        duration.textContent = `-${min}:${sec}`;
    });

    // Tenta autoplay ao carregar
    setTimeout(() => {
        audio.volume = 0.7;
        audio.play().catch(() => {});
        updatePlayIcon();
    }, 500);
});

// --- Splash Screen ---
document.addEventListener('DOMContentLoaded', function() {
    const splash = document.getElementById('splash');
    const enterBtn = document.getElementById('enterSiteBtn');
    if (splash && enterBtn) {
        enterBtn.addEventListener('click', function() {
            splash.style.opacity = '0';
            setTimeout(() => {
                splash.style.display = 'none';
                // Tenta dar play na música customizada
                const audio = document.getElementById('customAudio');
                if (audio) {
                    audio.volume = 0.7;
                    audio.play().catch(() => {});
                }
            }, 500);
        });
    }
}); 