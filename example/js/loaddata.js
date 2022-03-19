var users = {};

fetch("/example/userlist.json")
.then(res => {
    return res.json();
})
.then(data => {
    users = data.results;
    console.log('Users length = ' + users.length);
    renderData(users);
});

function renderData(data) {
    let cards = '<div class="cards">';
    data.map(function(item, index) {
        let card = '<div class="card">';
        card += '<div class="card-header">';
        card += '<b>' + (index + 1) + '</b>' + item.name.title + ' ' + item.name.first + ' ' + item.name.last + '</div>';
        card += '<div class="card-body">';
        card += '<img src="' + item.picture.large + '" alt="" aria-hidden="true" />';
        card += '</div>';        
        card += '</div>';

        cards += card;
    }, 80);
    cards += '<p>Cards = ' + data.length + '</div>';
    document.getElementById('cards').innerHTML = cards;
}



