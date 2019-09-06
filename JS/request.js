
/*Creation of a module (to handle files requests), to increase maintainability and reusability*/
const localRequest = () => {
    /*async function to get local file (in this case a .txt file) */
    const getText = async ()=> {
        /* call of the file throw the fetch function (function that replaces de common XHRhttpRequest) */
        const response = await fetch('./Files/text.txt');
        /* use of await to handle the promise (cleaner than use .then() and .catch()) */
        /* convert the response of fetch() to text */
        const data = await response.text();
        /* pass the data from the file to the UI */
        document.querySelector('.contentContainer').innerHTML=data;
    }
    /*async function to get local file (in this case a .json file) */
    const getJSON = async () => {
        const response = await fetch('./Files/json.json');
        /* convert the response of fetch() to json */
        const data = await response.json();
        /* initialize the variable to store the responde of the request */
        let innerHTML = ' ';
        /* store in the variable each one of the elements */
        data.forEach((element) => {
            innerHTML += `  <div class="card">
                                <div class="cardHeader"><b>Userd ID:</b> ${element.userId}</div>
                                <div class="cardBody">
                                    <b>Title:</b> ${element.title} <br><br>
                                    <b>Status:</b> ${element.completed}
                                </div>
                            </div>`;
        });
        /* pass the data from the file to the UI */
        document.querySelector('.contentContainer').innerHTML=innerHTML;
    }
    /* return of the function to be accessed from outside the module */
    return{
        getText: getText,
        getJSON: getJSON
    };
}
/*Creation of a module (to handle api requests), to increase maintainability and reusability*/
const apiRequest = () =>{
    const getUsers = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        let innerHTML = ' ';
        data.forEach((element) => {
            innerHTML += `  <div class="card">
                                <div class="cardHeader"><b>Userd ID:</b> ${element.id}</div>
                                <div class="cardBody">
                                    <b>Name:</b> ${element.name} <br><br>
                                    <b>Email:</b> ${element.email} <br><br>
                                    <b>Address:</b> ${element.address.street}, ${element.address.suite}, ${element.address.city} <br><br>
                                    <b>Phone:</b> ${element.phone} <br><br>
                                    <b>Company:</b> ${element.company.name}
                                </div>
                            </div>`;
        });
         /* pass the data from the file to the UI */
         document.querySelector('.contentContainer').innerHTML=innerHTML;
    }
    const getPosts = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        let innerHTML = ' ';
        data.forEach((element) => {
            innerHTML += `  <div class="card">
                                <div class="cardHeader"><b>Title ID:</b> ${element.userId}</div>
                                <div class="cardBody">
                                    <b>ID:</b> ${element.id} <br><br>
                                    <b>Title:</b> ${element.title} <br><br>
                                    <b>Body:</b> ${element.body} 
                                </div>
                            </div>`;
        });
         /* pass the data from the file to the UI */
         document.querySelector('.contentContainer').innerHTML=innerHTML;
    }
    return{
        getUsers: getUsers,
        getPosts: getPosts
    }
}

/* addEventListener to get file .txt */
document.querySelector('#textButton').addEventListener('click',localRequest().getText);
/* addEventListener to get file .json */
document.querySelector('#jsonButton').addEventListener('click',localRequest().getJSON);
/* addEventListener to get users from API */
document.querySelector('#usersButton').addEventListener('click',apiRequest().getUsers);
/* addEventListener to get users from API */
document.querySelector('#postsButton').addEventListener('click',apiRequest().getPosts);

