// secretariumConnector.ts
import { SCP, Key } from '@secretarium/connector';

type MyValue = {
    success: boolean;
    value: string;
}

export async function secretariumMain() {
    const context = new SCP();
    const myKey = await Key.createKey();

    await context.connect('wss://on.klave.network', myKey);

    // We reference the name of our application deployment
    const myAppId = 'your_app.on.klave.network';

    // We load data in our application ledger with a transaction
    let transaction = {
        "dcapp": myAppId,
        "function": "storeValue",
        "args": { key: 'myKey', value: 'myValue' }
    };

    await context.newTx(myAppId, 'storeValue', 'requestId1', transaction).send();

    // We retrieve the data with a query
    let query = {
        "dcapp": myAppId,
        "function": "fetchValue",
        "args": { key: 'myKey' }
    };

    const result = await context.newQuery<MyValue>(myAppId, 'fetchValue', 'requestId2', query).send();

    // We display the data we retrieve and see it matches
    console.log(result); // { "success": true, "value": "myValue" }
}
