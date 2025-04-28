
// Scroll reveal for experiences
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in từng section
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Pin header trong 1.5 viewport đầu
    ScrollTrigger.create({
        trigger: 'header',
        start: 'top top',
        end: '+=150%',
        pin: true,
        pinSpacing: false
    });

    const items = document.querySelectorAll('.experience-item');
    const revealOnScroll = () => {
        const trigger = window.innerHeight * 0.9;
        items.forEach(item => {
            if (item.getBoundingClientRect().top < trigger) item.classList.add('visible');
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Lightbox functionality
    const overlay = document.getElementById('lightboxOverlay');
    const overlayImg = overlay.querySelector('img');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    const closeBtn = document.getElementById('lightboxClose');
    const imgs = Array.from(document.querySelectorAll('.experience-item img'));
    let currentIndex = 0;

    function showLightbox(index) {
        currentIndex = index;
        overlayImg.src = imgs[index].src;
        overlay.style.display = 'flex';
    }

    imgs.forEach((img, i) => {
        img.parentElement.addEventListener('click', () => showLightbox(i));
    });
    prevBtn.addEventListener('click', () => {
        showLightbox((currentIndex - 1 + imgs.length) % imgs.length);
    });
    nextBtn.addEventListener('click', () => {
        showLightbox((currentIndex + 1) % imgs.length);
    });
    closeBtn.addEventListener('click', () => overlay.style.display = 'none');
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.style.display = 'none'; });
});
(function () {
    const imgs = document.querySelectorAll('.parallax-3d');
    const speed = 0.25;  // điều chỉnh độ sâu 3D

    function updateParallax() {
        const viewportTop = window.scrollY;
        const viewportHeight = window.innerHeight;

        imgs.forEach(img => {
            const rect = img.getBoundingClientRect();
            const imgTop = rect.top + viewportTop;
            const imgCenter = imgTop + rect.height / 2;

            // tỉ lệ giữa tâm ảnh và viewport center (-1 .. 1)
            const viewportCenter = viewportTop + viewportHeight / 2;
            const distance = imgCenter - viewportCenter;
            const ratio = distance / (viewportHeight / 2);

            // tính góc xoay và dịch Z
            const rotateY = ratio * 15;                        // xoay tối đa 15°
            const translateZ = -Math.abs(ratio) * 100;         // dịch sâu tối đa 100px

            img.style.transform =
                `perspective(800px) 
           translateZ(${translateZ}px) 
           rotateY(${rotateY}deg)`;
        });
    }

    // update liên tục khi scroll và resize
    window.addEventListener('scroll', updateParallax, { passive: true });
    window.addEventListener('resize', updateParallax);

    // khởi chạy 1 lần
    updateParallax();
})();
(function () {
    const items = document.querySelectorAll('.hobby-item');
    const windowHeight = window.innerHeight;

    function onScroll() {
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            // Khi top của item <= 80% chiều cao viewport, show
            if (rect.top < windowHeight * 0.8) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
            // Ngoài ra, cập nhật 3D depth tuỳ theo vị trí
            const ratio = (rect.top - windowHeight / 2) / (windowHeight / 2);
            const rotateY = ratio * 20;    // xoay tối đa 20°
            const translateZ = -Math.abs(ratio) * 150; // dịch sâu tối đa 150px
            item.style.transform =
                `translateZ(${translateZ}px) rotateY(${rotateY}deg)`;
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // Khởi chạy 1 lần
    onScroll();
})();
// Không dùng STORAGE_KEY nữa

// Generate random nickname
const adjectives = ['Tiny', 'Fluffy', 'Chubby', 'Happy', 'Sunny', 'Bouncy', 'Cuddly', 'Lovely'];
const nouns = ['Bunny', 'Kitten', 'Puppy', 'Duckling', 'Panda', 'Lamb', 'Hedgehog', 'Chick'];

function getRandomNickname() {
    return adjectives[Math.floor(Math.random() * adjectives.length)] +
        nouns[Math.floor(Math.random() * nouns.length)] +
        Math.floor(Math.random() * 1000);
}

// Load existing comments from Firebase
function loadComments() {
    const commentList = document.getElementById('comment-list');
    database.ref('comments').on('child_added', snapshot => {
        const comment = snapshot.val();
        renderComment(comment.nickname, comment.text);
    });
}

// Save comment to Firebase
function saveComment(nickname, text) {
    const newCommentRef = database.ref('comments').push();
    newCommentRef.set({
        nickname: nickname,
        text: text,
        timestamp: Date.now()
    });
}

// Render a single comment block
function renderComment(nickname, text) {
    const card = document.createElement('div');
    card.className = 'p-6 bg-[#222] rounded-2xl shadow-inner transform transition-transform duration-500 hover:-translate-y-2 hover:scale-105';
    card.innerHTML = `
    <div class="flex items-center mb-4">
      <div class="w-12 h-12 bg-blue-500 text-white font-bold flex items-center justify-center rounded-full shadow-lg">${nickname.charAt(0)}</div>
      <span class="ml-4 text-lg font-semibold text-white">${nickname}</span>
    </div>
    <p class="text-gray-300">${text}</p>
  `;
    document.getElementById('comment-list').prepend(card);
}

// Initialize form
document.addEventListener('DOMContentLoaded', () => {
    loadComments();
    const form = document.getElementById('comment-form');
    const textarea = document.getElementById('comment-input');

    // Submit on enter (no shift)
    textarea.addEventListener('keydown', e => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            form.requestSubmit();
        }
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        const text = textarea.value.trim();
        if (!text) return;
        const nickname = getRandomNickname();
        saveComment(nickname, text); // Lưu lên Firebase
        form.reset();
    });
});

const textarea = document.getElementById('comment-input');
textarea.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();                    // Ngăn việc xuống dòng
        document.getElementById('comment-form')
            .requestSubmit();              // Gửi form
    }
});
