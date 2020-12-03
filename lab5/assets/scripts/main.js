"use strict";

const user = `{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}`;
function parseJson(data, callback) {
    return callback(JSON.parse(data));
}
function callback1(data) {
    return parseInt(data.id) + parseFloat(data.address.geo.lng);
}

function callback2(data) {
    return [data.name, data.address.street].join(" ");
}
function add(a, b) {
    return a + b;
}
function create(name, username) {
    return {
        name,
        username,
    };
}
function promise1(data) {
    return new Promise((resolve, reject) => {
        if (
            data.address &&
            data.address.geo &&
            data.address.geo.lng &&
            data.address.geo.lat
        ) {
            resolve(
                add(
                    parseFloat(data.address.geo.lat),
                    parseFloat(data.address.geo.lng)
                )
            );
        } else {
            reject("incorrect data");
        }
    });
}
function promise2(data) {
    return new Promise((resolve, reject) => {
        if (data.name && data.username) {
            resolve(create(data.name, data.username));
        } else {
            reject("incorrect data");
        }
    });
}

console.log(`callback1: ${parseJson(user, callback1)}`);
console.log(`callback2: ${parseJson(user, callback2)}`);

axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
    promise1(res.data)
        .then((sum) => console.log(`promise 1: ${sum}`))
        .catch((err) => console.log(err))
        .finally(() => console.log("zakonczono promise 1"));
    promise2(res.data)
        .then((o) => console.log(`promise 2: ${JSON.stringify(o)}`))
        .catch((err) => console.log(err))
        .finally(() => console.log("zakonczono promise 2"));
});

async function async1() {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users/1"
        );
        console.log(
            `async1: ${add(
                parseFloat(response.data.address.geo.lat),
                parseFloat(response.data.address.geo.lng)
            )}`
        );
    } catch (e) {
        console.log(e);
    }
}
async1();
async function async2() {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users/1"
        );
        console.log(
            `async2: ${JSON.stringify(
                create(response.data.name, response.data.username)
            )}`
        );
    } catch (e) {
        console.log(e);
    }
}
async2();

function ajax1() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1", [true]);
    xhr.send();
    xhr.onload = () => {
        const user = JSON.parse(xhr.response);
        console.log(
            `ajax 1: ${add(
                parseFloat(user.address.geo.lat),
                parseFloat(user.address.geo.lng)
            )}`
        );
    };
    xhr.onerror = () => {
        console.log("xhr network error");
    };
}
ajax1();
function ajax2() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1", [true]);
    xhr.send();
    xhr.onload = () => {
        const user = JSON.parse(xhr.response);
        console.log(
            `ajax 2: ${JSON.stringify(create(user.name, user.username))}`
        );
    };
    xhr.onerror = () => {
        console.log("xhr network error");
    };
}
ajax2();

function fetch1() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res) =>
            res
                .json()
                .then((json) =>
                    console.log(
                        `fetch 1: ${add(
                            parseFloat(json.address.geo.lat),
                            parseFloat(json.address.geo.lng)
                        )}`
                    )
                )
                .catch((err) => console.log(err))
        )
        .catch((err) => console.log(err));
}
fetch1();

function fetch2() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res) =>
            res
                .json()
                .then((json) =>
                    console.log(
                        `fetch 2: ${JSON.stringify(
                            create(json.name, json.username)
                        )}`
                    )
                )
                .catch((err) => console.log(err))
        )
        .catch((err) => console.log(err));
}
fetch2();

function axios1() {
    axios
        .get("https://jsonplaceholder.typicode.com/users/1")
        .then((res) =>
            console.log(
                `axios 1: ${add(
                    parseFloat(res.data.address.geo.lat),
                    parseFloat(res.data.address.geo.lng)
                )}`
            )
        )
        .catch((err) => console.log(err));
}
axios1();

function axios2() {
    axios
        .get("https://jsonplaceholder.typicode.com/users/1")
        .then((res) =>
            console.log(
                `axios 2: ${JSON.stringify(
                    create(res.data.name, res.data.username)
                )}`
            )
        )
        .catch((err) => console.log(err));
}
axios2();
