document.addEventListener('DOMContentLoaded', () => {
    // --- Typing Animation ---
    const typingText = document.getElementById('typing-text');
    const textToType = "Backend Developer";
    let index = 0;
    function type() {
        if (typingText && index < textToType.length) {
            typingText.textContent += textToType.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    type();

    // --- Header background change on scroll ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Animate sections on scroll ---
    const sections = document.querySelectorAll('.content-wrapper');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => sectionObserver.observe(section));

    // --- Active nav link highlighting ---
    const allSections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    const dotLinks = document.querySelectorAll('.dot-link');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.id;
                const setActive = (links) => {
                    links.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').substring(1) === currentId) {
                            link.classList.add('active');
                        }
                    });
                };
                setActive(navLinks);
                setActive(dotLinks);
            }
        });
    }, { rootMargin: '-50% 0px -50% 0px' });

    allSections.forEach(section => navObserver.observe(section));
});

