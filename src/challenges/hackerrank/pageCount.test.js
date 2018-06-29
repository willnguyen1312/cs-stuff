import {
    pageCount
} from "./pageCount"

describe('PageCount function', () => {
    it('should pass the first test', () => {
        const inputN = 6
        const inputP = 2
        const expectOutput = 1

        expect(pageCount(inputN, inputP)).toBe(expectOutput)
    })

    it('should pass the second test', () => {
        const inputN = 5
        const inputP = 4
        const expectOutput = 0

        expect(pageCount(inputN, inputP)).toBe(expectOutput)
    })
})