const db = connect("mongodb://rootuser:rootpass@localhost:27017/admin");

db = db.getSiblingDB('books');

const result = db.createUser({user:"db_emi",pwd:"12345",roles: [{role:"readWrite", db:"books"}], passwordDigestor: "server",});
