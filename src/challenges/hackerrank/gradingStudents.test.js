import {
    gradingStudents
} from "./gradingStudents"

describe('GradingStudents function', () => {
    it('should pass the test', () => {
        const input = [73, 67, 38, 33]
        const expectedOutput = [75, 67, 40, 33]

        expect(gradingStudents(input)).toEqual(expectedOutput)
    })
})