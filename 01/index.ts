function wrapping(gifts: string[]): string[] {
    return gifts.map(gift => {
        let folding: string = '';
        for (let i = 0; i < gift.length; i++) folding += '*'
        return `${folding}**\n*${gift}*\n**${folding}`
    });
}

const gifts: string [] = ['book', 'game', 'socks'];
const result = wrapping(gifts);
console.log(result);
