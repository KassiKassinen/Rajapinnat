const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  getOne: function(idOpiskelija, callback) {
    return db.query('select * from arviointi where idOpiskelija=?', [idOpiskelija], callback);
  },

    getOneOne: function(idOpiskelija, idOpintojakso, callback) {
    return db.query('select * from arviointi where idOpiskelija=? and idOpintojakso=?', [idOpiskelija], [idOpintojakso], callback);
  },

  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (idOpiskelija,idOpintojakso,Arvosana,Päivämäärä) values(?,?,?,?)',
      [arviointi.idOpiskelija, arviointi.idOpintojakso, arviointi.Arvosana, arviointi.Päivämäärä],
      callback
    );
  },
  delete: function(idOpiskelija, idOpintojakso, callback) {
    return db.query('delete from arviointi where idOpiskelija=? and idOpintojakso=?', [idOpiskelija], [idOpintojakso], callback);
  },
  update: function(idOpiskelija, idOpintojakso, arviointi, callback) {
    return db.query(
      'update arviointi set idOpiskelija=?,idOpintojakso=?, Arvosana=?, Päivämäärä=? where idOpiskelija=? and id Opintojakso=?',
      [arviointi.idOpiskelija, arviointi.idOpintojakso, arviointi.Arvosana, arviointi.Päivämäärä],
      callback
    );
  }
};
module.exports = arviointi;