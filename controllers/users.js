const mongodb = require('../data/database');
const objectId = require('mongodb').ObjectId;

// Renamed functions to match the intended export names
const getUserById = async (req, res) => {
  try {
    // FIX: Removed the redundant .db() call. Assuming mongodb.getDb() returns the DB object.
    const result = await mongodb.getDb().collection('users').find({ _id: new objectId(req.params.id) });
    const user = await result.toArray(); 
    
    if (!user || user.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user[0]); 
  } catch (error) {
    console.error("Error fetching single user:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const getAllUsers = async (req, res ) => {
  try {
    // FIX: Removed the redundant .db() call. Assuming mongodb.getDb() returns the DB object.
    const result = await mongodb.getDb().collection('users').find();
    const lists = await result.toArray(); 
    
    res.status(200).json(lists);
  } catch (error) {
    console.error("Error fetching all users:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllUsers, 
  getUserById 
};
