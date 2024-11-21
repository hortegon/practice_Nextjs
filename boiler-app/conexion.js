const {MongoClient} = require('mongodb');

async function main(params) {
    const uri = "mongodb+srv://hortegong:1234boile@boiler-cluste.sly66.mongodb.net/?retryWrites=true&w=majority&appName=boiler-Cluste";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await listDatabases(client);
}catch (e){
    console.error(e);
} finally {
    await client.close();
}
}

main().catch(console.error);

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}