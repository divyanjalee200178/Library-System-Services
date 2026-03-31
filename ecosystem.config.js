module.exports = {
    apps: [
        {
            name: "book-server",
            script: "java",
            args: "-jar ./book-server/target/book-server-1.0.0.jar",
            out_file: "./logs/book-server.log",
            error_file: "./logs/book-server.log",
            merge_logs: true
        },
        {
            name: "lending-server",
            script: "java",
            args: "-jar ./lending-server/target/lending-server-1.0.0.jar",
            out_file: "./logs/lending-server.log",
            error_file: "./logs/lending-server.log",
            merge_logs: true
        },
        {
            name: "user-server",
            script: "java",
            args: "-jar ./user-server/target/user-server-1.0.0.jar",
            out_file: "./logs/user-server.log",
            error_file: "./logs/user-server.log",
            merge_logs: true
        }
    ]
};