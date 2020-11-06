const knex = require('../src/database/connection');

afterAll((done) => {
    knex.destroy();
    done();
});

test('Insert on table users', (done) =>{
    const data = {
        name: "bruno",
        email: "bruninho@gmail.com"
    };

    //const response = await connection.insert(data);

    //console.log(response);

    knex('users').insert(data).then(function(result){
        expect(result[0]).toBeGreaterThan(0);
        done();
    })

})

test('Select all users', (done) =>{
    knex.select('*').from('users').then(function(result){
        console.log(result);
        expect(result).toBeTruthy();
        done();
    })
})

test('Update', (done) =>{
    knex('users').where({name: "bruno"}).update({email: "naodesacredita@bruno"}, ['name', 'email']).then(function(result){
        console.log(result);
        done();
    })

})



