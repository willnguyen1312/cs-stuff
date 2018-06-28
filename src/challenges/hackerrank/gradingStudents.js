/**
 *
 *
 * @param {Number[]} grades
 * 
 * @returns {Number[]} result
 */
function gradingStudents(grades) {
    return grades.map(grade => {
        if (grade < 38) {
            return grade
        }

        const nextNum = Math.ceil(grade / 5) * 5
        const difference = nextNum - grade

        return difference < 3 ? nextNum : grade
    })
}

export {
    gradingStudents
}