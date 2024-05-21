//  need to GRAB reference to THE HTML elements
const formEl = document.getElementById('blog-form');
const userInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');


// I want a button press to trigger when to capture the data

formEl.addEventListener('submit', function(event) {
    event.preventDefault()
    console.log("Submitting...");

    // I want to capture data
    let username = userInput.value
    let title = titleInput.value
    let content = contentInput.value;

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
