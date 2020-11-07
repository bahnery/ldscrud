const { response } = require("express");
const connection = require("../database/connection");

module.exports = {
    async insert(data) {
        if(data.email == undefined){
            return "Erro";
        }

        const response = await connection('users').insert(data);
        return response;
    },

    async select_allusers(){
        const response = await connection('users').select();
        return response;
    },

    async update_row(id, data){
        const response = await connection('users').where('id', id).update(data);
        return response;
    },

    async delete_id(id){
        const response = await connection('users').where('id', id).delete();
        return response;
    }
}