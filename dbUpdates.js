const neo4j = require('neo4j-driver');

const NEO4J_URI = "neo4j+s://ac3da7cc.databases.neo4j.io";
const NEO4J_USERNAME = "neo4j";
const NEO4J_PASSWORD = "KYXRhihW4Fd8p8trz3VK0BIBgIdZbBhVecM1H4RwtWk";

const driver = neo4j.driver(
    NEO4J_URI,
    neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD)
    // Note: Since you're using neo4j+s protocol, the driver will automatically use encryption
);

const session = driver.session();

async function createTestNode() {
    try {
        await session.run('CREATE (n:Test) RETURN n');
        console.log(`Node with label "Test" has been created.`);
    } catch (error) {
        console.error('Error executing query:', error);
    } finally {
        await session.close();
    }

    // Close the driver connection
    await driver.close();
}

createTestNode();
