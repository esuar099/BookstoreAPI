const express = require("express");
const db = require("../config/db");

class User {
  constructor(username, password, full_name, email, home_address) {
    this.username = username;
    this.password = password;
    this.full_name = full_name;
    this.email = email;
    this.home_address = home_address;
  }

  save() {
    let sql = `
        INSERT INTO user (
            username,
            password,
            full_name,
            email,
            home_address
        ) VALUES(
            '${this.username}',
            '${this.password}',
            '${this.full_name}',
            '${this.email}',
            '${this.home_address}'
        )`;

    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM user;";

    return db.execute(sql);
  }

  static deleteById(user_id) {
    let sql = `DELETE FROM user WHERE user_id = ${user_id};`;

    return db.execute(sql);
  }

  static findByUsername(username) {
    let sql = `SELECT * FROM user WHERE username = ${username};`;

    return db.execute(sql);
  }

  static updateUsername(username, user_id) {
    let sql = `UPDATE user SET username = '${username}' where user_id = ${user_id};`;

    return db.execute(sql);
  }

  static updatePassword(password, user_id) {
    let sql = `update user set password = '${password}' where user_id = ${user_id};`;

    return db.execute(sql);
  }

  static updateName(full_name, user_id) {
    let sql = `update user set full_name = '${full_name}' where user_id = ${user_id};`;

    return db.execute(sql);
  }

  static updateAddress(address, user_id) {
    let sql = `update user set home_address = '${address}' where user_id = ${user_id};`;

    return db.execute(sql);
  }
}

module.exports = User;
