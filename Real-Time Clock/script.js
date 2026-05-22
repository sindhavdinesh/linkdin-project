/**
 * Chronos Modern - Core Logic
 * Author: Senior Frontend Engineer
 */

class ChronosApp {
    constructor() {
        // State Initialization
        this.state = {
            is24h: localStorage.getItem('format') === '24' || false,
            theme: localStorage.getItem('theme') || 'dark',
            prevTime: { h: '', m: '', s: '' }
        };

        // DOM Cache
        this.elements = {
            hours: document.getElementById('hours'),
            minutes: document.getElementById('minutes'),
            seconds: document.getElementById('seconds'),
            period: document.getElementById('period'),
            date: document.getElementById('date'),
            formatStatus: document.getElementById('formatStatus'),
            themeStatus: document.getElementById('themeStatus'),
            root: document.documentElement
        };

        this.init();
    }

    init() {
        // Initial setup
        this.applyTheme();
        this.updateUIStrings();
        
        // Start Clock
        this.tick();
        setInterval(() => this.tick(), 1000);

        // Event Listeners
        document.getElementById('formatToggle').addEventListener('click', () => this.toggleFormat());
        document.getElementById('themeToggle').addEventListener('click', () => this.toggleTheme());
    }

    tick() {
        const now = new Date();
        
        let h = now.getHours();
        const m = this.pad(now.getMinutes());
        const s = this.pad(now.getSeconds());
        const period = h >= 12 ? 'PM' : 'AM';

        // 12h Logic
        if (!this.state.is24h) {
            h = h % 12 || 12; // Converts 0 to 12
            this.elements.period.style.display = 'block';
        } else {
            this.elements.period.style.display = 'none';
        }

        const formattedH = this.pad(h);

        // Efficient DOM Updates: Only update if value changed
        if (this.state.prevTime.h !== formattedH) this.elements.hours.textContent = formattedH;
        if (this.state.prevTime.m !== m) this.elements.minutes.textContent = m;
        if (this.state.prevTime.s !== s) this.elements.seconds.textContent = s;
        
        this.elements.period.textContent = period;
        this.updateDate(now);

        // Update State Cache
        this.state.prevTime = { h: formattedH, m, s };
    }

    pad(num) {
        return num < 10 ? `0${num}` : num;
    }

    updateDate(dateObj) {
        const options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' };
        const dateStr = dateObj.toLocaleDateString('en-US', options);
        if (this.elements.date.textContent !== dateStr) {
            this.elements.date.textContent = dateStr;
        }
    }

    toggleFormat() {
        this.state.is24h = !this.state.is24h;
        localStorage.setItem('format', this.state.is24h ? '24' : '12');
        this.updateUIStrings();
        this.tick(); // Immediate update for UX
    }

    toggleTheme() {
        this.state.theme = this.state.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', this.state.theme);
        this.applyTheme();
        this.updateUIStrings();
    }

    applyTheme() {
        this.elements.root.setAttribute('data-theme', this.state.theme);
    }

    updateUIStrings() {
        this.elements.formatStatus.textContent = this.state.is24h ? '24H' : '12H';
        this.elements.themeStatus.textContent = this.state.theme.charAt(0).toUpperCase() + this.state.theme.slice(1);
    }
}

// Instantiate on Load
window.addEventListener('DOMContentLoaded', () => new ChronosApp());