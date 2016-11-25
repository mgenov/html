/**
 * Created by Peter Nedelchev <peter.krasimirov@gmail.com>.
 */
var expect = require('chai').expect;
var validator = require('./script');

describe('custom-number-validator' , function () {
   describe('correct formats', function () {
       it('should validate whole number', function () {
           expect(validator.validate('3','')).to.be.true;
       })
       it('should validate format with dot', function () {
           expect(validator.validate('3.2','')).to.be.true;
       })
       it('should validate format with comma', function () {
           expect(validator.validate('5,6','')).to.be.true;
       })

   })

   describe('incorrect formats', function () {
       it('should fail when whole part exceeds limit', function () {
           expect(validator.validate('45654124561.2','')).to.be.false;
       })
       it('should fail when decimal part exceeds limit', function () {
           expect(validator.validate('4.254456','')).to.be.false;
       })
       it('should fail number with dot delimiter and not decimal part', function () {
           expect(validator.validate('5.','')).to.be.false;
       })
       it('should fail number with comma delimiter and not decimal part', function () {
           expect(validator.validate('5,','')).to.be.false;
       })
   })

});