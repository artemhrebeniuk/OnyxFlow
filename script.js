document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.main-container');

    setTimeout(() => {
        if (container) {
            container.classList.add('visible');
        }
    }, 100);

    const tgBtn = document.getElementById('tgButton');
    if (tgBtn) {
        tgBtn.addEventListener('click', (e) => {
            console.log('Пользователь перешел в Telegram');
        });
    }

    const twitchBtn = document.getElementById('twitchButton');
    if (twitchBtn) {
        twitchBtn.addEventListener('click', (e) => {
            console.log('Пользователь перешел на Twitch');
        });
    }

    const youtubeBtn = document.getElementById('youtubeButton');
    if (youtubeBtn) {
        youtubeBtn.addEventListener('click', (e) => {
            console.log('Пользователь перешел на YouTube');
        });
    }
});