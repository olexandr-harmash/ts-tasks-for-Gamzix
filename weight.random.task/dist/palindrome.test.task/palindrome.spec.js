var expect = require('chai').expect;
var palindrome = require('./palindrome');
describe('Check string as palindrome', function () {
    describe('#isPalindrome()', function () {
        it('should return true when the value is a palindrome string', function () {
            expect(palindrome('radar')).equal(true);
        });
        it('should return false when the value is not a palindrome string', function () {
            expect(palindrome('hello')).equal(false);
        });
        it('should throw exception becouse string is empty', function () {
            expect(() => palindrome('')).to.throw();
        });
        it('should throw exception becouse is not a string', function () {
            expect(() => palindrome({ value: "hello" })).to.throw();
        });
    });
});
//# sourceMappingURL=palindrome.spec.js.map