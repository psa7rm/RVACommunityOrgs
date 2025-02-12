document.addEventListener('DOMContentLoaded', function () {
    const linkForm = document.getElementById('linkForm');
    const linkList = document.getElementById('linkList');

    // Load links from local storage
    loadLinks();

    linkForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const linkName = document.getElementById('linkName').value;
        const linkUrl = document.getElementById('linkUrl').value;

        if (linkName && linkUrl) {
            addLink(linkName, linkUrl);
            linkForm.reset();
        }
    });

    function addLink(name, url) {
        const links = JSON.parse(localStorage.getItem('links')) || [];
        links.push({ name, url });
        localStorage.setItem('links', JSON.stringify(links));

        loadLinks();
    }

    function loadLinks() {
        const links = JSON.parse(localStorage.getItem('links')) || [];
        links.forEach(link => {
            const li = document.createElement('li');
            li.innerHTML = `
                <a href="${link.url}" target="_blank">${link.name}</a>
                <p>User-added opportunity.</p>
            `;
            linkList.appendChild(li);
        });
    }
});