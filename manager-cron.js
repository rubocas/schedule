const AgendaProfissional = require("./cron/AgendaProfissional")
const AcordarServico = require("./cron/AcordarServico")

class ManagerCron {
    constructor()
    {
        this.jobs = [AgendaProfissional];
        this.jobs = [AcordarServico];
    }

    run()
    {
        this.jobs.forEach(job => job.start())
    }

}

module.exports = new ManagerCron()