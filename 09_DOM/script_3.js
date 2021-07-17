const socialMedia = {};
const socialLinks = document.body.querySelectorAll('.social-links__link');

for (let link of socialLinks) {
    let key = link.getAttribute('data-network');
    let value = link.href;
    socialMedia[key] = value;
};

console.log(socialMedia);


