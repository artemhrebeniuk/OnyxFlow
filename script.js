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
    const btn = document.getElementById('tgButton');
    
    btn.addEventListener('click', (e) => {
        // Здесь можно добавить код для Яндекс.Метрики или Google Analytics
        console.log('Пользователь перешел в Telegram');
    });
});