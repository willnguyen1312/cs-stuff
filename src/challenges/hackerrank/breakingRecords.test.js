import {
    breakingRecords
} from "./breakingRecords"

describe('BreakingRecords function', () => {
    it('should pass the test', () => {
        const input = [10, 5, 20, 20, 4, 5, 2, 25, 1]
        const expectedOutput = [2, 4]

        expect(breakingRecords(input)).toEqual(expectedOutput)
    })
})