// ========== ДАННЫЕ СЕМЬИ РОНИНЫХ ==========
const familyData = [
    { id: 'dad', name: 'Папа', icon: '👨', details: { fullName: 'Сергей Ронин', birthYear: 1985, age: 41, bloodType: 'II (A) Rh+', allergies: 'Нет', chronic: 'Гипертония', height: '180 см', weight: '87 кг' } },
    { id: 'mom', name: 'Мама', icon: '👩', details: { fullName: 'Татьяна Ронина', birthYear: 1981, age: 45, bloodType: 'I (0) Rh+', allergies: 'Нет', chronic: 'Нет', height: '156 см', weight: '60 кг' } },
    { id: 'katya', name: 'Катя', icon: '👩', details: { fullName: 'Катя Ронина', birthYear: 2006, age: 20, bloodType: 'II (A) Rh+', allergies: 'Нет', chronic: 'Нет', height: '170 см', weight: '55 кг' } },
    { id: 'eva', name: 'Ева', icon: '👧', details: { fullName: 'Ева Ронина', birthYear: 2011, age: 15, bloodType: 'I (0) Rh+', allergies: 'Нет', chronic: 'Нет', height: '156 см', weight: '50 кг' } },
    { id: 'cat', name: 'Барсик', icon: '🐱', details: { fullName: 'Барсик Ронин', birthYear: 2023, age: 3, bloodType: '—', allergies: 'Курица', chronic: 'Нет', breed: 'Британский', vetPassport: '№ 567890' } }
];

// ========== ЛЕКАРСТВА ==========
const medicationsData = [
    { id: 1, name: 'Каптоприл', for: 'Папа', time: 'Утро/вечер', completed: false },
    { id: 2, name: 'Витамин D', for: 'Катя, Ева', time: 'Утро', completed: false },
    { id: 3, name: 'Кальций', for: 'Мама', time: 'Вечер', completed: false },
    { id: 4, name: 'Омега-3', for: 'Папа, Катя', time: 'Обед', completed: false },
    { id: 5, name: 'Йодомарин', for: 'Вся семья', time: 'Утро', completed: false }
];

// ========== СРОКИ ГОДНОСТИ ==========
const expiryData = [
    { name: 'Парацетамол', date: '2027-05-15' },
    { name: 'Активированный уголь', date: '2026-08-10' },
    { name: 'Бинт стерильный', date: '2028-12-01' },
    { name: 'Зелёнка', date: '2026-03-01' },
    { name: 'Йод', date: '2025-11-20' },
    { name: 'Перекись водорода', date: '2025-04-01' }
];

// ========== ПРИВИВКИ ==========
const vaccineData = [
    { name: 'АКДС', for: 'Ева', date: '2026-05-15', status: 'soon' },
    { name: 'Грипп', for: 'Вся семья', date: '2025-10-01', status: 'done' },
    { name: 'ККП', for: 'Катя', date: '2020-03-10', status: 'done' },
    { name: 'Столбняк', for: 'Папа', date: '2025-12-01', status: 'overdue' },
    { name: 'Ветпрививка', for: 'Барсик', date: '2026-04-20', status: 'soon' }
];

// ========== ТРЕКЕР ВОДЫ ==========
const waterData = [
    { name: 'Папа', icon: '👨', goal: 8, current: 0 },
    { name: 'Мама', icon: '👩', goal: 8, current: 0 },
    { name: 'Катя', icon: '👩', goal: 7, current: 0 },
    { name: 'Ева', icon: '👧', goal: 6, current: 0 }
];

// ========== ТРЕВОЖНЫЙ ЧЕМОДАНЧИК ==========
const emergencyBagItems = ['Паспорта', 'Полисы ОМС', 'Деньги', 'Зарядка', 'Вода', 'Сменная одежда', 'Салфетки', 'Телефоны', 'Переноска Барсика'];

// ========== ДАННЫЕ АНАЛИЗОВ ==========
const analysisData = [
    { name: 'Общий анализ крови', for: 'Катя', date: '2026-03-15', result: 'Норма', status: 'normal' },
    { name: 'Холестерин', for: 'Папа', date: '2026-02-20', result: 'Повышен', status: 'warning' },
    { name: 'Витамин D', for: 'Ева', date: '2026-03-01', result: 'Понижен', status: 'critical' },
    { name: 'Глюкоза', for: 'Мама', date: '2026-03-10', result: 'Норма', status: 'normal' }
];

// ========== ОТРИСОВКА ПРОФИЛЕЙ ==========
function renderFamilyProfiles() {
    const container = document.getElementById('familyProfiles');
    container.innerHTML = '';
    familyData.forEach(member => {
        const card = document.createElement('div');
        card.className = 'profile-card';
        const detailsHtml = Object.entries(member.details).map(([k, v]) => {
            const labels = { fullName: 'Имя', birthYear: 'Год', age: 'Возраст', bloodType: 'Кровь', allergies: 'Аллергия', chronic: 'Хрон.', height: 'Рост', weight: 'Вес', breed: 'Порода', vetPassport: 'Ветпаспорт' };
            return `<p><strong>${labels[k]||k}:</strong> ${v}</p>`;
        }).join('');
        card.innerHTML = `<div class="profile-icon">${member.icon}</div><div class="profile-name">${member.name}</div><div class="profile-details">${detailsHtml}</div><div class="profile-hint">👆 Нажми</div>`;
        card.addEventListener('click', () => card.classList.toggle('active'));
        container.appendChild(card);
    });
}

// ========== ОТРИСОВКА ЛЕКАРСТВ ==========
function renderMedications() {
    const container = document.getElementById('medicationList');
    container.innerHTML = '';
    medicationsData.forEach(med => {
        const item = document.createElement('div');
        item.className = `med-item ${med.completed ? 'completed' : ''}`;
        const ch = document.createElement('input');
        ch.type = 'checkbox';
        ch.checked = med.completed;
        ch.addEventListener('change', e => { med.completed = e.target.checked; renderMedications(); if (medicationsData.every(m => m.completed)) alert('✅ Все лекарства приняты!'); });
        const info = document.createElement('div');
        info.className = 'med-info';
        info.innerHTML = `<div class="med-name ${med.completed ? 'completed-label' : ''}">${med.name}</div><div class="med-for">${med.for}</div><div class="med-time">🕐 ${med.time}</div>`;
        item.appendChild(ch);
        item.appendChild(info);
        container.appendChild(item);
    });
}

// ========== ОТРИСОВКА СРОКОВ ГОДНОСТИ ==========
function renderExpiry() {
    const container = document.getElementById('expiryList');
    container.innerHTML = '';
    const today = new Date();
    expiryData.forEach(item => {
        const d = new Date(item.date);
        const days = Math.ceil((d - today) / 86400000);
        let cls = 'green', txt = '✅ Норма';
        if (days < 0) { cls = 'red'; txt = '❌ Просрочено'; }
        else if (days < 90) { cls = 'yellow'; txt = `⚠️ ${days} дн.`; }
        const div = document.createElement('div');
        div.className = `expiry-item ${cls}`;
        div.innerHTML = `<div><div class="expiry-name">${item.name}</div><div class="expiry-date">Годен до: ${item.date}</div></div><div class="expiry-badge">${txt}</div>`;
        container.appendChild(div);
    });
}

// ========== ОТРИСОВКА ПРИВИВОК ==========
function renderVaccines() {
    const container = document.getElementById('vaccineList');
    if (!container) return;
    container.innerHTML = '';
    const today = new Date();
    vaccineData.sort((a,b) => new Date(a.date) - new Date(b.date));
    vaccineData.forEach(v => {
        const d = new Date(v.date);
        const days = Math.ceil((d - today) / 86400000);
        let cls = 'done', txt = '✅ Сделано';
        if (v.status !== 'done') {
            if (days < 0) { cls = 'overdue'; txt = '❌ Просрочено'; }
            else if (days < 30) { cls = 'soon'; txt = `⚠️ Через ${days} дн.`; }
            else { cls = 'done'; txt = '📅 Запланировано'; }
        }
        const div = document.createElement('div');
        div.className = `vaccine-item ${cls}`;
        div.innerHTML = `<div class="vaccine-info"><div class="vaccine-name">${v.name}</div><div class="vaccine-for">👤 ${v.for}</div><div class="vaccine-date">📅 ${v.date}</div></div><div class="vaccine-status">${txt}</div>`;
        container.appendChild(div);
    });
    const upcoming = vaccineData.filter(v => v.status !== 'done' && new Date(v.date) > today).length;
    document.getElementById('upcomingVaccines').textContent = upcoming;
}

// ========== ОТРИСОВКА ТРЕКЕРА ВОДЫ ==========
function renderWaterTracker() {
    const container = document.getElementById('waterTracker');
    if (!container) return;
    const saved = JSON.parse(localStorage.getItem('roninWater') || 'null');
    if (saved) waterData.forEach((p,i) => p.current = saved[i]?.current || 0);
    container.innerHTML = '';
    waterData.forEach((p, idx) => {
        const div = document.createElement('div');
        div.className = 'water-person';
        let g = '';
        for (let i=0; i<p.goal; i++) g += `<div class="water-glass ${i<p.current?'filled':''}" data-p="${idx}" data-g="${i}">💧</div>`;
        div.innerHTML = `<div class="water-icon">${p.icon}</div><div class="water-name">${p.name}</div><div class="water-glasses">${g}</div><div class="water-counter">${p.current}/${p.goal}</div>`;
        container.appendChild(div);
    });
    document.querySelectorAll('.water-glass').forEach(el => {
        el.addEventListener('click', function() {
            const pi = +this.dataset.p, gi = +this.dataset.g;
            waterData[pi].current = gi < waterData[pi].current ? gi : gi + 1;
            if (waterData[pi].current === waterData[pi].goal) alert(`🎉 ${waterData[pi].name} выполнил(а) норму воды!`);
            localStorage.setItem('roninWater', JSON.stringify(waterData));
            renderWaterTracker();
            updateWaterPercent();
        });
    });
    updateWaterPercent();
}

function updateWaterPercent() {
    const totalGoal = waterData.reduce((s,p) => s + p.goal, 0);
    const totalCurrent = waterData.reduce((s,p) => s + p.current, 0);
    document.getElementById('waterPercent').textContent = Math.round(totalCurrent / totalGoal * 100) + '%';
}

// ========== ОТРИСОВКА ТРЕВОЖНОГО ЧЕМОДАНЧИКА ==========
function renderEmergencyBag() {
    const container = document.getElementById('emergencyBag');
    if (!container) return;
    const saved = JSON.parse(localStorage.getItem('roninBag') || '[]');
    container.innerHTML = '';
    emergencyBagItems.forEach((item, i) => {
        const div = document.createElement('div');
        div.className = `bag-item ${saved[i] ? 'completed' : ''}`;
        const ch = document.createElement('input');
        ch.type = 'checkbox';
        ch.checked = saved[i] || false;
        ch.addEventListener('change', e => {
            const arr = JSON.parse(localStorage.getItem('roninBag') || '[]');
            arr[i] = e.target.checked;
            localStorage.setItem('roninBag', JSON.stringify(arr));
            div.classList.toggle('completed', e.target.checked);
            if (arr.every(v => v)) alert('✅ Тревожный чемоданчик готов!');
        });
        const lbl = document.createElement('label');
        lbl.textContent = item;
        div.appendChild(ch);
        div.appendChild(lbl);
        container.appendChild(div);
    });
}

// ========== ОТРИСОВКА АНАЛИЗОВ ==========
function renderAnalysis() {
    const container = document.getElementById('analysisList');
    if (!container) return;
    const saved = JSON.parse(localStorage.getItem('roninAnalysis') || 'null');
    const data = saved || analysisData;
    container.innerHTML = '';
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'analysis-item';
        div.innerHTML = `<div class="analysis-info"><div class="analysis-name">🔬 ${item.name}</div><div class="analysis-for">👤 ${item.for}</div><div class="analysis-date">📅 ${item.date}</div></div><div class="analysis-result ${item.status}">${item.result}</div>`;
        container.appendChild(div);
    });
}

// ========== КНОПКИ ДОБАВЛЕНИЯ ==========
function setupAddButtons() {
    const addMedBtn = document.getElementById('addMedBtn');
    if (addMedBtn) {
        addMedBtn.addEventListener('click', () => {
            const name = prompt('Название лекарства:');
            if (!name) return;
            const forWhom = prompt('Для кого (например: Папа, Катя):');
            const time = prompt('Время приёма (например: Утро):');
            medicationsData.push({ id: Date.now(), name, for: forWhom || 'Вся семья', time: time || 'Утро', completed: false });
            renderMedications();
            document.getElementById('totalMeds').textContent = medicationsData.length;
            alert('✅ Лекарство добавлено!');
        });
    }
    
    const addVaccineBtn = document.getElementById('addVaccineBtn');
    if (addVaccineBtn) {
        addVaccineBtn.addEventListener('click', () => {
            const name = prompt('Название прививки:');
            if (!name) return;
            const forWhom = prompt('Для кого:');
            const date = prompt('Дата (ГГГГ-ММ-ДД):', '2026-06-01');
            vaccineData.push({ name, for: forWhom || 'Вся семья', date: date || '2026-06-01', status: 'soon' });
            renderVaccines();
            alert('✅ Прививка добавлена!');
        });
    }
    
    const addExpiryBtn = document.getElementById('addExpiryBtn');
    if (addExpiryBtn) {
        addExpiryBtn.addEventListener('click', () => {
            const name = prompt('Название препарата:');
            if (!name) return;
            const date = prompt('Срок годности (ГГГГ-ММ-ДД):', '2027-01-01');
            expiryData.push({ name, date: date || '2027-01-01' });
            renderExpiry();
            alert('✅ Препарат добавлен!');
        });
    }
    
    const addAnalysisBtn = document.getElementById('addAnalysisBtn');
    if (addAnalysisBtn) {
        addAnalysisBtn.addEventListener('click', () => {
            const name = prompt('Название анализа:');
            if (!name) return;
            const forWhom = prompt('Для кого:');
            const date = prompt('Дата (ГГГГ-ММ-ДД):', '2026-04-01');
            const result = prompt('Результат (Норма / Повышен / Понижен):', 'Норма');
            let status = 'normal';
            if (result.toLowerCase().includes('повыш')) status = 'warning';
            if (result.toLowerCase().includes('пониж')) status = 'critical';
            const saved = JSON.parse(localStorage.getItem('roninAnalysis') || '[]');
            saved.push({ name, for: forWhom, date: date || '2026-04-01', result, status });
            localStorage.setItem('roninAnalysis', JSON.stringify(saved));
            renderAnalysis();
            alert('✅ Анализ добавлен!');
        });
    }
}

// ========== СЧЁТЧИК ДНЕЙ БЕЗ БОЛЕЗНЕЙ ==========
function updateHealthyCounter() {
    const lastSick = new Date('2026-02-28');
    const days = Math.floor((new Date() - lastSick) / 86400000);
    document.getElementById('healthyDaysCounter').textContent = days;
    document.getElementById('healthyStreak').textContent = days;
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========
document.addEventListener('DOMContentLoaded', () => {
    renderFamilyProfiles();
    renderMedications();
    renderExpiry();
    renderVaccines();
    renderWaterTracker();
    renderEmergencyBag();
    renderAnalysis();
    setupAddButtons();
    updateHealthyCounter();
    
    document.getElementById('totalMeds').textContent = medicationsData.length;
    
    document.getElementById('medSearchInput').addEventListener('input', e => {
        const s = e.target.value.toLowerCase();
        document.querySelectorAll('.med-item').forEach(el => {
            const n = el.querySelector('.med-name').textContent.toLowerCase();
            const f = el.querySelector('.med-for').textContent.toLowerCase();
            el.style.display = n.includes(s) || f.includes(s) ? 'flex' : 'none';
        });
    });
    
    document.getElementById('resetMedicationsBtn').addEventListener('click', () => {
        medicationsData.forEach(m => m.completed = false);
        renderMedications();
        alert('🔄 Новый день! Галочки сброшены.');
    });
    
    const themeBtn = document.getElementById('themeToggle');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeBtn.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
        localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    });
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        themeBtn.textContent = '☀️';
    }
    
    const notesArea = document.getElementById('doctorNotes');
    const savedNotes = localStorage.getItem('roninNotes');
    if (savedNotes) notesArea.value = savedNotes;
    notesArea.addEventListener('input', () => localStorage.setItem('roninNotes', notesArea.value));
    document.getElementById('clearNotesBtn').addEventListener('click', () => {
        if (confirm('Очистить заметки?')) { notesArea.value = ''; localStorage.removeItem('roninNotes'); }
    });
    
    document.getElementById('copyEmergencyBtn').addEventListener('click', () => {
        const txt = `СЕМЬЯ РОНИНЫХ (ЭКСТРЕННАЯ ИНФОРМАЦИЯ):
Папа Сергей (41 год): II(A) Rh+, аллергия на пенициллин
Мама Татьяна (45 лет): I(0) Rh+, аллергий нет
Катя (19 лет): II(A) Rh+, аллергия на цитрусовые
Ева (15 лет): I(0) Rh+, аллергий нет
Барсик (кот, 3 года): аллергия на курицу, ветклиника +73452123456
Семейный врач: +73452597895
Скорая: 103`;
        navigator.clipboard?.writeText(txt).then(() => alert('✅ Скопировано!')).catch(() => alert('✅ Скопировано!'));
    });
});
