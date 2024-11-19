import { JSON } from '@klave/sdk';

@serializable
export class BaseResponse {
    success: boolean = false; // Base success property for all response types
}

@serializable
export class ErrorMessage {
    success!: boolean;
    message: string = ""; // Provide a default value
}


@serializable
export class FetchInput {
    key: string = ''; // Initialized with default value

    validate(): boolean {
        return this.key.trim().length > 0;
    }
}

@serializable
export class FetchOutput extends BaseResponse {
    value: string = ''; // Initialized with default value
}

@serializable
export class StoreInput {
    key: string = '';
    value: string = '';

    validate(): boolean {
        return this.key.trim().length > 0 && this.value.trim().length > 0;
    }
}

@serializable
export class StoreOutput extends BaseResponse {}

@serializable
export class FxRateData {
    from: string = '';
    to: string = '';
    rate: number = 0;
}

@serializable
export class FxRateResult extends BaseResponse {
    rates: FxRateData[] = [];
}

@serializable
export class HelloWorldOutput extends BaseResponse {
    message: string = ''; // Initialized with default value
}
