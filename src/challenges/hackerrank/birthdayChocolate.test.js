import {
    birthdayChocolate
} from "./birthdayChocolate"

describe('BirthdayChocolate function', () => {
    it('should pass the first test', () => {
        const inputS = [1, 2, 1, 3, 2]
        const inputD = 3
        const inputM = 2
        const expectedOutput = 2

        expect(birthdayChocolate(inputS, inputD, inputM)).toBe(expectedOutput)

    })

    it('should pass the second test', () => {
        const inputS = [4]
        const inputD = 4
        const inputM = 1
        const expectedOutput = 1

        expect(birthdayChocolate(inputS, inputD, inputM)).toBe(expectedOutput)

    })
})