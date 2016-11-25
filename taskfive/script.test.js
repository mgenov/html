/**
 * Created by Peter Nedelchev <peter.krasimirov@gmail.com>.
 */
var expect = require('chai').expect;
var validator = require('./script');

describe('custom-number-validator' , function () {
   describe('correct formats', function () {
       it('whole number', function () {
           expect(validator.validate(3,'')).to.be.true;
       })
       it('correct format with dot', function () {
           expect(validator.validate(3.2,'')).to.be.true;
       })
       it('correct format with comma', function () {
           expect(validator.validate(5,6,'')).to.be.true;
       })

   })

   describe('incorrect formats', function () {
       it('whole part exceeds limit', function () {
           expect(validator.validate(45654124561.2,'')).to.be.false;
       })
       it('decimal part exceeds limit', function () {
           expect(validator.validate(4.254456,'')).to.be.false;
       })
       it('number with dot delimiter and not decimal part', function () {
           expect(validator.validate('5.','')).to.be.false;
       })
       it('number with comma delimiter and not decimal part', function () {
           expect(validator.validate('5,','')).to.be.false;
       })
   })

});