let currentLang = 'es';

function changeTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

function changeLang(lang) {
    currentLang = lang;
    // Actualizar textos de la interfaz
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerText = DB.ui[lang][key] || el.innerText;
    });
}

function showSection(section) {
    const container = document.getElementById('app-container');
    let html = `<h1>${section.toUpperCase()}</h1>`;

    DB[section].forEach(item => {
        html += `
            <div class="card">
                <h3 class="accent-text">${item.title ? item.title[currentLang] : (item.name || item.title)}</h3>
                <p>${item.content ? item.content[currentLang] : (item.desc ? item.desc[currentLang] : item.review[currentLang])}</p>
                ${item.date ? `<small>${item.date}</small>` : ''}
            </div>
        `;
    });

    container.innerHTML = html;
}

// Carga inicial
window.onload = () => {
    showSection('blog');
    changeLang('es');
};
