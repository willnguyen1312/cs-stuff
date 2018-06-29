import {
    migratoryBirds
} from "./migratoryBirds"

describe('MigratoryBirds function', () => {
    it('should pass the test', () => {
        const input = [1, 4, 4, 4, 5, 3]
        const expectedOutput = 4

        expect(migratoryBirds(input)).toBe(expectedOutput)
    })
})