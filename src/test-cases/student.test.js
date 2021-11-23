const chai = require('chai');
const expect = chai.expect;
const chaiaspromised = require('chai-as-promised');
chai.use(chaiaspromised);
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const rewire = require('rewire');
const request = require('supertest');

var app = rewire('../routers/student')

var sandbox = sinon.createSandbox();


describe("app", () => {
    // it("just checking",()=>{
    //     expect(1+2).to.equal(3);
    // })

    afterEach(()=>{
        app = rewire('../routers/student');
        sandbox.restore();
    })

    context('GET / ',()=>{
        it('should get /',function(done){
            // this.timeout(3000)
            request(app)
            .get('/')
            .expect(201)
            .end((err,response)=>{
                console.log(response)
                expect(response.body).to.have.property('name');
                done(err);
            })
        })
    })

})