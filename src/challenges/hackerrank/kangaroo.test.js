import {
    kangaroo
} from "./kangaroo"

describe('Kangaroo function', () => {
    it('should fail the test', () => {
        const input = [0, 2, 5, 3]
        const expectedOutput = 'NO'

        expect(kangaroo(...input)).toBe(expectedOutput)
    })

    it('should pass the test', () => {
        const input = [0, 3, 4, 2]
        const expectedOutput = 'YES'

        expect(kangaroo(...input)).toBe(expectedOutput)
    })
})