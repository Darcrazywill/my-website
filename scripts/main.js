document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт полностью загружен');
    
    // Анимация для карточек
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
});
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Форма отправлена! (Это демо, данные никуда не отправляются)');
        this.reset();
    });
}
// Массив с путями к изображениям
const images = [
    '../images/1.jpg',
    '../images/2.webp',
    '../images/3.jpg',
    '../images/4.jpg'
];

// Замените эти ссылки на реальные пути к вашим изображениям
// Или добавьте свои изображения в папку проекта и укажите относительные пути:
// const images = [
//     'images/photo1.jpg',
//     'images/photo2.jpg',
//     'images/photo3.jpg'
// ];

// Получаем элементы DOM
const galleryImage = document.getElementById('gallery-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentImgSpan = document.getElementById('current-img');
const totalImgsSpan = document.getElementById('total-imgs');

// Устанавливаем начальный индекс и общее количество изображений
let currentIndex = 0;
totalImgsSpan.textContent = images.length;

// Функция для обновления изображения и состояния кнопок
function updateGallery() {
    galleryImage.src = images[currentIndex];
    currentImgSpan.textContent = currentIndex + 1;
    
    // Обновляем состояние кнопок
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
}

// Обработчики событий для кнопок
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateGallery();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateGallery();
    }
});

// Инициализация галереи
updateGallery();
