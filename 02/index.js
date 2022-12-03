var year = 2022;
var holidays = ['01/06', '04/01', '12/25']; // formato MM/DD
function countHours(year, holidays) {
    return holidays.reduce(function (acc, current) { return (new Date("".concat(year, "/").concat(current)).getDay()) % 6 !== 0 ? acc + 2 : acc; }, 0);
}
var res = countHours(year, holidays);
console.log(res);
