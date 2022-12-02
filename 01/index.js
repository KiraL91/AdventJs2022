function wrapping(gifts) {
    return gifts.map(function (gift) {
        var folding = '';
        for (var i = 0; i < gift.length; i++)
            folding += '*';
        return "".concat(folding, "**\n*").concat(gift, "*\n**").concat(folding);
    });
}
var gifts = ['book', 'game', 'socks'];
var result = wrapping(gifts);
console.log(result);
