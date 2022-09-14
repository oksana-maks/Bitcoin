
let button = document.getElementById('button');
let result;
let bitcoin_price;
let dollars;

button.addEventListener('click', function () {

    bitcoin_price = document.getElementById('bitcoin_price').value;
    dollars = document.getElementById('dollars').value;

    if (bitcoin_price != '' && dollars != '') {
        document.getElementById('result').value = (dollars / bitcoin_price).toFixed(7) + ' BTC';
    }
}
)





