import { JSON } from '@klave/sdk';

@serializable
export class ErrorMessage {
    success!: boolean;
    message!: string;
}

@serializable
export class FetchInput {
    key!: string;
}

@serializable
export class FetchOutput {
    success!: boolean;
    value!: string;
}

@serializable
export class StoreInput {
    key!: string;
    value!: string;
}

@serializable
export class StoreOutput {
    success!: boolean;
}

@serializable
export class FxRateData {
    from!: string;
    to!: string;
    rate!: number;
}

@serializable
export class FxRateResult {
    success!: boolean;
    rates!: FxRateData[];
}

@serializable
export class HelloWorldOutput {
    success!: boolean;
    message!: string;
}
