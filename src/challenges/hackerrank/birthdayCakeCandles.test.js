import {
    birthdayCakeCandles
} from "./birthdayCakeCandles"

describe('BirthdayCakeCandles function', () => {
    it('should pass the first test', () => {
        const arrInput = [3, 2, 1, 3]
        const expectedOutput = 2

        expect(birthdayCakeCandles(arrInput)).toBe(expectedOutput)
    })

    it('should work', () => {
        const arrInput = [3, 2, 1, 3, 4, 5]
        const expectedOutput = 1

        expect(birthdayCakeCandles(arrInput)).toBe(expectedOutput)
    })
})