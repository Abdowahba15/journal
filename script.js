// 1. التحكم في حجم الخط مع إضافة حدود (حتى لا يختفي النص)
let currentFontSize = 1.4; 

function changeFontSize(action) {
    const content = document.getElementById('novel-content');
    if (content) { // التأكد من وجود العنصر أولاً
        if (action === 1 && currentFontSize < 3) { // الحد الأقصى 3rem
            currentFontSize += 0.1;
        } else if (action === -1 && currentFontSize > 0.8) { // الحد الأدنى 0.8rem
            currentFontSize -= 0.1;
        }
        content.style.fontSize = currentFontSize + 'rem';
    }
}

// 2. تفعيل الوضع الليلي
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.textContent = document.body.classList.contains('dark-mode') ? 'الوضع النهاري' : 'الوضع الليلي';
    });
}

// 3. تأثير شفافية الناف بار عند التمرير
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 51, 102, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        } else {
            navbar.style.background = 'var(--primary-blue)';
            navbar.style.boxShadow = 'none';
        }
    }
});
