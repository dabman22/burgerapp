import { all as _all, create as _create, update as _update, delete as _delete } from "../config/orm.js";

var burger = {
  all: function(cb) {
    _all("burgers", function(res) {
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    _create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  update: function(objColVals, condition, cb) {
    _update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

  delete: function(condition, cb) {
    _delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

export default burger;
