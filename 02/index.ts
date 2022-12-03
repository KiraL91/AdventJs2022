const year: number = 2022;
const holidays = ['01/06', '04/01', '12/25']; // formato MM/DD

function countHours(year, holidays) {
    return holidays.reduce((acc, current) => (new Date(`${year}/${current}`).getDay()) % 6 !== 0 ? acc + 2 : acc, 0)
}

const res = countHours(year, holidays);
console.log(res)