const knex = require('../src/database/connection');
const UserController = require('../src/controllers/UserController');

afterAll((done) => {
    knex.destroy();
    done();
});

beforeEach((done) => {

    knex('users').truncate().then(data => {
        // console.log('Clear');
        done();
    }).catch(err => {
        console.log(err);
    });

});

test('Insert on table users', (done) =>{
    const data = {
        name: "bruno",
        email: "bruninho@gmail.com"
    };

    //const response = await connection.insert(data);

    //console.log(response);

    /*knex('users').insert(data).then(function(result){
        expect(result[0]).toBeGreaterThan(0);
        done();
    })*/

    UserController.insert(data).then(res => {
        expect(res[0]).toBeGreaterThan(0);
        done();
    })


})

test('Insert on table users, not filling mandatory field', (done) =>{
   
    const data = {
        name: "bruno"
    };

    //const response = await connection.insert(data);

    //console.log(response);

    /*knex('users').insert(data).then(function(result){
        expect(result[0]).toBeGreaterThan(0);
        done();
    })*/

    UserController.insert(data).then(res => {
       
            expect(res).toEqual("Erro");
            done();
    })


})

test('Select all users', (done) =>{

    // knex.select('*').from('users').then(function(result){
    //     console.log(result);
    //     expect(result).toBeTruthy();
    //     done();
    // })

    UserController.select_allusers().then(res =>{
        expect(res).toEqual(expect.anything());
        done();
    })
})

test('Update', (done) =>{
    // knex('users').where({name: "bruno"}).update({email: "naodesacredita@bruno"}, ['name', 'email']).then(function(result){
    //     console.log(result);
    //     done();
    // })
    const data = {
        name: "barbara nery",
        email: "barbara25@gmail.com"
    };

    knex('users').insert(data).then(data => {
        console.log(data);
    });

    const dote = {
        name: "bruno silva",
        email: "brunosilva2365@gmail.com"
    };

    const id = 1

    UserController.update_row(id, dote).then(res =>{
        console.log(res);
        expect(res).toBe(1);
        done();
    })


})

test('Delete specified Id', (done) =>{

    const data = {
        name: "barbara nery",
        email: "barbara25@gmail.com"
    };

    knex('users').insert(data).then(data => {
        console.log(data);
    });

    const id = 1

    UserController.delete_id(id).then(res =>{
        expect(res).toBe(1);
        done();
    })

})
