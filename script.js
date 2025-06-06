// 暗黑模式切换
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// 搜索功能（模拟）
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    alert(`搜索: ${query}`);
});