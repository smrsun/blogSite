// GRAB reference to THE HTML elements
const formEl = document.getElementById('blog-form');
let savedData = JSON.parse(localStorage.getItem('blogs')) || [];

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Submitting...');

  // I want to capture data
  let username = document.getElementById('username').value;
  let title = document.getElementById('title').value;
  let content = document.getElementById('content').value;

  // collect the important data
  let tempBlog = {
    username: username,
    title: title,
    content: content,
  };

  // add the new tempdata
  savedData.push(tempBlog);

  // write the new dataset(Array) to localStorage
  localStorage.setItem('blogs', JSON.stringify(savedData));

  // redirect to new page
  window.location.href = './blog.html';
});
