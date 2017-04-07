/*jshint esversion:6*/

const chai = require('chai');
const expect = chai.expect;
const findingFactorials = require("../findingFactorials.js");



describe ("findingFactorials", function(){
	it('should be a function', function(){
		expect(findingFactorials).to.be.a('function');
	});
	it('should find the factorial', function(){
		expect(findingFactorials(4)).to.be.equal(24);
		expect(findingFactorials(10)).to.be.equal(3628800);
	});
	it('should only take numbers', function(){
		expect(findingFactorials("hello wolrd")).to.be.equal(false);
	});
});