const express = require('express');
const cors = require('cors');
const app = express();

const { initializeDatabase } = require("./db/db.connection");
const patientRoutes = require('./Routes/patientRoutes')
const wardRoutes = require('./Routes/wardRoutes')


app.use(express.json());
app.use(cors());

initializeDatabase();

app.use('/patient',patientRoutes)
app.use('/ward',wardRoutes)

app.get('/', (req, res) => {
  res.send("hellow")
})






const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});