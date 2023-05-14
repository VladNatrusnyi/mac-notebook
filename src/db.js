import Dexie from 'dexie';

const db = new Dexie('myDB');

db.version(1).stores({
  myStore: '++id, body, date'
});

export default db;
