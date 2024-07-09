let blogs = JSON.parse(localStorage.getItem('blogs')) || [];

// loop over the blogs (look at the activity for create and append)
const blogsContainer = document.getElementById('blogs');

// Loop over the array

blogs.forEach((blog) => {
  const blogDiv = document.createElement('div');
  const usernameEl = document.createElement('h2');
  const titleEl = document.createElement('h3');
  const contentEl = document.createElement('P');

  usernameEl.textContent = blog.username;
  titleEl.textContent = blog.title;
  contentEl.textContent = blog.content;

  blogDiv.appendChild(usernameEl);
  blogDiv.appendChild(titleEl);
  blogDiv.appendChild(contentEl);

  // Append blogDiv to the blogsContainer
  blogsContainer.appendChild(blogDiv);
});
