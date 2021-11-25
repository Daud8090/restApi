const chai = require('chai');
const expect = chai.expect;
const chaiaspromised = require('chai-as-promised');
chai.use(chaiaspromised);
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const rewire = require('rewire');
const request = require('supertest');

// var app = rewire('../routers/student')

const server=require('../routers/student')
const app = request.agent(server);


var sandbox = sinon.createSandbox();

const db = require('../db/sequelizeconn');
const Student = db.student;


describe("app", () => {
    // it("just checking",()=>{
    //     expect(1+2).to.equal(3);
    // })
// ------
    // afterEach(() => {
    //     app = rewire('../routers/student');
    //     sandbox.restore();
    // })

    // context('GET / ', () => {
    //     it('should get all student data/', async () => {

    //         const studentdata = await Student.findAll();
    //         // console.log("------->", studentdata[1].dataValues)
    //         expect(studentdata[1].dataValues).to.have.deep.property('name').to.have.equal('abu');


    //         // .expect(response.body).to.have.property('n');
    //         // .end(function(err,response){
    //         //     if(err)
    //         //     throw err;
    //         // })
    //     })
    // })



    // context('GET/name',()=>{
    //     let specific_student="rehman"
    //     it("should get the student data by name ",async()=>{
    //         const singlestudent = await Student.findAll({
    //             where:{
    //                 name:specific_student
    //             }
    //         });
    //         // console.log("=======>",singlestudent[0].dataValues);
    //         // expect(1+2).to.equal(3);
    //         expect(singlestudent[0].dataValues).to.have.property('name').to.have.equal('rehman');
    //     })
    // })

    // context('post/create ',()=>{
    //     let specific_student="rehman"
    //     it("should create the student data ",async()=>{
    //         let new_studentdata={
    //             name:"jhonn",
    //             email:"jhonn@jhonn.com",
    //             address:"london"

    //         }
    //         let createStudent = await Student.create(new_studentdata);

    //         console.log("=======>",createStudent.dataValues);
    //         // expect(1+2).to.equal(3);
    //         expect(createStudent.dataValues).to.have.property('address').to.have.equal('londo');
    //     })
    // })

    // context('post/create ',()=>{
    //     let specific_student="rehman"
    //     it("should create the student data ",()=>{
    //         app
    //         .post('/createStudent')
    //         .send({
    //             name:"nikki",
    //             email:"nikki@nikki.com",
    //             address:"dubai"
    //         })
    //         .end((err,res)=>{
    //             console.log(res)
    //             expect(res.body.stats).to.equal(200);
    //         })
            
    //     })
    // })



})