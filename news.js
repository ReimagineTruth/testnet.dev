document.addEventListener('DOMContentLoaded', () => {
    const newsForm = document.getElementById('newsForm');
    const newsPosts = document.getElementById('newsPosts');

    // Load existing posts from local storage
    const posts = JSON.parse(localStorage.getItem('newsPosts')) || [];
    displayPosts();

    // Handle form submission
    newsForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        const newPost = {
            title,
            content,
            date: new Date().toLocaleString()
        };

        posts.push(newPost);
        localStorage.setItem('newsPosts', JSON.stringify(posts));

        displayPosts();
        newsForm.reset();
    });

    // Function to display all posts
    function displayPosts() {
        newsPosts.innerHTML = '';
        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.className = 'bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md';
            postElement.innerHTML = `
                <h2 class="text-2xl font-semibold">${post.title}</h2>
                <p class="mt-2 text-gray-700 dark:text-gray-300">${post.content}</p>
                <p class="text-sm text-gray-500 mt-4">Posted on: ${post.date}</p>
            `;
            newsPosts.appendChild(postElement);
        });
    }
});
