const slidesData = [
    {
        img: "https://images.hdqwalls.com/wallpapers/the-batman-silent-watcher-in-the-night-m5.jpg",
        title: "Batman",
        desc: "The Dark Knight."
    },
    {
        img: "https://images.hdqwalls.com/wallpapers/iron-man-the-power-of-a-rising-hero-zx.jpg",
        title: "Ironman",
        desc: "The Iron Man."
    },
    {
        img: "https://images.hdqwalls.com/wallpapers/the-spectacular-brand-new-spider-man-nn.jpg",
        title: "Spiderman",
        desc: "The Amazing Spider-Man."
    },
    {
        img: "https://images.hdqwalls.com/wallpapers/black-panther-the-panther-rises-da.jpg",
        title: "Black Panther",
        desc: "The King of Wakanda."
    },
    {
        img: "https://images.hdqwalls.com/wallpapers/marvel-duel-antman-b2.jpg",
        title: "Ant Man",
        desc: "The Ant Hero."
    }
];

class CinematicSlider {
    constructor(data) {
        this.data = data;
        this.currentIndex = 0;
        this.isTransitioning = false;
        this.autoPlayDelay = 5000;
        this.timer = null;
        this.touchStartX = 0;

        // DOM Elements
        this.slider = document.getElementById('slider');
        this.dotsContainer = document.getElementById('dots');
        this.progressBar = document.getElementById('progress');
        this.nextBtn = document.getElementById('nextBtn');
        this.prevBtn = document.getElementById('prevBtn');
        this.container = document.getElementById('carousel');

        this.init();
    }

    init() {
        this.renderSlides();
        this.renderDots();
        this.addEventListeners();
        this.startAutoPlay();

    this.bgBlur.style.backgroundImage = `url(${this.data[0].img})`;
}

    renderSlides() {
        this.slider.innerHTML = this.data.map((slide, i) => `
            <div class="slide ${i === 0 ? 'active' : ''}">
                <img src="${slide.img}" alt="${slide.title}">
                <div class="caption">
                    <h2>${slide.title}</h2>
                    <p>${slide.desc}</p>
                </div>
            </div>
        `).join('');
    }

    renderDots() {
        this.dotsContainer.innerHTML = this.data.map((_, i) => `
            <div class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>
        `).join('');
    }

    showSlide(index) {
        if (this.isTransitioning) return;
        this.isTransitioning = true;

        // Loop Logic
        if (index >= this.data.length) index = 0;
        if (index < 0) index = this.data.length - 1;

        this.currentIndex = index;

        // Update UI
        document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
        document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));

        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');

        slides[this.currentIndex].classList.add('active');
        dots[this.currentIndex].classList.add('active');

        // Reset progress bar
        this.resetProgressBar();

        setTimeout(() => { this.isTransitioning = false; }, 800);
    }

    nextSlide = () => this.showSlide(this.currentIndex + 1);
    prevSlide = () => this.showSlide(this.currentIndex - 1);

    stopAutoPlay() {
    if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
    }

    this.progressBar.style.transition = 'none';
    this.progressBar.style.width = '0%';
}

    resetProgressBar() {
        this.progressBar.style.transition = 'none';
        this.progressBar.style.width = '0%';
        setTimeout(() => {
            this.progressBar.style.transition = `width ${this.autoPlayDelay}ms linear`;
            this.progressBar.style.width = '100%';
        }, 50);
    }

    startAutoPlay() {
    this.stopAutoPlay(); 

    this.timer = setInterval(() => {
        this.nextSlide();
    }, this.autoPlayDelay);

    this.resetProgressBar();
}

    addEventListeners() {
        this.nextBtn.addEventListener('click', this.nextSlide);
        this.prevBtn.addEventListener('click', this.prevSlide);

        this.dotsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('dot')) {
                this.showSlide(parseInt(e.target.dataset.index));
            }
        });

        // Hover events
        this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.container.addEventListener('mouseleave', () => this.startAutoPlay());

        // Keyboard
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') this.nextSlide();
            if (e.key === 'ArrowLeft') this.prevSlide();
        });

        // Touch support
        this.container.addEventListener('touchstart', (e) => this.touchStartX = e.touches[0].clientX);
        this.container.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            if (this.touchStartX - touchEndX > 50) this.nextSlide();
            if (this.touchStartX - touchEndX < -50) this.prevSlide();
        });
    }
}

// Initialize the Slider
new CinematicSlider(slidesData);