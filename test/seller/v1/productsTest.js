process.env.NODE_ENV = 'test'
const chai = require('chai')
let should = chai.should()
let chaiHttp = require('chai-http');
const sectionName = 'V1 Seller Product Tests'
const baseRoute = '/api/seller/v1/products'
let server = require('../../../server')
const appConfig = require('config')
let seller, idToken, accessToken, addProduct, productId, productPrice
const axios = require('axios').default;

chai.use(chaiHttp)

describe(sectionName, () => {
    before(done => {
        console.log('Waiting to ensure database connection established')
        seller = appConfig.test.sellerUser
        addProduct = appConfig.test.sellerProduct    
        productId = appConfig.test.productId 
        productPrice = appConfig.test.productPrice  
        axios.post('http://localhost:4000/api/seller/v1/login', seller)
            .then(response =>{
                response = response.data
                if(response.success) {
                    idToken = response.data.idToken
                    accessToken =response.data.accessToken
                } else {
                    console.log('error! no token provided')
                }
                setTimeout(() => {
                    console.log('Okay!, lets begin')
                    done()
                }, 1000);
            })
            .catch(error => {
                console.log('error ', error)
            })
    })

    describe('Check Post APIs', () => {
        
        it('add product', async () => {
            let res = await chai
                .request(server)
                .post(`${baseRoute}/`)
                .set('authorization', accessToken)
                .set('idToken', idToken)
                .send(addProduct)
            
            res.should.have.status(200)
        })
    })

    describe('Check Delete APIs', () => {
       
        it('delete product', async () => {
            let res = await chai
                .request(server)
                .delete(`${baseRoute}/${productId}`)
                .set('authorization', accessToken)
                .set('idToken', idToken)

            res.should.have.status(200)    
        })

    })

    describe('Check Get APIs', () => {
        
        it('get product list', async () => {
            let res = await chai
                .request(server)
                .get(`${baseRoute}`)
                .set('authorization', accessToken)
                .set('idToken', idToken)

            res.should.have.status(200)
        })
    
    })

    describe('Check Put APIs', () => {

        it('update product price', async () => {
            let res = await chai 
                .request(server)
                .put(`${baseRoute}/${productId}/price/${productPrice}`)
                .set('authorization', accessToken)
                .set('idtoken', idToken)

            res.should.have.status(200)
        })
        
    })
})