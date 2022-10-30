const express = require("express");
const db = require("../config/db");

class CreditCard {
  constructor(company, number, user_id) {
    this.company = company;
    this.number = number;
    this.user_id = user_id;
  }

  save() {
    let sql = `INSERT INTO \`credit card\` (Company, Number, user_id) VALUES ('${this.company}','${this.number}','${this.user_id}');`;

    return db.execute(sql);
  }

  static showAll(user_id) {
    let sql = `SELECT * FROM \`credit card\` WHERE user_id = ${user_id};`;

    return db.execute(sql);
  }

  static deleteCreditCard(number) {
    let sql = `DELETE FROM \`credit card\` WHERE number = ${number};`;

    return db.execute(sql);
  }
}

module.exports = CreditCard;
