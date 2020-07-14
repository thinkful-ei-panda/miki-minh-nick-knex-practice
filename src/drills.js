require('dotenv').config();
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: process.env.DB_URL
});

function getItemsWithText(searchTerm) {
  db('shopping_list')
    .select('*')
    .where('item_name', 'ilike', `%${searchTerm}%`)
    .then(results => console.log(results))
    .finally(() => db.destroy())
};

// getItemsWithText('fish')

function getAllItemsPaginated(pageNumber, limit) {
  const offsetNumber = (pageNumber - 1) * limit

  db('shopping_list')
    .select('*')
    .limit(`${limit}`)
    .offset(`${offsetNumber}`)
    .then(results => console.log(results))
    .finally(() => db.destroy())
};

// getAllItemsPaginated(2, 31)

function getRowsNewerThan(daysAgo) {
    db('shopping_list')
        .select('*')
        .where('date_added',
            '>',
            db.raw(`now() -'?? days'::INTERVAL`, daysAgo)
        )
        .then(res => console.log(res))
        // .catch(err => console.warning(err.message))
        .finally(() => db.destroy());
}

// getRowsNewerThan(14);

function getTotalPriceByCategory() {
    db('shopping_list')
        .select('item_name')
        .sum('price AS total_price')
        .groupBy('category')
        .then(res => console.log(res))
        .finally(() => db.destroy());
}

getTotalPriceByCategory();