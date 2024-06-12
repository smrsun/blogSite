//  need to GRAB reference to THE HTML elements
const formEl = document.getElementById('blog-form');
const userEl = document.getElementById('username');
const titleEl = document.getElementById('title');
const contentEl = document.getElementById('content');


formEl.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log("Submitting...");

    // I want to capture data
    let username = userEl.value
    let title = titleEl.value
    let content = contentEl.value;

    console.log(username, title, content)

    // collect the important data
    let tempBlog = {
        username: username,
        title: title,
        content: content
    }
    // store data (localStorage)

    // check for existing saved data
    let savedData = localStorage.getItem('blogs');
    console.log("Local Storage: ", savedData);
    console.log("Data Type: ", typeof savedData);
    // if there is data we CONVERT (PARSE) it to JS
    let savedArray = JSON.parse(savedData);
    console.log("JS data: ", savedArray);
    console.log("Data Type: ", typeof savedArray);
    // We add the new tempdata
    savedArray.push(tempBlog)

    console.log("Array: ", savedArray)
    console.log("data type: ", typeof savedArray)

    // we WRITE the new dataset(Array) to localStorage
    localStorage.setItem('blogs', JSON.stringify(savedArray))
  //  localStorage.setItem('blogs', [])

   // const saved = {  // is JavaSrpit Object data Type
   //     key: value
   // }

    // JSON data type --> { "key": "value", }   --> String Data type

    // we want to redirect to new page
})
