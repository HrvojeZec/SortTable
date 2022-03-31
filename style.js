// AJAX pozivi (moderni funkcija: fetch) // GET, POST, DELETE, PATCH, PUT
// Node.js + Express.js (web framework za Node.js)

//route.get()


// Baza (Firebase)
var clubs = [
    { "position": 1, "image": "/images/Manchester_City_FC.png", "name": "Manchester City", "played": 29, "won": 22, "drawn": 4, "lose": 3, "gd": +50, "points": "" },
    { "position": 2, "image": "/images/Liverpool_FC.png", "name": "Liverpool", "played": 29, "won": 21, "drawn": 6, "lose": 2, "gd": +55, "points": "" },
    { "position": 3, "image": "/images/Chelsea_FC.png", "name": "Chelsea", "played": 28, "won": 17, "drawn": 8, "lose": 3, "gd": +38, "points": "" },
    { "position": 4, "image": "/images/Arsenal_FC.png", "name": "Arsenal", "played": 28, "won": 17, "drawn": 3, "lose": 8, "gd": +13, "points": "" },
    { "position": 5, "image": "/images/Tottenham_hotspur.png", "name": "Tottenham Hotspur", "played": 29, "won": 16, "drawn": 3, "lose": 10, "gd": +11, "points": "" },
    { "position": 6, "image": "/images/Manchester_United_FC.png", "name": "Manchester United", "played": 29, "won": 14, "drawn": 8, "lose": 7, "gd": +8, "points": "" },
    { "position": 7, "image": "/images/West_Ham_United_FC.png", "name": "West Ham United", "played": 30, "won": 14, "drawn": 6, "lose": 10, "gd": +10, "points": "" },
    { "position": 8, "image": "/images/wolverhampton.png", "name": "Wolverhampton Wanderers", "played": 30, "won": 14, "drawn": 4, "lose": 12, "gd": +5, "points": "" },
    { "position": 9, "image": "/images/Aston_villa_FC.svg.png", "name": "Aston Villa", "played": 29, "won": 11, "drawn": 3, "lose": 15, "gd": +1, "points": "" },
    { "position": 10, "image": "/images/Leicester_City_crest.png", "name": "Leicster City", "played": 27, "won": 10, "drawn": 6, "lose": 11, "gd": -4, "points": "" },
    { "position": 11, "image": "/images/southampton.png", "name": "Southampton", "played": 29, "won": 8, "drawn": 11, "lose": 10, "gd": -9, "points": "" },
    { "position": 12, "image": "/images/Crystal_palace_FC.png", "name": "Crystal Palace", "played": 29, "won": 7, "drawn": 13, "lose": 9, "gd": +1, "points": "" },
    { "position": 13, "image": "/images/brighton.png", "name": "Brighton and Hove Albion", "played": 29, "won": 7, "drawn": 12, "lose": 10, "gd": -10, "points": "" },
    { "position": 14, "image": "/images/Newcastle_United.png", "name": "Newcastle United", "played": 29, "won": 7, "drawn": 10, "lose": 12, "gd": -17, "points": "" },
    { "position": 15, "image": "/images/Brentford_FC.png", "name": "Brentford", "played": 30, "won": 8, "drawn": 6, "lose": 16, "gd": -14, "points": "" },
    { "position": 16, "image": "/images/Leeds.png", "name": "Leeds United", "played": 30, "won": 7, "drawn": 8, "lose": 15, "gd": -33, "points": "" },
    { "position": 17, "image": "/images/everton.png", "name": "Everton", "played": 27, "won": 7, "drawn": 4, "lose": 16, "gd": -18, "points": "" },
    { "position": 18, "image": "/images/Watford.png", "name": "Watford", "played": 29, "won": 6, "drawn": 4, "lose": 19, "gd": -26, "points": "" },
    { "position": 19, "image": "/images/Burnley.png", "name": "Burnley", "played": 27, "won": 3, "drawn": 12, "lose": 12, "gd": -16, "points": "" },
    { "position": 20, "image": "/images/Norwich_City.png", "name": "Norwich City", "played": 29, "won": 4, "drawn": 5, "lose": 20, "gd": -45, "points": "" },
];

$(document).ready(function () {
    $("th").on("click", function () {
        var column = $(this).data("column");
        var order = $(this).data("order");
        var text = $(this).html();
        text = text.substring(0, text.length - 1);
        //const clubsClone = clubs.slice(); // duplicirati ili klonirati array
        //const sortedClubs = []; // ...
        if (order == "desc") {
            $(this).data("order", "asc");
            clubs = clubs.sort((a, b) => a[column] > b[column] ? 1 : -1);

            text += '&#9651';
        } else {
            $(this).data("order", "desc");
            clubs = clubs.sort((a, b) => a[column] < b[column] ? 1 : -1);
            text += '&#9661';
        }
        $(this).html(text);

        console.log(column, order);
        buildTable(clubs);
    });

    const buildTable = (data) => {
        const tableContent = document.getElementById("myTable");

        const rows = [];

        for (let i = 0; i < data.length; i++) {
            const tableRow = document.createElement('tr');
            const rowData = data[i];
            const row = `<tr>
                            <td>${data[i].position}.</td>
                            <td><img src="${rowData.image}" width="24"> ${data[i].name}</td>
                            <td>${data[i].played}</td>
                            <td>${data[i].won}</td>
                            <td>${data[i].drawn}</td>
                            <td>${data[i].lose}</td>
                            <td>${data[i].gd}</td>
                            <td>${data[i].won * 3 + rowData.drawn}</td>
                        </tr>`;
            /* const row2 = [
                 '<tr>',
                 '<td>${data[i].position})</td>',
             ].join('')*/
            rows.push(row);
        }

        tableContent.innerHTML = rows.join('');
    }

    buildTable(clubs);
});