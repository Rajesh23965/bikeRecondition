const express = require('express');
const pool = require('./config/db'); 
const app = require("./app");
const PORT = process.env.PORT || 5050;


async function testDatabaseConnection() {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS result');
    console.log('Database connection successful:'); 
  } catch (error) {
    console.error('Database connection failed:', error); 
  }
}
app.get("/rajesh", async(req,res)=>{
    res.status(200).send("<h2>Hello Rajesh</h2>")
})

testDatabaseConnection();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});