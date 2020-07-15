const ShoppingListService = {
  getAllItems(knex) {
    return knex.select('*').from('shopping_list');
  },
  insertItem(knex, newItem) {
    return knex
      .insert(newItem)
      .into('shopping_list')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  getById(knex, id) {
    return knex.select('*').from('shopping_list').where('view_id', id).first();
  },
  deleteItem(knex, view_id) {
    return knex('shopping_list')
      .where({ view_id })
      .delete();
  },
  updateItem(knex, view_id, newItemFields) {
    return knex('shopping_list')
      .where({ view_id })
      .update(newItemFields);
  }
};

module.exports = ShoppingListService;