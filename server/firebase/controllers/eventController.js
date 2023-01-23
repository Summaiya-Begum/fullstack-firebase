"use strict";
const firebase = require("../db");
const Event = require("../models/event");
const firestore = firebase.firestore();

// https://firebasestorage.googleapis.com/v0/b/plucky-shore-338405.appspot.com/o/Male25.jpg?alt=media&token=570a338e-2d22-4f91-aba8-8b5c6e870fd3

// POST http://localhost:8080/api/event
const addEvent = async (req, res, next) => {
  try {
    const data = req.body;
    for (let el of data) {
      await firestore.collection("events").doc().set(el);
    }
    res.send("Record saved successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// GET http://localhost:8080/api/events
const getAllEvents = async (req, res, next) => {
  try {
    const events = await firestore.collection("events");
    const data = await events.get();
    const eventsArray = [];
    if (data.empty) {
      res.status(400).send("No event record found");
    } else {
      data.forEach((doc) => {
        const event = new Event(
          doc.id,
          doc.data().ID,
          doc.data().Location,
          doc.data().Gender,
          doc.data().Name,
          doc.data().Date,
          doc.data().Time
        );
        eventsArray.push(event);
      });
      res.send(eventsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// GET SINGLE EVENT http://localhost:8080/api/event/jMrC1l72Idq4laXTStCC
const getEvent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const Event = await firestore.collection("events").doc(id);
    const data = await Event.get();
    if (!data.exists) {
      res.status(400).send("Event with the given ID not found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// PUT SINGLE Event http://localhost:8080/api/event/jMrC1l72Idq4laXTStCC
const updateEvent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const Event = await firestore.collection("events").doc(id);
    await Event.update(data);

    res.send("Event record updated successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// DELETE SINGLE Event http://localhost:8080/api/event/jMrC1l72Idq4laXTStCC
const deleteEvent = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("events").doc(id).delete();

    res.send("Event record deleted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addEvent,
  getAllEvents,
  getEvent,
  updateEvent,
  deleteEvent,
};
