const chai = require('chai');
chai.use(require('chai-json'));
const expect = chai.expect
const { getSingleUser, addToArr } = require('./usercards')
const should = chai.should()


describe('getSingleUser', () => {

  let testjson

  beforeEach(() => {
    testjson = getSingleUser()
  })

  it('makes a GET request and returns a single JSON user', () => {
    expect(testjson.should.be.jsonObj())
  })
})

describe('addToArr', async function() {
  let testarr

  beforeEach(async function() {
    this.timeout(30000)
    testarr= await addToArr()
  })

  it('returns an array', function() {
    expect(testarr.should.be.a("array"))
  })

  it('returns an array of length 25', function() {
    expect(testarr.should.have.lengthOf(25))
  })

  it ('returns an array of JSON objects', function(){
    testarr.forEach(obj => {
      expect(obj.should.be.jsonObj())
    })
  })
})
