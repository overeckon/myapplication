import { Notifier, HTTP, HttpRequest } from '@klave/sdk';
import { HelloWorldOutput, ErrorMessage, FetchInput, FetchOutput, StoreInput, StoreOutput, FxRateData, FxRateResult } from './types';

const myTableName = "my_storage_table";

/**
 * @query
 * @param {FetchInput} input - A parsed input argument
 */
export function fetchValue(input: FetchInput): void {
    let value = Ledger.getTable(myTableName).get(input.key);
    if (value.length === 0) {
        Notifier.sendJson<ErrorMessage>({
            success: false,
            message: `key '${input.key}' not found in table`
        });
    } else {
        Notifier.sendJson<FetchOutput>({
            success: true,
            value
        });
    }
}

/**
 * @transaction
 * @param {StoreInput} input - A parsed input argument
 */
export function storeValue(input: StoreInput): void {
    if (input.key && input.value) {
        Ledger.getTable(myTableName).set(input.key, input.value);
        Notifier.sendJson<StoreOutput>({
            success: true
        });
        return;
    }

    Notifier.sendJson<ErrorMessage>({
        success: false,
        message: `Missing value arguments`
    });
}

/**


/**
 * @query
 */
export function getHelloWorld(): void {
    const query: HttpRequest = {
        hostname: 'example.com',
        port: 443,
        path: '/hello-world',
        headers: [],
        body: ''
    };

    const response = HTTP.request(query);
    if (!response) {
        Notifier.sendJson<ErrorMessage>({
            success: false,
            message: `HTTP call went wrong!`
        });
        return;
    }

    Notifier.sendJson<HelloWorldOutput>({
        success: true,
        message: response.body
    });
}
