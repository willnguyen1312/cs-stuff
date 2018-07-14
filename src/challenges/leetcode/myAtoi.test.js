import {
    myAtoi
} from "./myAtoi"

describe('MyAtoi function', () => {
    it('should pass first test', () => {
        const input = "4193 with words"
        const expectedOutput = 4193

        expect(myAtoi(input)).toBe(expectedOutput)
    })

    it('should pass second test', () => {
        const input = "-91283472332"
        const expectedOutput = -2147483648

        expect(myAtoi(input)).toBe(expectedOutput)
    })

    it('should pass third test', () => {
        const input = "words and 987"
        const expectedOutput = 0

        expect(myAtoi(input)).toBe(expectedOutput)
    })
})