/**
 *
 *
 * @param {String} s
 */
function timeConversion(s) {
    // eslint-disable-next-line
    let [hour, minute, secondWithDenote] = s.split(':')
    const second = secondWithDenote.substring(0, 2)
    const isAm = /am/i.test(secondWithDenote)
    if (isAm) {
        hour = hour === '12' ? '00' : hour
    } else {
        hour = hour === '12' ? hour : +hour + 12
    }

    return `${hour}:${minute}:${second}`
}

export {
    timeConversion
}