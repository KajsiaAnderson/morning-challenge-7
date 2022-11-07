// Write a function that turns a string of 24-hour time into words.
// You can trust that you’ll be given a valid string (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm.

let timeObj = {
    0: 'twelve',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'fourty',
    50: 'fifty'
}

function converNumtoStr(num) {
    if (num < 20 || num % 10 === 0) {
        return timeObj[num]
    } else {
        let oneCol = num % 10
        let tensCol = num - oneCol
        return timeObj[tensCol] + ' ' + timeObj[oneCol]
    }
}

function timeWord(time) {

    if (time === "00:00") {
        return 'midnight'
    } else if (time === "12:00") {
        return 'noon'
    }

    let timearray = time.split(':')
    let hour = +timearray[0]
    let minute = +timearray[1]


    let answerStr = ''
    if (hour === 0) {
        answerStr += converNumtoStr(12)
        timeOfDayAppendage = 'am'
    } else if (hour === 12){
        answerStr += converNumtoStr(hour)
        timeOfDayAppendage = 'pm'
    } else if (hour > 12) {
        answerStr += converNumtoStr(hour - 12)
        timeOfDayAppendage = 'pm'
    } else {
        answerStr += converNumtoStr(hour)
        timeOfDayAppendage = 'am'
    }

    timeOfDayAppendage += " "

    if (minute === 0) {
        answerStr += 'o\'clock'
    } else if (minute < 10) {
        answerStr += ' oh ' + converNumtoStr(minute) + ' '
    } else {
        answerStr += ' ' + converNumtoStr(minute) + ' '
    }

    return answerStr + timeOfDayAppendage

}





console.log(timeWord("01:00"))  // "one o'clock am"
console.log(timeWord("00:00"))  // 'midnight'
console.log(timeWord("12:00"))  // 'noon'
console.log(timeWord("06:01"))  // 'six oh one am'
console.log(timeWord("06:10"))  // 'six ten am'
console.log(timeWord("06:18"))  // 'six eighteen am'
console.log(timeWord("06:30"))  // 'six thirty am'
console.log(timeWord("10:34"))  // 'ten thirty four am'
console.log(timeWord("12:09"))  // 'twelve oh nine pm'
console.log(timeWord("23:23"))  // 'eleven twenty three pm'
console.log(timeWord("00:12"))  // 'twelve twelve am'
