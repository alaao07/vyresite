const DISCORD_CLIENT_ID = 'YOUR_DISCORD_CLIENT_ID';
const DISCORD_REDIRECT_URI = window.location.origin + '/dashboard.html';
const DISCORD_BOT_INVITE = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&permissions=8&scope=bot%20applications.commands`;

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCompactMode();
    initDiscordAuth();
    initScrollAnimations();
    initButtons();
    initSettings();
});

function initTheme() {
    const themeSelector = document.getElementById('themeSelector');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    applyTheme(savedTheme);
    
    if (themeSelector) {
        themeSelector.value = savedTheme;
        themeSelector.addEventListener('change', (e) => {
            const theme = e.target.value;
            applyTheme(theme);
            localStorage.setItem('theme', theme);
        });
    }
}

function applyTheme(theme) {
    const body = document.body;
    
    body.classList.remove('light-theme', 'dark-theme');
    
    if (theme === 'light') {
        body.classList.add('light-theme');
    } else if (theme === 'dark') {
        body.classList.add('dark-theme');
    } else if (theme === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (!prefersDark) {
            body.classList.add('light-theme');
        }
    }
}

function initCompactMode() {
    const compactToggle = document.getElementById('compactModeToggle');
    const isCompact = localStorage.getItem('compactMode') === 'true';
    
    if (isCompact) {
        document.body.classList.add('compact-mode');
        if (compactToggle) compactToggle.checked = true;
    }
    
    if (compactToggle) {
        compactToggle.addEventListener('change', (e) => {
            const enabled = e.target.checked;
            if (enabled) {
                document.body.classList.add('compact-mode');
            } else {
                document.body.classList.remove('compact-mode');
            }
            localStorage.setItem('compactMode', enabled);
        });
    }
}

function initDiscordAuth() {
    const addBotBtn = document.getElementById('addBotBtn');
    const discordConnectBtn = document.getElementById('discordConnectBtn');
    const discordAuthBtn = document.getElementById('discordAuthBtn');
    
    if (addBotBtn) {
        addBotBtn.addEventListener('click', () => {
            window.open(DISCORD_BOT_INVITE, '_blank');
        });
    }
    
    if (discordConnectBtn) {
        discordConnectBtn.addEventListener('click', () => {
            initiateDiscordLogin();
        });
    }
    
    if (discordAuthBtn) {
        discordAuthBtn.addEventListener('click', () => {
            initiateDiscordLogin();
        });
    }
    
    checkAuthCallback();
}

function initiateDiscordLogin() {
    const authUrl = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(DISCORD_REDIRECT_URI)}&response_type=code&scope=identify%20guilds`;
    window.location.href = authUrl;
}

function checkAuthCallback() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code) {
        handleAuthCode(code);
    }
}

function handleAuthCode(code) {
    console.log('Auth code received:', code);
    
    window.history.replaceState({}, document.title, window.location.pathname);
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-reveal');
            }
        });
    }, observerOptions);
    
    const animateElements = document.querySelectorAll('.feature-block, .setting-item, .policy-section');
    animateElements.forEach(el => observer.observe(el));
}

function initButtons() {
    const allButtons = document.querySAll('button, .neon-btn, .discord-connect-btn');
    
    allButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            createRipple(e, this);
        });
    });
}

function createRipple(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple-effect');
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function initSettings() {
    const clearDataBtn = document.getElementById('clearDataBtn');
    
    if (clearDataBtn) {
        clearDataBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear all locally stored data? This action cannot be undone.')) {
                localStorage.clear();
                sessionStorage.clear();
                alert('All local data has been cleared.');
                location.reload();
            }
        });
    }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'system') {
        applyTheme('system');
    }
});

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: var(--dark-card);
        border: 1px solid var(--neon-green);
        border-radius: var(--radius-md);
        color: var(--dark-text);
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

const style = document.createElement('style');
style.textContent = `
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        pointer-events: none;
        animation: ripple 0.6s ease-out;
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);

console.log('Vyre website initialized');
