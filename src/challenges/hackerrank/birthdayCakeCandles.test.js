import {
    birthdayCakeCandles
} from "./birthdayCakeCandles"

describe('BirthdayCakeCandles function', () => {
    it('should work', () => {
        const arrInput = [3, 2, 1, 3]
        const expectedOutput = 2

        expect(birthdayCakeCandles(arrInput)).toBe(expectedOutput)
    })
})