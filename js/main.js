// BERK Learn - Language Toggle & Interactivity

document.addEventListener('DOMContentLoaded', () => {
    initLanguageToggle();
    initLevelToggle();
    initCodeHighlighting();
});

// Language Toggle (TR/EN)
function initLanguageToggle() {
    const langBtns = document.querySelectorAll('.lang-btn');
    const savedLang = localStorage.getItem('berk-lang') || 'tr';
    
    // Set initial language
    setLanguage(savedLang);
    
    langBtns.forEach(btn => {
        if (btn.dataset.lang === savedLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
        
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
            localStorage.setItem('berk-lang', lang);
            
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

// Level Toggle (Ortaokul/Lise/Üniversite)
function initLevelToggle() {
    const levelBtns = document.querySelectorAll('.level-btn');
    const savedLevel = localStorage.getItem('berk-level') || 'lise';
    
    // Set initial level
    setLevel(savedLevel);
    
    levelBtns.forEach(btn => {
        if (btn.dataset.level === savedLevel) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
        
        btn.addEventListener('click', () => {
            const level = btn.dataset.level;
            setLevel(level);
            localStorage.setItem('berk-level', level);
            
            levelBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function setLevel(level) {
    // Hide all level-specific content
    const allLevelContent = document.querySelectorAll('.ortaokul-content, .lise-content, .universite-content');
    allLevelContent.forEach(el => el.style.display = 'none');
    
    // Show selected level content
    const selectedContent = document.querySelectorAll(`.${level}-content`);
    selectedContent.forEach(el => el.style.display = '');
    
    // Update level info boxes
    const levelInfos = document.querySelectorAll('.level-info');
    levelInfos.forEach(info => {
        if (info.classList.contains(`${level}-info`)) {
            info.style.display = 'flex';
        } else {
            info.style.display = 'none';
        }
    });
    
    // Update example boxes based on level
    const exampleBoxes = document.querySelectorAll('.example-box[data-level]');
    exampleBoxes.forEach(box => {
        if (box.dataset.level === level) {
            box.style.display = '';
        } else {
            box.style.display = 'none';
        }
    });
}

function setLanguage(lang) {
    const trElements = document.querySelectorAll('.tr');
    const enElements = document.querySelectorAll('.en');
    
    if (lang === 'tr') {
        trElements.forEach(el => el.style.display = '');
        enElements.forEach(el => el.style.display = 'none');
    } else {
        trElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = '');
    }
}

// Simple syntax highlighting for inline code blocks
function initCodeHighlighting() {
    const codeBlocks = document.querySelectorAll('pre code:not(.highlighted)');
    
    codeBlocks.forEach(block => {
        let html = block.innerHTML;
        
        // Keywords (Turkish)
        const trKeywords = ['fonksiyon', 'degisken', 'sabit', 'eger', 'degilse', 'esle', 
                           'dongu', 'iken', 'icin', 'don', 'yap', 'son', 'yapi', 'numaralama',
                           'kullan', 'modul', 'pub', 'ozel', 'mut', 'ref'];
        
        // Keywords (English)
        const enKeywords = ['function', 'let', 'const', 'if', 'else', 'match', 
                           'loop', 'while', 'for', 'return', 'do', 'end', 'struct', 'enum',
                           'use', 'mod', 'pub', 'private', 'mut', 'ref', 'true', 'false'];
        
        // Types
        const types = ['tamsayi', 'int', 'ondalik', 'float', 'metin', 'string', 
                      'bool', 'mantiksal', 'void', 'Result', 'Option', 'Vec', 'HashMap'];
        
        // Apply highlighting
        const allKeywords = [...trKeywords, ...enKeywords];
        allKeywords.forEach(kw => {
            const regex = new RegExp(`\\b(${kw})\\b`, 'g');
            html = html.replace(regex, '<span class="keyword">$1</span>');
        });
        
        types.forEach(type => {
            const regex = new RegExp(`\\b(${type})\\b`, 'g');
            html = html.replace(regex, '<span class="type">$1</span>');
        });
        
        // Strings
        html = html.replace(/"([^"]*)"/g, '<span class="string">"$1"</span>');
        
        // Comments
        html = html.replace(/\/\/(.*)$/gm, '<span class="comment">//$1</span>');
        
        // Numbers
        html = html.replace(/\b(\d+\.?\d*)\b/g, '<span class="number">$1</span>');
        
        // Function calls
        html = html.replace(/(\w+)\(/g, '<span class="function">$1</span>(');
        
        block.innerHTML = html;
        block.classList.add('highlighted');
    });
}

// Copy code button functionality
function copyCode(btn) {
    const codeBlock = btn.closest('.code-block').querySelector('code');
    const text = codeBlock.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.textContent;
        btn.textContent = '✓ Kopyalandı!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
