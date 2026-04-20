// Ждем полной загрузки структуры сайта
document.addEventListener('DOMContentLoaded', () => {

    // Находим главный контейнер
    const container = document.querySelector('.main-container');

    // Добавляем класс 'visible', который запускает CSS-анимацию появления
    // Делаем небольшую задержку (100мс) для плавности
    setTimeout(() => {
        if (container) {
            container.classList.add('visible');
        }
    }, 100);

    // Дополнительная логика для кнопки (опционально)
    // Например, можно добавить эффект "клика" в консоль или аналитику
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