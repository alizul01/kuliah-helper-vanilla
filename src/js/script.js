const featuresContainer = document.querySelector(".features__container");
const testimonialsBox = document.querySelector(".testimonials__box");

let features_data = {
    img: ["calendar", "open-book", "brain"],
    title: ["Schedule", "Learn", "Relief Stress"],
    description: [
        "You can manage your schedule with this app. You can add, edit, and delete your schedule.",
        "Learn and study more with other student! You can share your notes and study together.",
        "Relief your stress, don't blame urself :) You can play with us!"
    ],
};

while (features_data.img.length > 0) {
    let img = features_data.img.shift();
    let title = features_data.title.shift();
    let description = features_data.description.shift();
    let inner = `
                    <div class="card">
                        <div class="card__image">
                            <img src="./../src/assets/img/${img}.png" alt="features1">
                        </div>
                        <div class="card__content">
                            <h3 class="card__title">
                                ${title}
                            </h3>
                            <p class="card__description">
                                ${description}
                            </p>
                        </div>
                    </div>
    `;

    featuresContainer.innerHTML += inner;
}

let testimonialsData = {
    name: ["Isabella", "John Doe", "Brian Dry", "John Cena"],
    img: ["isabella", "doe", "john", "brian"],
    description: [
        "Kuliah helper is the best app for me. I can manage my schedule and study with my friends. I love this app! And the design is so modern, cool, and minimalist! I love it!",
        "Kuliah Helper membantu saya untuk mengatur jadwal belajar saya. Di samping itu saya juga dapat mengatur tugas-tugas saya. Dan saya juga dapat menghilangkan stres saya dengan bermain game yang tersedia di Kuliah Helper.",
        "OMG!! This app is so cool! I can manage my schedule and study with my friends. I love this app! And I can relief my stress with playing game!",
        "Well, i will give 5 stars for this innovation! I can play game and study with my friends. I love this app!"
    ],
};

while (testimonialsData.name.length > 0) {
    let name = testimonialsData.name.shift();
    let img = testimonialsData.img.shift();
    let description = testimonialsData.description.shift();
    let inner = `
                    <div class="testimonials__slideshow" hidden>
                        <div class="testimonials__image">
                            <img src="./../src/assets/img/testimonials_${img}.jpg" alt="features1">
                        </div>
                        <div class="testimonials__name">
                            <h3>${name}</h3>
                        </div>
                        <div class="testimonials__desc">
                            <p>
                                ${description}
                            </p>
                        </div>
                    </div>
    `;

    testimonialsBox.innerHTML += inner;
}

const btnNext = document.querySelector(".testi_next");
const btnPrev = document.querySelector(".testi_prev");

let testimonials = document.querySelectorAll(".testimonials__slideshow");
testimonials[0].style.display = "flex";

let index = 0;
let max = testimonials.length - 1;

btnNext.addEventListener('click', function() {
    testimonials[index++].style.display = "none";
    if (index > max) {
        index = 0;
    }

    testimonials[index].style.display = "flex";
});

btnPrev.addEventListener('click', function() {
    testimonials[index--].style.display = "none";
    if (index < 0) {
        index = max;
    }
    testimonials[index].style.display = "flex";
});
console.log(testimonials);