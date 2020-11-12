function zadanie1(txt) {
    return "Liczba liter: " + txt.length;
}

function zadanie2(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

function zadanie3(txt) {
    return Array.from(txt)
        .map((val, idx) =>
            idx % 2 == 0 ? val.toUpperCase() : val.toLowerCase()
        )
        .join("");
}
function zadanie4(a, b) {
    return typeof a === "number" && typeof b === "number" ? a * b : false;
}
function zadanie5(imie, miesiac) {
    let akcja = "";
    miesiac = miesiac.toLowerCase();
    switch (miesiac) {
        case "grudzien":
        case "styczen":
        case "luty":
            akcja = "jezdzi na sankach";
            break;
        case "marzec":
        case "kwiecien":
        case "maj":
            akcja = "chodzi po kaluzach";
            break;
        case "czerwiec":
        case "lipiec":
        case "sierpien":
            akcja = "sie opala";
            break;
        case "wrzesien":
        case "pazdziernik":
        case "listopad":
            akcja = "zbiera liscie";
            break;
    }
    return imie + " " + akcja;
}

function zadanie6(txt, del) {
    return txt.split(del).sort().join(del);
}
function zadanie7a(arr) {
    return arr.map((val) => val.toUpperCase());
}
function zadanie7b(arr) {
    return arr.map(zadanie3);
}
function zadanie8(imie) {
    return imie[imie.length - 1] === "a" ? true : false;
}
function zadanie9() {
    const users = [
        "Ania Nowak",
        "Piotr Kowalski",
        "Bartek Kosecki",
        "Natalia Nowak",
        "Weronika Piotrowska",
        "Agata Beatczak",
        "Tomasz Nowak",
        "Mateusz Kowalski",
        "Marcin Kotecki",
        "Betata Lecka",
        "Katarzyna Melecka",
    ];
    return users
        .map((val) => val.split(" ")[0])
        .filter(zadanie8)
        .reduce((acc) => acc + 1, 0);
}

console.info('zadanie1("ala ma kota") :' + zadanie1("ala ma kota"));
console.info("zadanie2([1, 2, 3, 4, 5]) :" + zadanie2([1, 2, 3, 4, 5]));
console.info('zadanie3("Ala ma kota") :' + zadanie3("Ala ma kota"));
console.info("zadanie4(2, 3) :" + zadanie4(2, 3));
console.info('zadanie5("Ala", "Grudzien") :' + zadanie5("Ala", "Grudzien"));
console.info(
    'zadanie6("Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka", "|") :' +
        zadanie6("Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka", "|")
);
console.info(
    'zadanie7a(["Ania", "Marcin", "Bartek", "Piotr"]) :' +
        zadanie7a(["Ania", "Marcin", "Bartek", "Piotr"])
);
console.info(
    'zadanie7b(["Ania", "Marcin", "Bartek", "Piotr"]) :' +
        zadanie7b(["Ania", "Marcin", "Bartek", "Piotr"])
);
console.info('zadanie8("Ala") :' + zadanie8("Ala"));
console.info("zadanie9() :" + zadanie9());
