import {
    makeAnagram
} from "./makeAnagram"

describe('MakeAnagram function', () => {
    it('should pass the test', () => {
        const inputA = "abc"
        const inputB = "dce"
        const expectedOutput = 4

        expect(makeAnagram(inputA, inputB)).toBe(expectedOutput)
    })
})