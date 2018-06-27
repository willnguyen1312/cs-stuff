import {
    linearSearch
} from "./linear"

describe('Linear search', () => {
    it('should return the right index', () => {
        const arrInput = [1, 2, 3]
        const targetInput = 2

        const expectedOutput = 1

        expect(linearSearch(arrInput, targetInput)).toBe(expectedOutput)
    })

    it('should return -1 when not found', () => {
        const arrInput = [1, 2, 3]
        const targetInput = 9

        const expectedOutput = -1

        expect(linearSearch(arrInput, targetInput)).toBe(expectedOutput)
    })

    it('should return -1 when no input', () => {
        let arrInput
        const targetInput = 9

        const expectedOutput = -1

        expect(linearSearch(arrInput, targetInput)).toBe(expectedOutput)
    })
})