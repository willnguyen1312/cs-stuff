import {
    diagonalDifference
} from "./diagonalDifference"

describe('DiagonalDifference function', () => {
    it('should return the right result', () => {
        const arrInput = [
            [11, 2, 4],
            [4, 5, 6],
            [10, 8, -12]
        ]

        const expectedOutput = 15

        expect(diagonalDifference(arrInput)).toBe(expectedOutput)
    })
})