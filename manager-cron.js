const AgendaProfissional = require("./cron/AgendaProfissional")

class ManagerCron {
    constructor()
    {
        this.jobs = [AgendaProfissional];
    }

    run()
    {
        this.jobs.forEach(job => job.start())
    }

}

module.exports = new ManagerCron()