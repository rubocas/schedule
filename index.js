const express = require("express");
const ManagerCron =  require('./manager-cron');

const app = express()

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Running "+PORT);

    ManagerCron.run();
});