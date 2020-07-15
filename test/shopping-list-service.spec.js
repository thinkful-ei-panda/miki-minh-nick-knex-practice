const ShoppingListService = require('../src/shopping-list-service');
const knex = require('knex');
const { expect } = require('chai');

describe('Shopping list service object', function () {
  let db;

  let testList = [
    {
      view_id: 1,
      item_name: 'Fish tricks',
      price: '1.33',
      category: 'Main',
      checked: false,
      date_added: new Date('2029-01-22T16:28:32.615Z'),
    },
    {
      view_id: 2,
      item_name: 'Steak-believe',
      price: '14.33',
      category: 'Lunch',
      checked: true,
      date_added: new Date('2029-04-22T16:28:32.615Z'),
    },
    {
      view_id: 3,
      item_name: 'Antichovies',
      price: '33.33',
      category: 'Breakfast',
      checked: true,
      date_added: new Date('2019-05-22T16:28:32.615Z'),
    }
  ];

  before(() => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    });
  });

  before(() => db('shopping_list').truncate());

  before(() => {
    return db
      .into('shopping_list')
      .insert(testList);
  });

  afterEach(() => db('shopping_list').truncate());

  after(() => db.destroy());

  context('Given "shopping_list" has data', () => {
    beforeEach(() => {
      return db
        .into('shopping_list')
        .insert(testList)
    });
    it('getById() resolves an article from "shopping_list" table', () => {
      const thirdID = 3;
      const thirdTestItem = testList[thirdID - 1];
      return ShoppingListService.getById(db, thirdID)
        .then(actual => {
          expect(actual).to.eql({
            view_id: thirdID,
            item_name: thirdTestItem.item_name,
            date_added: thirdTestItem.date_added,
            price: thirdTestItem.price,
            category: thirdTestItem.category,
            checked: true,
          });
        })
    })
    it(`deleteArticle() removes an article by id from 'shopping_list' table`, () => {
      const itemId = 3
      return ShoppingListService.deleteItem(db, itemId)
        .then(() => ShoppingListService.getAllItems(db))
        .then(allItems => {
          // copy the test items array without the "deleted" item
          const expected = testList.filter(item => item.view_id !== itemId)
          expect(allItems).to.eql(expected)
        })
    })
    it(`updateItem() updates an item from the 'shopping_list' table`, () => {
      const idOfItemToUpdate = 3
      const newItemData = {
        item_name: 'updated title',
        price: '99.99',
        date_added: new Date(),
        category: 'Breakfast',
        checked: true,
      };
      return ShoppingListService.updateItem(db, idOfItemToUpdate, newItemData)
        .then(() => ShoppingListService.getById(db, idOfItemToUpdate))
        .then(item => {
          expect(item).to.eql({
            view_id: idOfItemToUpdate,
            ...newItemData,
          })
        })
    })
  })
  //BRING UP TO RICH BECUASE THIS IS CRAZY
  it(`getAllItems() resolves all articles from 'shopping_list' table`, () => {
    return ShoppingListService.getAllItems(db)
      .then(actual => {
        expect(actual).to.eql(testList.map(item => ({
          ...item,
          date_added: new Date(item.date_added)
        })))
      })
  })
  context('Given "shopping_list" has no data', () => {
    it('getAllArticles() resolves an empty array', () => {
      return ShoppingListService.getAllItems(db)
        .then(actual => {
          expect(actual).to.eql([])
        })
    })
    it(`insertItem() inserts an item and resolves it with an 'id'`, () => {
      const newItem = {
        item_name: 'Test new name name',
        price: '5.05',
        date_added: new Date('2020-01-01T00:00:00.000Z'),
        checked: true,
        category: 'Lunch',
      };
      return ShoppingListService.insertItem(db, newItem)
        .then(actual => {
          expect(actual).to.eql({
            view_id: 1,
            item_name: newItem.item_name,
            price: newItem.price,
            date_added: newItem.date_added,
            checked: newItem.checked,
            category: newItem.category,
          });
        });
    });
  })

});