let index = 0;
document.getElementById("box").innerText = "asdasd";
while(index < 10) {
    console.log("Hello World!." + index);
    index++;
}


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
}

const reqres = "https://reqres.in";

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

