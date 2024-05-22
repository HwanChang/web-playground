var pages = [
    { title: 'Login', description: '로그인 페이지', directory: 'LoginPage' },
]

var container = document.getElementById('card-container');
var cards = pages.map(page => {
    return `<div class="card">
        <div class="card-image">
            <iframe src="${page.directory}/index.html"></iframe>
        </div>
        <a href="${page.directory}/index.html">
            <div class="card-content">
                <h3 class="card-title">${page.title}</h3>
                <p class="card-description">${page.description}</p>
            </div>
        </a>
    </div>`
})

container.innerHTML = cards.join('');
