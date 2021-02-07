const db = require("../../data/db-config.js");

module.exports = { getCars, getById, insert, update, remove };

async function getCars() {
  const cars = await db("cars");
  return cars;
}

async function getById(id) {
  return db("cars").where({ id }).first();
}

async function insert(createNewCar) {
  const id = await db("cars").insert(createNewCar);
  return id;
}

async function update(id, changes) {
  const updated = await db("cars").where({ id }).update(changes);
  const car = await db('cars').where({ id })
  return car
}

async function remove(id) {
  const count = await db("cars").where({ id }).del();
  return count;
}
