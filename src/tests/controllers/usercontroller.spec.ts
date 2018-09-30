import { describe, before, it, beforeEach } from "mocha"
import * as chai from 'chai'
import { Server } from '../../lib/createServer'
import chaiHttp = require('chai-http')
import { UserModel } from "../../models/user";

chai.use(chaiHttp)

describe('Testing the User Controller', () => {
    const apiUrl = 'http://localhost:3000/user'
    before(done => {
        let app = new Server( undefined, 'development')
        app.config().then(() => { 
            app.start()
            new UserModel({
                email: 'jeffmoneybezos1@aws.com',
                fName: 'Jeff',
                lName: 'Bezos',
                dob: new Date('01/01/01'),
                summary: 'Ayy its ya boi, skinnybezos',
                skills: [
                    {
                        title: 'God King of Earth',
                        description: 'I have too much money'
                    },
                    {
                        title: 'Absolutely Shredded',
                        description: 'gains gains gains'
                    }
                ],
                educationItems: [
                    {
                        degreeTitle: 'PhD in Being Rich',
                        startYear: '2017',
                        endYear: '2999',
                        collegeName: 'AWS Institute',
                        grade: '69',
                        description: 'Why is this a field loool 4Head'
                    }
                ],
                avatarUrl: 'bezos.png',
                backoundUrl: 'background.png',
                socialLinks: [
                    {
                        name: 'Github',
                        linkUrl: 'https://github.com/BlueishLeaf'
                    }
                ],
                tagline: 'The real OG'
            }).save()
            new UserModel({
                email: 'jeffmoneybezos2@aws.com',
                fName: 'Jeff',
                lName: 'Bezos',
                dob: new Date('01/01/01'),
                summary: 'Ayy its ya boi, skinnybezos',
                skills: [
                    {
                        title: 'God King of Earth',
                        description: 'I have too much money'
                    },
                    {
                        title: 'Absolutely Shredded',
                        description: 'gains gains gains'
                    }
                ],
                educationItems: [
                    {
                        degreeTitle: 'PhD in Being Rich',
                        startYear: '2017',
                        endYear: '2999',
                        collegeName: 'AWS Institute',
                        grade: '69',
                        description: 'Why is this a field loool 4Head'
                    }
                ],
                avatarUrl: 'bezos.png',
                backoundUrl: 'background.png',
                socialLinks: [
                    {
                        name: 'Github',
                        linkUrl: 'https://github.com/BlueishLeaf'
                    }
                ],
                tagline: 'The real OG'
            }).save()
            done()
        })
    })

    it('Should return all users', done => {
        chai.request(apiUrl)
        .get('')
        .end((_err, res) => {
            chai.expect(res).to.not.be.null
            chai.expect(res.status).to.equal(200)
            chai.expect(res.body).to.have.property('users')
            chai.expect(res).to.not.be.undefined
            done()
        })
    })

    it('Should insert a new user at /', done => {
        const user = {
            email: 'jeffmoneybezos3@aws.com',
            fName: 'Jeff',
            lName: 'Bezos',
            dob: new Date('01/01/01'),
            summary: 'Ayy its ya boi, skinnybezos',
            skills: [
                {
                    title: 'God King of Earth',
                    description: 'I have too much money'
                },
                {
                    title: 'Absolutely Shredded',
                    description: 'gains gains gains'
                }
            ],
            educationItems: [
                {
                    degreeTitle: 'PhD in Being Rich',
                    startYear: '2017',
                    endYear: '2999',
                    collegeName: 'AWS Institute',
                    grade: '69',
                    description: 'Why is this a field loool 4Head'
                }
            ],
            avatarUrl: 'bezos.png',
            backoundUrl: 'background.png',
            socialLinks: [
                {
                    name: 'Github',
                    linkUrl: 'https://github.com/BlueishLeaf'
                }
            ],
            tagline: 'The real OG'
        }
        chai.request(apiUrl)
        .post('/')
        .send(user)
        .end((_err, res) => {
            chai.expect(res.status).to.equal(201)
            chai.expect(res.body).to.have.property('msg').eql('User created.')
            done()
        })
    })

    it('Should update user at /:id when ID is passed', done => {
        const userChanges = {
            fName: 'Money',
            lName: 'Bags'
        }
        UserModel.findOne({}, (_err, user) => {
            if(user){
                chai.request(apiUrl)
                .put('/' + user._id)
                .send(userChanges)
                .end((_err, res) => {
                    chai.expect(res.status).to.equal(202)
                    chai.expect(res.body).to.have.property('msg').eql('User updated.')
                    chai.expect(res.body.user).to.have.property('fName').eql('Money')
                    chai.expect(res.body.user).to.have.property('lName').eql('Bags')
                    done()
                })
            }
        })
    })
    
    it('Should return all relevant users at /search/:query is used')

    it('Should delete the user at /:id when ID is passed')

    after(done => {
        UserModel.deleteMany({}, (_err) => {
            done()
            process.exit(0)
        })
    })
})