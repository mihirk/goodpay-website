// ecosystem.config.js
module.exports = {
    apps: [
        {
            name: "website",
            script: "pnpm",
            args: "start",
            output: "/var/log/website.log",
            error: "/var/log/website.log",
            log_date_format: "YYYY-MM-DD HH:mm:ss",
        },
    ],
};
