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
    let cards = '<p><b>Total:</b> ' + data.length + '</p><div class="cards">';
    data.map(function(item, index) {
        let card = '<div class="card">';
        card += '<div class="card-header">';
        card += '<span class="id">' + (index + 1) + '</span>' + item.name.title + ' ' + item.name.first + ' ' + item.name.last + ' &middot; <small>(' + item.dob.age + ')</small></div>';
        card += '<div class="card-body">';
        card += '<img src="' + item.picture.medium + '" alt="" aria-hidden="true" />';
        card += '<address>' + item.location.street.number + '  '  + item.location.street.name + ',<br />';
        card += item.location.city + ',<br />'  + item.location.state + ',<br />' + item.location.country + '.<br />';
        card += item.location.postcode + '</address><hr />';
        card += '<p><b>Cell:</b> '+ item.cell + '<br />';
        card += '<b>Phone:</b> '+ item.phone + '<br />';
        card += '<b>Email:</b> '+ item.email + '</p>';
        card += '</div>';        
        card += '</div>';

        cards += card;
    }, 80);
    cards += '</div>';
    document.getElementById('cards').innerHTML = cards;
}



