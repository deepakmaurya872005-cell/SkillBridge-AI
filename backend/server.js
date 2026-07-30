const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const skillGapRoutes = require("./routes/skillGapRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/skill-gap", skillGapRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.use("/uploads", express.static("uploads"));


console.log("Mongo URI:", process.env.MONGODB_URI);
connectDB();


app.get("/", (req, res) => {
    res.send("🚀 SkillBridge AI Backend Running Successfully");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});