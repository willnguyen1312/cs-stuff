import {
    rotLeft
} from "./rotLef"

describe('PageCount function', () => {
    it('should pass the  test', () => {
        const input = [1, 2, 3, 4, 5]
        const expectOutput = [5, 1, 2, 3, 4]

        expect(rotLeft(input, 4)).toEqual(expectOutput)
    })
})