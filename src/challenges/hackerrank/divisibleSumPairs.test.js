import {
    divisibleSumPairs
} from './divisibleSumPairs'

describe('DivisibleSumPairs function', () => {
    it('should pass the pass', () => {
        const inputN = 6
        const inputK = 3
        const inputA = [1, 3, 2, 6, 1, 2]

        const expectedOutput = 5

        expect(divisibleSumPairs(inputN, inputK, inputA)).toBe(expectedOutput)
    })
})