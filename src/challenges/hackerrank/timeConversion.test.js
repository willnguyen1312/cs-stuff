import {
    timeConversion
} from "./timeConversion"

describe('TimeConversion function', () => {
    it('should pass first test', () => {
        const input = '07:05:45PM'
        const expectedOutput = '19:05:45'

        expect(timeConversion(input)).toBe(expectedOutput)
    })

    it('should pass second test', () => {
        const input = '06:40:03AM'
        const expectedOutput = '06:40:03'

        expect(timeConversion(input)).toBe(expectedOutput)
    })
})