
async function setLanguage(lang) {

    const response = await fetch(`lang/${lang}.json`);
    const translations = await response.json();

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[key]) {
            element.innerHTML = translations[key];
        }
    });

    if (lang === "ar") {
        document.documentElement.dir = "rtl";
        document.documentElement.lang = "ar";
    } else {
        document.documentElement.dir = "ltr";
        document.documentElement.lang = "en";
    }

    const select = document.querySelector("select[onchange]");
    if (select) {
        select.value = lang;
    }

    localStorage.setItem("lang", lang);
}

window.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);
});














function toggleFaq(btn) {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => {
            i.classList.remove('open');
            i.querySelector('.faq-body').style.maxHeight = '0';
        });
        if (!isOpen) {
            item.classList.add('open');
            item.querySelector('.faq-body').style.maxHeight = '300px';
        }
    }
 
    document.addEventListener('DOMContentLoaded', function () {
        const first = document.querySelector('.faq-item.open');
        if (first) first.querySelector('.faq-body').style.maxHeight = '300px';
    });











