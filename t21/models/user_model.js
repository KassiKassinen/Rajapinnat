const db = require('../database');
const bcrypt = require('bcryptjs');


const saltRounds=10;
const user={
  getAll: function(callback) {
    return db.query('select * from user', callback);
  },
  getOne: function(uname, callback) {
    return db.query('select * from user where username=?', [uname], callback);
  },
  add: function(user, callback) {
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
      return db.query('insert into user (username, fname, password) values(?,?,?)',
      [user.username, user.fname, hash], callback);
    });
  },
  delete: function(uname, callback) {
    return db.query('delete from user where username=?', [uname], callback);
  },
  update: function(uname, user, callback) {
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
      return db.query('update user set username=?, fname=?, password=? where username=?',
      [user.username, user.fname, hash, uname], callback);
    });
  }

}
          
module.exports = user;