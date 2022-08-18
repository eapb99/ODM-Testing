const request = require("supertest");
const app = require('../../app')

describe("Pruebas sobre la API",()=> {
    
    describe("Get interactions", ()=> {

        let response;
        beforeAll(async ()=>{
            response = await request(app).get('/interactions').send()
        })


        it("shoul be status 200", async ()=>{
            
            expect(response.status).toBe(200);
            expect(response.headers["content-type"]).toContain("json");
        })

        it("should be an array response", async ()=>{
            expect(response.body).toBeInstanceOf(Array)
        })

        it('should be an 4 objects into array', async() => {
            expect(response.body).toHaveLength(234);
            });
    
        it('should be contain a specific object into array', async() => {
            expect(response.body).toEqual(expect.arrayContaining([{"_id":"61312675e1fc409091f0a68d","robotid":"E2D85836","message":"info","hour":"11:39:48"}]));
        });


    })

    describe('Interactions by type messagetest', () => {
        
        let response;
        beforeEach(async ()=>{
            response = await request(app).get('/interactions/message/info').send()
        })


        it("shoul be status 200", async ()=>{
            
            expect(response.status).toBe(200);
            expect(response.headers["content-type"]).toContain("json");
        })

        it("should be an array response", async ()=>{
            expect(response.body).toBeInstanceOf(Array)
        })

        it('should be an 4 objects into array', async() => {
            expect(response.body).toHaveLength(67);
            });
    
        it('should be contain a specific object into array', async() => {
            expect(response.body).toEqual(expect.arrayContaining([{"_id":"61312675e1fc409091f0a68d","robotid":"E2D85836","message":"info","hour":"11:39:48"}]));
        });
    })
})