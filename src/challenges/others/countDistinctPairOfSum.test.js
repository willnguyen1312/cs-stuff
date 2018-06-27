import {
    countDistinctPairOfSumFirstTry,
    countDistinctPairOfSumSecondTry
} from "./countDistinctPairOfSum"

describe('CountDistinctPairOfSum function', () => {
    const arrInput = [1, 2, 2, 5, 5, 7, 7, 7, 4, 4, 4]
    const sum = 9
    const expectedOutput = 2
    it('should work for the first try', () => {
        expect(countDistinctPairOfSumFirstTry(arrInput, sum)).toBe(expectedOutput)
    })

    it('should work for the second try', () => {
        expect(countDistinctPairOfSumSecondTry(arrInput, sum)).toBe(expectedOutput)
    })
})