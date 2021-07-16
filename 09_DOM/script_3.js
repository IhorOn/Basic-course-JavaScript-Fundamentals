document.body.socialMedia = {
    facebook: 'https://www.facebook.com/',
    vkontakte: 'https://vk.com/',
    instagram: 'https://www.instagram.com/',
    youtube: 'https://www.youtube.com/',
    linkedin: 'https://www.linkedin.com/',
};

for (let li of document.querySelectorAll('[data-network]')) {
    let link = li.getAttribute('data-network');
    li.innerHTML = document.body.socialMedia[link];
}
console.log(document.body.socialMedia);

