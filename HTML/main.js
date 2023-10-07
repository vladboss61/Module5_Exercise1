console.log('Hello World Example');

const anonymousFunction = function(num) {
    console.log(`hello anonymousFunction ${num}`);
}

function createATag(link) {
    // window | document only in browser's js code.

    const createdATag = document.createElement('a');
    createdATag.href = link;
    createdATag.innerText = 'Google Created Link';

    const place_holder = document.getElementById('place_holder');
    console.log(createdATag);
    place_holder.appendChild(createdATag);
}

// JS of latest version has classes.
class User {
    id;
    avatar;
    email;
    first_name;
    last_name;

    constructor(
        id, avatar, email, first_name, last_name) {
            this.id = id;
            this.avatar = avatar;
            this.email = email;
            this.first_name = first_name;
            this.last_name = last_name;
    }
}

class UsersResponse {
    page;
    per_page;
    total;
    total_pages;
    data;

    constructor(
        page, per_page, total, total_pages, data) {
            this.page = page;
            this.per_page = per_page;
            this.total = total;
            this.total_pages = total_pages;
            
            const dataArray = [];

            data.forEach(element => {
                dataArray.push(
                new User(
                    element.id,
                    element.avatar,
                    element.email,
                    element.first_name,
                    element.last_name))
            });

            this.data = data;
        }
};

function fetchReqresUsingFetch() {
    const reqres = "https://reqres.in";

    // Make http request using fetch operation
    fetch(`${reqres}/api/users?page=2`)
    .then(async response => {
        const bodyObject = await response.json();
        console.log(bodyObject);
        const usersResponse = new UsersResponse(
            bodyObject.page,
            bodyObject.per_page,
            bodyObject.total,
            bodyObject.total_pages,
            bodyObject.data);
    
        const domDataResult = [];
        usersResponse.data.forEach(x => {
            domDataResult.push(`<div class='blue'>${x.id} - ${x.first_name} : ${x.last_name}</div>`)
        });
    
        console.log('domDataResult:', domDataResult)
        console.log('domDataResult:', String(domDataResult))
    
        document.getElementById('box').innerHTML = `<div>${domDataResult}</div>`;
    
        console.log(usersResponse);
    });
    
    
    const postData = {
        name: "morpheus",
        job: "leader"
    }
    
    console.log('PostData:', JSON.stringify(postData))
    
    fetch(`${reqres}/api/users`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow", // manual, *follow, error
        body: JSON.stringify(postData), // body data type must match "Content-Type" header
      })
      .then((responsePost) => {
        return responsePost.json(); // parses JSON response into native JavaScript objects;
      })
      .then(postBody => {
        console.log('ResponsePost:', postBody);
      });

      // You can also use
}

function fetchDataUsingXMLHttpRequest() {
    // Create a new XMLHttpRequest object.
    var xhr = new XMLHttpRequest();

    // Configure the request: GET method and the URL you want to fetch data from.
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

    // Set up a callback function to handle the response.
    xhr.onload = function () { // or you can use arrow function here also () => 
        if (xhr.status === 200) {
            // If the request is successful (status code 200), parse the response.
            console.log('fetchDataUsingXMLHttpRequest Result:');
            const responseData = JSON.parse(xhr.responseText);
            console.log(responseData)
        } else {
            console.log("Error: " + xhr.status);
        }
    };

    // Send the request.
    xhr.send();
}


const createObject = () => {
    return {
        name: 'Vlad',
        age: 25,
        careerProfile: {
            position: 'Software Engineer',
            description: 'Working in GL company and teaching in A-Level school.',
            duration: 5
        },
        preferences: ['Reading', 'Coding', 'Games', 'Tea', 'Literature', 'Photos', 'Driving']
    }
}

function main() {
    anonymousFunction();
    anonymousFunction(9999);

    fetchReqresUsingFetch();
    fetchDataUsingXMLHttpRequest();
    
    setTimeout(() => {
        createATag('https://google.com');
    }, 3000);

    // Loops
    let index = 0;
    document.getElementById("box").innerText = "asdasd";
    while(index < 10) {
        console.log("Hello World!." + index);
        index++;
    }

    let array = [1,2,3,4,5];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        // if
        if (element % 2 == 0) {
            console.log(`Wow, its even: ${element}`);
        }

        console.log(`Element: ${element}`);
    }

    const example = {
        property1: 'Property1',
        property2: 20,
        property3: [{ innerProperty1: 'innerProperty1' }]
    }

    console.log(example);
    const me = createObject();

    console.log(me.name)
    console.log(me.age)
    console.log(me)
}


main();

