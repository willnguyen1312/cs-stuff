import {
    sockMerchant
} from "./sockMerchant"

describe('SockMerchant function', () => {
    it('should do the work', () => {
        const numberOfSock = 9
        const arrOfSock = [10, 20, 20, 10, 10, 30, 50, 10, 20]

        expect(sockMerchant(numberOfSock, arrOfSock)).toBe(3)
    })
})