const connectionString = 
//incomplete, get connection string later
    process.env.MONGODB_URI || '';
connect(connectionString);

module.exports = connection;