'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/petStoreController');

  app.route('/pets')
    .get(todoList.list_all_pets)
    .post(todoList.create_a_pet);

  app.route('/pets/:petId')
    .get(todoList.read_a_pet)
    .put(todoList.update_a_pet)
    .delete(todoList.delete_a_pet);
};
