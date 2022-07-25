import { Event, EventFilter, BaseContract, Signer, CallOverrides, BigNumber, BigNumberish, Overrides, ContractTransaction, PopulatedTransaction, utils, BytesLike, PayableOverrides } from 'ethers';
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';

interface TypedEvent<TArgsArray extends Array<any> = any, TArgsObject = any> extends Event {
    args: TArgsArray & TArgsObject;
}
interface TypedEventFilter<_TEvent extends TypedEvent> extends EventFilter {
}
interface TypedListener<TEvent extends TypedEvent> {
    (...listenerArg: [...__TypechainArgsArray<TEvent>, TEvent]): void;
}
declare type __TypechainArgsArray<T> = T extends TypedEvent<infer U> ? U : never;
interface OnEvent<TRes> {
    <TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>, listener: TypedListener<TEvent>): TRes;
    (eventName: string, listener: Listener): TRes;
}
declare type PromiseOrValue<T> = T | Promise<T>;

interface ERC20Interface extends utils.Interface {
    functions: {
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allowance" | "approve" | "balanceOf" | "decimals" | "decreaseAllowance" | "increaseAllowance" | "name" | "symbol" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
interface ApprovalEventObject$3 {
    owner: string;
    spender: string;
    value: BigNumber;
}
declare type ApprovalEvent$3 = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject$3>;
declare type ApprovalEventFilter$3 = TypedEventFilter<ApprovalEvent$3>;
interface TransferEventObject$3 {
    from: string;
    to: string;
    value: BigNumber;
}
declare type TransferEvent$3 = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject$3>;
declare type TransferEventFilter$3 = TypedEventFilter<TransferEvent$3>;
interface ERC20 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC20Interface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        name(overrides?: CallOverrides): Promise<string>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter$3;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter$3;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter$3;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter$3;
    };
    estimateGas: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

interface IPairInterface extends utils.Interface {
    functions: {
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "MINIMUM_LIQUIDITY()": FunctionFragment;
        "PERMIT_TYPEHASH()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(address)": FunctionFragment;
        "decimals()": FunctionFragment;
        "factory()": FunctionFragment;
        "getReserves()": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "kLast()": FunctionFragment;
        "mint(address)": FunctionFragment;
        "name()": FunctionFragment;
        "nonces(address)": FunctionFragment;
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "price0CumulativeLast()": FunctionFragment;
        "price1CumulativeLast()": FunctionFragment;
        "skim(address)": FunctionFragment;
        "swap(uint256,uint256,address,bytes)": FunctionFragment;
        "symbol()": FunctionFragment;
        "sync()": FunctionFragment;
        "token0()": FunctionFragment;
        "token1()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DOMAIN_SEPARATOR" | "MINIMUM_LIQUIDITY" | "PERMIT_TYPEHASH" | "allowance" | "approve" | "balanceOf" | "burn" | "decimals" | "factory" | "getReserves" | "initialize" | "kLast" | "mint" | "name" | "nonces" | "permit" | "price0CumulativeLast" | "price1CumulativeLast" | "skim" | "swap" | "symbol" | "sync" | "token0" | "token1" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "MINIMUM_LIQUIDITY", values?: undefined): string;
    encodeFunctionData(functionFragment: "PERMIT_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "burn", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReserves", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "kLast", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonces", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "permit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "price0CumulativeLast", values?: undefined): string;
    encodeFunctionData(functionFragment: "price1CumulativeLast", values?: undefined): string;
    encodeFunctionData(functionFragment: "skim", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "swap", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "sync", values?: undefined): string;
    encodeFunctionData(functionFragment: "token0", values?: undefined): string;
    encodeFunctionData(functionFragment: "token1", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MINIMUM_LIQUIDITY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PERMIT_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kLast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "price0CumulativeLast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "price1CumulativeLast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "skim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sync", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "Burn(address,uint256,uint256,address)": EventFragment;
        "Mint(address,uint256,uint256)": EventFragment;
        "Swap(address,uint256,uint256,uint256,uint256,address)": EventFragment;
        "Sync(uint112,uint112)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Sync"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
interface ApprovalEventObject$2 {
    owner: string;
    spender: string;
    value: BigNumber;
}
declare type ApprovalEvent$2 = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject$2>;
declare type ApprovalEventFilter$2 = TypedEventFilter<ApprovalEvent$2>;
interface BurnEventObject$1 {
    sender: string;
    amount0: BigNumber;
    amount1: BigNumber;
    to: string;
}
declare type BurnEvent$1 = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    string
], BurnEventObject$1>;
declare type BurnEventFilter$1 = TypedEventFilter<BurnEvent$1>;
interface MintEventObject {
    sender: string;
    amount0: BigNumber;
    amount1: BigNumber;
}
declare type MintEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], MintEventObject>;
declare type MintEventFilter = TypedEventFilter<MintEvent>;
interface SwapEventObject {
    sender: string;
    amount0In: BigNumber;
    amount1In: BigNumber;
    amount0Out: BigNumber;
    amount1Out: BigNumber;
    to: string;
}
declare type SwapEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
], SwapEventObject>;
declare type SwapEventFilter = TypedEventFilter<SwapEvent>;
interface SyncEventObject {
    reserve0: BigNumber;
    reserve1: BigNumber;
}
declare type SyncEvent = TypedEvent<[BigNumber, BigNumber], SyncEventObject>;
declare type SyncEventFilter = TypedEventFilter<SyncEvent>;
interface TransferEventObject$2 {
    from: string;
    to: string;
    value: BigNumber;
}
declare type TransferEvent$2 = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject$2>;
declare type TransferEventFilter$2 = TypedEventFilter<TransferEvent$2>;
interface IPair extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPairInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        MINIMUM_LIQUIDITY(overrides?: CallOverrides): Promise<[BigNumber]>;
        PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        getReserves(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number
        ] & {
            reserve0: BigNumber;
            reserve1: BigNumber;
            blockTimestampLast: number;
        }>;
        initialize(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        kLast(overrides?: CallOverrides): Promise<[BigNumber]>;
        mint(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        price0CumulativeLast(overrides?: CallOverrides): Promise<[BigNumber]>;
        price1CumulativeLast(overrides?: CallOverrides): Promise<[BigNumber]>;
        skim(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swap(amount0Out: PromiseOrValue<BigNumberish>, amount1Out: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        sync(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        token0(overrides?: CallOverrides): Promise<[string]>;
        token1(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    MINIMUM_LIQUIDITY(overrides?: CallOverrides): Promise<BigNumber>;
    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    burn(to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<number>;
    factory(overrides?: CallOverrides): Promise<string>;
    getReserves(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        number
    ] & {
        reserve0: BigNumber;
        reserve1: BigNumber;
        blockTimestampLast: number;
    }>;
    initialize(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    kLast(overrides?: CallOverrides): Promise<BigNumber>;
    mint(to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    price0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
    price1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
    skim(to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swap(amount0Out: PromiseOrValue<BigNumberish>, amount1Out: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    sync(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    token0(overrides?: CallOverrides): Promise<string>;
    token1(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        MINIMUM_LIQUIDITY(overrides?: CallOverrides): Promise<BigNumber>;
        PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        decimals(overrides?: CallOverrides): Promise<number>;
        factory(overrides?: CallOverrides): Promise<string>;
        getReserves(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number
        ] & {
            reserve0: BigNumber;
            reserve1: BigNumber;
            blockTimestampLast: number;
        }>;
        initialize(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        kLast(overrides?: CallOverrides): Promise<BigNumber>;
        mint(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        price0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
        price1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
        skim(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        swap(amount0Out: PromiseOrValue<BigNumberish>, amount1Out: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        sync(overrides?: CallOverrides): Promise<void>;
        token0(overrides?: CallOverrides): Promise<string>;
        token1(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter$2;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter$2;
        "Burn(address,uint256,uint256,address)"(sender?: PromiseOrValue<string> | null, amount0?: null, amount1?: null, to?: PromiseOrValue<string> | null): BurnEventFilter$1;
        Burn(sender?: PromiseOrValue<string> | null, amount0?: null, amount1?: null, to?: PromiseOrValue<string> | null): BurnEventFilter$1;
        "Mint(address,uint256,uint256)"(sender?: PromiseOrValue<string> | null, amount0?: null, amount1?: null): MintEventFilter;
        Mint(sender?: PromiseOrValue<string> | null, amount0?: null, amount1?: null): MintEventFilter;
        "Swap(address,uint256,uint256,uint256,uint256,address)"(sender?: PromiseOrValue<string> | null, amount0In?: null, amount1In?: null, amount0Out?: null, amount1Out?: null, to?: PromiseOrValue<string> | null): SwapEventFilter;
        Swap(sender?: PromiseOrValue<string> | null, amount0In?: null, amount1In?: null, amount0Out?: null, amount1Out?: null, to?: PromiseOrValue<string> | null): SwapEventFilter;
        "Sync(uint112,uint112)"(reserve0?: null, reserve1?: null): SyncEventFilter;
        Sync(reserve0?: null, reserve1?: null): SyncEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter$2;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter$2;
    };
    estimateGas: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        MINIMUM_LIQUIDITY(overrides?: CallOverrides): Promise<BigNumber>;
        PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        getReserves(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        kLast(overrides?: CallOverrides): Promise<BigNumber>;
        mint(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        price0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
        price1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
        skim(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swap(amount0Out: PromiseOrValue<BigNumberish>, amount1Out: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        sync(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        token0(overrides?: CallOverrides): Promise<BigNumber>;
        token1(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MINIMUM_LIQUIDITY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        kLast(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        price0CumulativeLast(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        price1CumulativeLast(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        skim(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swap(amount0Out: PromiseOrValue<BigNumberish>, amount1Out: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sync(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

interface IRouter02Interface extends utils.Interface {
    functions: {
        "WETH()": FunctionFragment;
        "addLiquidity(address,address,uint256,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "addLiquidityETH(address,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "factory()": FunctionFragment;
        "getAmountIn(uint256,uint256,uint256)": FunctionFragment;
        "getAmountOut(uint256,uint256,uint256)": FunctionFragment;
        "getAmountsIn(uint256,address[])": FunctionFragment;
        "getAmountsOut(uint256,address[])": FunctionFragment;
        "quote(uint256,uint256,uint256)": FunctionFragment;
        "removeLiquidity(address,address,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "removeLiquidityETH(address,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "removeLiquidityETHSupportingFeeOnTransferTokens(address,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "removeLiquidityETHWithPermit(address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)": FunctionFragment;
        "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)": FunctionFragment;
        "removeLiquidityWithPermit(address,address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)": FunctionFragment;
        "swapETHForExactTokens(uint256,address[],address,uint256)": FunctionFragment;
        "swapExactETHForTokens(uint256,address[],address,uint256)": FunctionFragment;
        "swapExactETHForTokensSupportingFeeOnTransferTokens(uint256,address[],address,uint256)": FunctionFragment;
        "swapExactTokensForETH(uint256,uint256,address[],address,uint256)": FunctionFragment;
        "swapExactTokensForETHSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
        "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
        "swapExactTokensForTokensSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
        "swapTokensForExactETH(uint256,uint256,address[],address,uint256)": FunctionFragment;
        "swapTokensForExactTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "WETH" | "addLiquidity" | "addLiquidityETH" | "factory" | "getAmountIn" | "getAmountOut" | "getAmountsIn" | "getAmountsOut" | "quote" | "removeLiquidity" | "removeLiquidityETH" | "removeLiquidityETHSupportingFeeOnTransferTokens" | "removeLiquidityETHWithPermit" | "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens" | "removeLiquidityWithPermit" | "swapETHForExactTokens" | "swapExactETHForTokens" | "swapExactETHForTokensSupportingFeeOnTransferTokens" | "swapExactTokensForETH" | "swapExactTokensForETHSupportingFeeOnTransferTokens" | "swapExactTokensForTokens" | "swapExactTokensForTokensSupportingFeeOnTransferTokens" | "swapTokensForExactETH" | "swapTokensForExactTokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "addLiquidity", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "addLiquidityETH", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAmountIn", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getAmountOut", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getAmountsIn", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "getAmountsOut", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "quote", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidity", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityETH", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityETHSupportingFeeOnTransferTokens", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityETHWithPermit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityWithPermit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "swapETHForExactTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapExactETHForTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapExactETHForTokensSupportingFeeOnTransferTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForETH", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForETHSupportingFeeOnTransferTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokensSupportingFeeOnTransferTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapTokensForExactETH", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapTokensForExactTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addLiquidityETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountsIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountsOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityETHSupportingFeeOnTransferTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityETHWithPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityWithPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapETHForExactTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactETHForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactETHForTokensSupportingFeeOnTransferTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForETHSupportingFeeOnTransferTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokensSupportingFeeOnTransferTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapTokensForExactETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapTokensForExactTokens", data: BytesLike): Result;
    events: {};
}
interface IRouter02 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IRouter02Interface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        WETH(overrides?: CallOverrides): Promise<[string]>;
        addLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addLiquidityETH(token: PromiseOrValue<string>, amountTokenDesired: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        getAmountIn(amountOut: PromiseOrValue<BigNumberish>, reserveIn: PromiseOrValue<BigNumberish>, reserveOut: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            amountIn: BigNumber;
        }>;
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, reserveIn: PromiseOrValue<BigNumberish>, reserveOut: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            amountOut: BigNumber;
        }>;
        getAmountsIn(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            amounts: BigNumber[];
        }>;
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            amounts: BigNumber[];
        }>;
        quote(amountA: PromiseOrValue<BigNumberish>, reserveA: PromiseOrValue<BigNumberish>, reserveB: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            amountB: BigNumber;
        }>;
        removeLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityETH(token: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityETHSupportingFeeOnTransferTokens(token: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityETHWithPermit(token: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(token: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityWithPermit(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapETHForExactTokens(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactETHForTokens(amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapTokensForExactETH(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapTokensForExactTokens(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    WETH(overrides?: CallOverrides): Promise<string>;
    addLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addLiquidityETH(token: PromiseOrValue<string>, amountTokenDesired: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    factory(overrides?: CallOverrides): Promise<string>;
    getAmountIn(amountOut: PromiseOrValue<BigNumberish>, reserveIn: PromiseOrValue<BigNumberish>, reserveOut: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getAmountOut(amountIn: PromiseOrValue<BigNumberish>, reserveIn: PromiseOrValue<BigNumberish>, reserveOut: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getAmountsIn(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
    quote(amountA: PromiseOrValue<BigNumberish>, reserveA: PromiseOrValue<BigNumberish>, reserveB: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    removeLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityETH(token: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityETHSupportingFeeOnTransferTokens(token: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityETHWithPermit(token: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(token: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityWithPermit(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapETHForExactTokens(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactETHForTokens(amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapTokensForExactETH(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapTokensForExactTokens(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        WETH(overrides?: CallOverrides): Promise<string>;
        addLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
        addLiquidityETH(token: PromiseOrValue<string>, amountTokenDesired: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountToken: BigNumber;
            amountETH: BigNumber;
            liquidity: BigNumber;
        }>;
        factory(overrides?: CallOverrides): Promise<string>;
        getAmountIn(amountOut: PromiseOrValue<BigNumberish>, reserveIn: PromiseOrValue<BigNumberish>, reserveOut: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, reserveIn: PromiseOrValue<BigNumberish>, reserveOut: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountsIn(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        quote(amountA: PromiseOrValue<BigNumberish>, reserveA: PromiseOrValue<BigNumberish>, reserveB: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        removeLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
        removeLiquidityETH(token: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountToken: BigNumber;
            amountETH: BigNumber;
        }>;
        removeLiquidityETHSupportingFeeOnTransferTokens(token: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        removeLiquidityETHWithPermit(token: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountToken: BigNumber;
            amountETH: BigNumber;
        }>;
        removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(token: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        removeLiquidityWithPermit(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
        swapETHForExactTokens(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactETHForTokens(amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        swapTokensForExactETH(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapTokensForExactTokens(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
    };
    filters: {};
    estimateGas: {
        WETH(overrides?: CallOverrides): Promise<BigNumber>;
        addLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addLiquidityETH(token: PromiseOrValue<string>, amountTokenDesired: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        getAmountIn(amountOut: PromiseOrValue<BigNumberish>, reserveIn: PromiseOrValue<BigNumberish>, reserveOut: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, reserveIn: PromiseOrValue<BigNumberish>, reserveOut: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountsIn(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;
        quote(amountA: PromiseOrValue<BigNumberish>, reserveA: PromiseOrValue<BigNumberish>, reserveB: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        removeLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeLiquidityETH(token: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeLiquidityETHSupportingFeeOnTransferTokens(token: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeLiquidityETHWithPermit(token: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(token: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeLiquidityWithPermit(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapETHForExactTokens(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactETHForTokens(amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapTokensForExactETH(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapTokensForExactTokens(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addLiquidityETH(token: PromiseOrValue<string>, amountTokenDesired: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountIn(amountOut: PromiseOrValue<BigNumberish>, reserveIn: PromiseOrValue<BigNumberish>, reserveOut: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, reserveIn: PromiseOrValue<BigNumberish>, reserveOut: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountsIn(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quote(amountA: PromiseOrValue<BigNumberish>, reserveA: PromiseOrValue<BigNumberish>, reserveB: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityETH(token: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityETHSupportingFeeOnTransferTokens(token: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityETHWithPermit(token: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(token: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityWithPermit(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, approveMax: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapETHForExactTokens(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactETHForTokens(amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapTokensForExactETH(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapTokensForExactTokens(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

interface MilkyWayInterface extends utils.Interface {
    functions: {
        "baybackStat(uint256)": FunctionFragment;
        "baybackStatLength()": FunctionFragment;
        "bnb()": FunctionFragment;
        "bnbAddress()": FunctionFragment;
        "buyBackFromRewards(uint256)": FunctionFragment;
        "calcAmountToBayback()": FunctionFragment;
        "calcAmountToInvest()": FunctionFragment;
        "changeInvestPoolShare(address,int128)": FunctionFragment;
        "doBuyBack()": FunctionFragment;
        "invest(address)": FunctionFragment;
        "investAll()": FunctionFragment;
        "investPoolLastIndex()": FunctionFragment;
        "investPoolShare(uint256)": FunctionFragment;
        "investStat(uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setInvestController(address,bool)": FunctionFragment;
        "slrAddress()": FunctionFragment;
        "slrPairAddress()": FunctionFragment;
        "totalBayback()": FunctionFragment;
        "totalInvested()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "baybackStat" | "baybackStatLength" | "bnb" | "bnbAddress" | "buyBackFromRewards" | "calcAmountToBayback" | "calcAmountToInvest" | "changeInvestPoolShare" | "doBuyBack" | "invest" | "investAll" | "investPoolLastIndex" | "investPoolShare" | "investStat" | "owner" | "renounceOwnership" | "setInvestController" | "slrAddress" | "slrPairAddress" | "totalBayback" | "totalInvested" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "baybackStat", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "baybackStatLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "bnb", values?: undefined): string;
    encodeFunctionData(functionFragment: "bnbAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "buyBackFromRewards", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "calcAmountToBayback", values?: undefined): string;
    encodeFunctionData(functionFragment: "calcAmountToInvest", values?: undefined): string;
    encodeFunctionData(functionFragment: "changeInvestPoolShare", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "doBuyBack", values?: undefined): string;
    encodeFunctionData(functionFragment: "invest", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "investAll", values?: undefined): string;
    encodeFunctionData(functionFragment: "investPoolLastIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "investPoolShare", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "investStat", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setInvestController", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "slrAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "slrPairAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalBayback", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalInvested", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "baybackStat", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baybackStatLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bnb", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bnbAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buyBackFromRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcAmountToBayback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcAmountToInvest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeInvestPoolShare", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "doBuyBack", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "invest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "investAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "investPoolLastIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "investPoolShare", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "investStat", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInvestController", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slrAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slrPairAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalBayback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalInvested", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "Bayback(uint128,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Bayback"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
interface BaybackEventObject {
    bnbAmount: BigNumber;
    slrAmount: BigNumber;
}
declare type BaybackEvent = TypedEvent<[
    BigNumber,
    BigNumber
], BaybackEventObject>;
declare type BaybackEventFilter = TypedEventFilter<BaybackEvent>;
interface OwnershipTransferredEventObject$4 {
    previousOwner: string;
    newOwner: string;
}
declare type OwnershipTransferredEvent$4 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$4>;
declare type OwnershipTransferredEventFilter$4 = TypedEventFilter<OwnershipTransferredEvent$4>;
interface MilkyWay extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MilkyWayInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        baybackStat(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            number
        ] & {
            bnbAmount: BigNumber;
            slrAmount: BigNumber;
            lpMinted: BigNumber;
            timestamp: number;
        }>;
        baybackStatLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        bnb(overrides?: CallOverrides): Promise<[string]>;
        bnbAddress(overrides?: CallOverrides): Promise<[string]>;
        buyBackFromRewards(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        calcAmountToBayback(overrides?: CallOverrides): Promise<[BigNumber] & {
            amountToBayback: BigNumber;
        }>;
        calcAmountToInvest(overrides?: CallOverrides): Promise<[BigNumber] & {
            amountToInvest: BigNumber;
        }>;
        changeInvestPoolShare(_controller: PromiseOrValue<string>, _share: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        doBuyBack(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        invest(_controller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        investAll(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        investPoolLastIndex(overrides?: CallOverrides): Promise<[BigNumber]>;
        investPoolShare(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber] & {
            controller: string;
            share: BigNumber;
        }>;
        investStat(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, number] & {
            amount: BigNumber;
            timestamp: number;
        }>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setInvestController(_address: PromiseOrValue<string>, _active: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        slrAddress(overrides?: CallOverrides): Promise<[string]>;
        slrPairAddress(overrides?: CallOverrides): Promise<[string]>;
        totalBayback(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalInvested(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    baybackStat(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        number
    ] & {
        bnbAmount: BigNumber;
        slrAmount: BigNumber;
        lpMinted: BigNumber;
        timestamp: number;
    }>;
    baybackStatLength(overrides?: CallOverrides): Promise<BigNumber>;
    bnb(overrides?: CallOverrides): Promise<string>;
    bnbAddress(overrides?: CallOverrides): Promise<string>;
    buyBackFromRewards(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    calcAmountToBayback(overrides?: CallOverrides): Promise<BigNumber>;
    calcAmountToInvest(overrides?: CallOverrides): Promise<BigNumber>;
    changeInvestPoolShare(_controller: PromiseOrValue<string>, _share: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    doBuyBack(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    invest(_controller: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    investAll(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    investPoolLastIndex(overrides?: CallOverrides): Promise<BigNumber>;
    investPoolShare(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber] & {
        controller: string;
        share: BigNumber;
    }>;
    investStat(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, number] & {
        amount: BigNumber;
        timestamp: number;
    }>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setInvestController(_address: PromiseOrValue<string>, _active: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    slrAddress(overrides?: CallOverrides): Promise<string>;
    slrPairAddress(overrides?: CallOverrides): Promise<string>;
    totalBayback(overrides?: CallOverrides): Promise<BigNumber>;
    totalInvested(overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        baybackStat(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            number
        ] & {
            bnbAmount: BigNumber;
            slrAmount: BigNumber;
            lpMinted: BigNumber;
            timestamp: number;
        }>;
        baybackStatLength(overrides?: CallOverrides): Promise<BigNumber>;
        bnb(overrides?: CallOverrides): Promise<string>;
        bnbAddress(overrides?: CallOverrides): Promise<string>;
        buyBackFromRewards(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        calcAmountToBayback(overrides?: CallOverrides): Promise<BigNumber>;
        calcAmountToInvest(overrides?: CallOverrides): Promise<BigNumber>;
        changeInvestPoolShare(_controller: PromiseOrValue<string>, _share: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        doBuyBack(overrides?: CallOverrides): Promise<void>;
        invest(_controller: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        investAll(overrides?: CallOverrides): Promise<void>;
        investPoolLastIndex(overrides?: CallOverrides): Promise<BigNumber>;
        investPoolShare(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber] & {
            controller: string;
            share: BigNumber;
        }>;
        investStat(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, number] & {
            amount: BigNumber;
            timestamp: number;
        }>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setInvestController(_address: PromiseOrValue<string>, _active: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        slrAddress(overrides?: CallOverrides): Promise<string>;
        slrPairAddress(overrides?: CallOverrides): Promise<string>;
        totalBayback(overrides?: CallOverrides): Promise<BigNumber>;
        totalInvested(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Bayback(uint128,uint256)"(bnbAmount?: null, slrAmount?: null): BaybackEventFilter;
        Bayback(bnbAmount?: null, slrAmount?: null): BaybackEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$4;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$4;
    };
    estimateGas: {
        baybackStat(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        baybackStatLength(overrides?: CallOverrides): Promise<BigNumber>;
        bnb(overrides?: CallOverrides): Promise<BigNumber>;
        bnbAddress(overrides?: CallOverrides): Promise<BigNumber>;
        buyBackFromRewards(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        calcAmountToBayback(overrides?: CallOverrides): Promise<BigNumber>;
        calcAmountToInvest(overrides?: CallOverrides): Promise<BigNumber>;
        changeInvestPoolShare(_controller: PromiseOrValue<string>, _share: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        doBuyBack(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        invest(_controller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        investAll(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        investPoolLastIndex(overrides?: CallOverrides): Promise<BigNumber>;
        investPoolShare(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        investStat(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setInvestController(_address: PromiseOrValue<string>, _active: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        slrAddress(overrides?: CallOverrides): Promise<BigNumber>;
        slrPairAddress(overrides?: CallOverrides): Promise<BigNumber>;
        totalBayback(overrides?: CallOverrides): Promise<BigNumber>;
        totalInvested(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        baybackStat(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baybackStatLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bnb(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bnbAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buyBackFromRewards(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        calcAmountToBayback(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calcAmountToInvest(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        changeInvestPoolShare(_controller: PromiseOrValue<string>, _share: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        doBuyBack(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        invest(_controller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        investAll(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        investPoolLastIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        investPoolShare(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        investStat(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setInvestController(_address: PromiseOrValue<string>, _active: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        slrAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        slrPairAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalBayback(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalInvested(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

interface MulticallInterface extends utils.Interface {
    functions: {
        "aggregate((address,bytes)[])": FunctionFragment;
        "getBlockHash(uint256)": FunctionFragment;
        "getCurrentBlockCoinbase()": FunctionFragment;
        "getCurrentBlockDifficulty()": FunctionFragment;
        "getCurrentBlockGasLimit()": FunctionFragment;
        "getCurrentBlockTimestamp()": FunctionFragment;
        "getEthBalance(address)": FunctionFragment;
        "getLastBlockHash()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "aggregate" | "getBlockHash" | "getCurrentBlockCoinbase" | "getCurrentBlockDifficulty" | "getCurrentBlockGasLimit" | "getCurrentBlockTimestamp" | "getEthBalance" | "getLastBlockHash"): FunctionFragment;
    encodeFunctionData(functionFragment: "aggregate", values: [Multicall.CallStruct[]]): string;
    encodeFunctionData(functionFragment: "getBlockHash", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getCurrentBlockCoinbase", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentBlockDifficulty", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentBlockGasLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentBlockTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "getEthBalance", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getLastBlockHash", values?: undefined): string;
    decodeFunctionResult(functionFragment: "aggregate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBlockHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentBlockCoinbase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentBlockDifficulty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentBlockGasLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentBlockTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEthBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLastBlockHash", data: BytesLike): Result;
    events: {};
}
declare namespace Multicall {
    type CallStruct = {
        target: PromiseOrValue<string>;
        callData: PromiseOrValue<BytesLike>;
    };
    type CallStructOutput = [string, string] & {
        target: string;
        callData: string;
    };
}
interface Multicall extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MulticallInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        aggregate(calls: Multicall.CallStruct[], overrides?: CallOverrides): Promise<[
            BigNumber,
            string[]
        ] & {
            blockNumber: BigNumber;
            returnData: string[];
        }>;
        getBlockHash(blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            blockHash: string;
        }>;
        getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<[string] & {
            coinbase: string;
        }>;
        getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<[BigNumber] & {
            difficulty: BigNumber;
        }>;
        getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<[BigNumber] & {
            gaslimit: BigNumber;
        }>;
        getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<[BigNumber] & {
            timestamp: BigNumber;
        }>;
        getEthBalance(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            balance: BigNumber;
        }>;
        getLastBlockHash(overrides?: CallOverrides): Promise<[string] & {
            blockHash: string;
        }>;
    };
    aggregate(calls: Multicall.CallStruct[], overrides?: CallOverrides): Promise<[
        BigNumber,
        string[]
    ] & {
        blockNumber: BigNumber;
        returnData: string[];
    }>;
    getBlockHash(blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<string>;
    getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>;
    getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
    getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    getEthBalance(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getLastBlockHash(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        aggregate(calls: Multicall.CallStruct[], overrides?: CallOverrides): Promise<[
            BigNumber,
            string[]
        ] & {
            blockNumber: BigNumber;
            returnData: string[];
        }>;
        getBlockHash(blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<string>;
        getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        getEthBalance(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getLastBlockHash(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        aggregate(calls: Multicall.CallStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        getBlockHash(blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        getEthBalance(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getLastBlockHash(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        aggregate(calls: Multicall.CallStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBlockHash(blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEthBalance(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLastBlockHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

interface PresaleServiceInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "MINTER_ROLE()": FunctionFragment;
        "PAUSER_ROLE()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "burnAll()": FunctionFragment;
        "burnFrom(address,uint256)": FunctionFragment;
        "buy(uint256,address)": FunctionFragment;
        "deadAddress()": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "discount(address)": FunctionFragment;
        "discountDivider()": FunctionFragment;
        "getCurrentPhaseCountdown()": FunctionFragment;
        "getCurrentPhaseEndTime()": FunctionFragment;
        "getMyDiscount()": FunctionFragment;
        "getPhase()": FunctionFragment;
        "getPhaseAmountOut(address,uint256,uint8)": FunctionFragment;
        "getPhasesAmount()": FunctionFragment;
        "getPhasesMaxAmount()": FunctionFragment;
        "getPhasesTime()": FunctionFragment;
        "getPrices()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "isLaunched()": FunctionFragment;
        "join(address)": FunctionFragment;
        "joined(address)": FunctionFragment;
        "launchingTokenPrice()": FunctionFragment;
        "mint(address,uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "phasesTime(uint256)": FunctionFragment;
        "referralActionBuy()": FunctionFragment;
        "referralContractAddress()": FunctionFragment;
        "referrerRewardDivider()": FunctionFragment;
        "referrerRewardPercent()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "routerAddress()": FunctionFragment;
        "setDiscount(address,uint256)": FunctionFragment;
        "setPhases(uint256[4],uint256[3],uint256[2],uint256)": FunctionFragment;
        "setRouterAddress(address)": FunctionFragment;
        "setTokenAddress(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "tokenAddress()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unpause()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "MINTER_ROLE" | "PAUSER_ROLE" | "allowance" | "approve" | "balanceOf" | "burn" | "burnAll" | "burnFrom" | "buy" | "deadAddress" | "decimals" | "decreaseAllowance" | "discount" | "discountDivider" | "getCurrentPhaseCountdown" | "getCurrentPhaseEndTime" | "getMyDiscount" | "getPhase" | "getPhaseAmountOut" | "getPhasesAmount" | "getPhasesMaxAmount" | "getPhasesTime" | "getPrices" | "getRoleAdmin" | "getRoleMember" | "getRoleMemberCount" | "grantRole" | "hasRole" | "increaseAllowance" | "isLaunched" | "join" | "joined" | "launchingTokenPrice" | "mint" | "name" | "owner" | "pause" | "paused" | "phasesTime" | "referralActionBuy" | "referralContractAddress" | "referrerRewardDivider" | "referrerRewardPercent" | "renounceOwnership" | "renounceRole" | "revokeRole" | "routerAddress" | "setDiscount" | "setPhases" | "setRouterAddress" | "setTokenAddress" | "supportsInterface" | "symbol" | "tokenAddress" | "totalSupply" | "transfer" | "transferFrom" | "transferOwnership" | "unpause"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MINTER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "PAUSER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "burn", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "burnAll", values?: undefined): string;
    encodeFunctionData(functionFragment: "burnFrom", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "buy", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "deadAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "discount", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "discountDivider", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentPhaseCountdown", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentPhaseEndTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMyDiscount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPhase", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPhaseAmountOut", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getPhasesAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPhasesMaxAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPhasesTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPrices", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isLaunched", values?: undefined): string;
    encodeFunctionData(functionFragment: "join", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "joined", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "launchingTokenPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "phasesTime", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "referralActionBuy", values?: undefined): string;
    encodeFunctionData(functionFragment: "referralContractAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "referrerRewardDivider", values?: undefined): string;
    encodeFunctionData(functionFragment: "referrerRewardPercent", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "routerAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "setDiscount", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setPhases", values: [
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setRouterAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setTokenAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MINTER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PAUSER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deadAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "discount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "discountDivider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentPhaseCountdown", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentPhaseEndTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMyDiscount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPhase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPhaseAmountOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPhasesAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPhasesMaxAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPhasesTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPrices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isLaunched", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "join", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "joined", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "launchingTokenPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "phasesTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referralActionBuy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referralContractAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referrerRewardDivider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referrerRewardPercent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "routerAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDiscount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPhases", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRouterAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTokenAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    events: {
        "AddLiquidity(uint256,uint256)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "Burn(uint256,address)": EventFragment;
        "Buy(uint256,uint256,uint8,address)": EventFragment;
        "Join(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Paused(address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "SetDiscount(address,uint256)": EventFragment;
        "SetPhases(uint256[4],uint256[3],uint256[2],uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "TryTransfer(address,address,uint256)": EventFragment;
        "Unpaused(address)": EventFragment;
        "UpdateRouterAddress(address)": EventFragment;
        "UpdateTokenAddress(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddLiquidity"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Buy"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Join"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetDiscount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPhases"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TryTransfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateRouterAddress"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateTokenAddress"): EventFragment;
}
interface AddLiquidityEventObject {
    tokenAmount: BigNumber;
    ethAmount: BigNumber;
}
declare type AddLiquidityEvent = TypedEvent<[
    BigNumber,
    BigNumber
], AddLiquidityEventObject>;
declare type AddLiquidityEventFilter = TypedEventFilter<AddLiquidityEvent>;
interface ApprovalEventObject$1 {
    owner: string;
    spender: string;
    value: BigNumber;
}
declare type ApprovalEvent$1 = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject$1>;
declare type ApprovalEventFilter$1 = TypedEventFilter<ApprovalEvent$1>;
interface BurnEventObject {
    amount: BigNumber;
    owner: string;
}
declare type BurnEvent = TypedEvent<[BigNumber, string], BurnEventObject>;
declare type BurnEventFilter = TypedEventFilter<BurnEvent>;
interface BuyEventObject {
    amountIn: BigNumber;
    amountOut: BigNumber;
    phase: number;
    owner: string;
}
declare type BuyEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    number,
    string
], BuyEventObject>;
declare type BuyEventFilter = TypedEventFilter<BuyEvent>;
interface JoinEventObject {
    owner: string;
}
declare type JoinEvent = TypedEvent<[string], JoinEventObject>;
declare type JoinEventFilter = TypedEventFilter<JoinEvent>;
interface OwnershipTransferredEventObject$3 {
    previousOwner: string;
    newOwner: string;
}
declare type OwnershipTransferredEvent$3 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$3>;
declare type OwnershipTransferredEventFilter$3 = TypedEventFilter<OwnershipTransferredEvent$3>;
interface PausedEventObject$2 {
    account: string;
}
declare type PausedEvent$2 = TypedEvent<[string], PausedEventObject$2>;
declare type PausedEventFilter$2 = TypedEventFilter<PausedEvent$2>;
interface RoleAdminChangedEventObject$2 {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
declare type RoleAdminChangedEvent$2 = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject$2>;
declare type RoleAdminChangedEventFilter$2 = TypedEventFilter<RoleAdminChangedEvent$2>;
interface RoleGrantedEventObject$2 {
    role: string;
    account: string;
    sender: string;
}
declare type RoleGrantedEvent$2 = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject$2>;
declare type RoleGrantedEventFilter$2 = TypedEventFilter<RoleGrantedEvent$2>;
interface RoleRevokedEventObject$2 {
    role: string;
    account: string;
    sender: string;
}
declare type RoleRevokedEvent$2 = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject$2>;
declare type RoleRevokedEventFilter$2 = TypedEventFilter<RoleRevokedEvent$2>;
interface SetDiscountEventObject {
    owner: string;
    discount: BigNumber;
}
declare type SetDiscountEvent = TypedEvent<[
    string,
    BigNumber
], SetDiscountEventObject>;
declare type SetDiscountEventFilter = TypedEventFilter<SetDiscountEvent>;
interface SetPhasesEventObject {
    phasesTime: [BigNumber, BigNumber, BigNumber, BigNumber];
    phasesPrices: [BigNumber, BigNumber, BigNumber];
    phasesMaxAmount: [BigNumber, BigNumber];
    launchingPrice: BigNumber;
}
declare type SetPhasesEvent = TypedEvent<[
    [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ],
    [
        BigNumber,
        BigNumber,
        BigNumber
    ],
    [
        BigNumber,
        BigNumber
    ],
    BigNumber
], SetPhasesEventObject>;
declare type SetPhasesEventFilter = TypedEventFilter<SetPhasesEvent>;
interface TransferEventObject$1 {
    from: string;
    to: string;
    value: BigNumber;
}
declare type TransferEvent$1 = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject$1>;
declare type TransferEventFilter$1 = TypedEventFilter<TransferEvent$1>;
interface TryTransferEventObject {
    from: string;
    to: string;
    amount: BigNumber;
}
declare type TryTransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TryTransferEventObject>;
declare type TryTransferEventFilter = TypedEventFilter<TryTransferEvent>;
interface UnpausedEventObject$2 {
    account: string;
}
declare type UnpausedEvent$2 = TypedEvent<[string], UnpausedEventObject$2>;
declare type UnpausedEventFilter$2 = TypedEventFilter<UnpausedEvent$2>;
interface UpdateRouterAddressEventObject {
    tokenAddress: string;
}
declare type UpdateRouterAddressEvent = TypedEvent<[
    string
], UpdateRouterAddressEventObject>;
declare type UpdateRouterAddressEventFilter = TypedEventFilter<UpdateRouterAddressEvent>;
interface UpdateTokenAddressEventObject {
    tokenAddress: string;
}
declare type UpdateTokenAddressEvent = TypedEvent<[
    string
], UpdateTokenAddressEventObject>;
declare type UpdateTokenAddressEventFilter = TypedEventFilter<UpdateTokenAddressEvent>;
interface PresaleService extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PresaleServiceInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        MINTER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        PAUSER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        burnAll(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        burnFrom(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        buy(_amountOut: PromiseOrValue<BigNumberish>, _referrer: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deadAddress(overrides?: CallOverrides): Promise<[string]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        discount(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        discountDivider(overrides?: CallOverrides): Promise<[BigNumber]>;
        getCurrentPhaseCountdown(overrides?: CallOverrides): Promise<[number] & {
            countdown: number;
        }>;
        getCurrentPhaseEndTime(overrides?: CallOverrides): Promise<[number] & {
            endTime: number;
        }>;
        getMyDiscount(overrides?: CallOverrides): Promise<[BigNumber] & {
            myDiscount: BigNumber;
        }>;
        getPhase(overrides?: CallOverrides): Promise<[number] & {
            phase: number;
        }>;
        getPhaseAmountOut(owner: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, phase: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPhasesAmount(overrides?: CallOverrides): Promise<[
            [BigNumber, BigNumber, BigNumber]
        ] & {
            phases: [BigNumber, BigNumber, BigNumber];
        }>;
        getPhasesMaxAmount(overrides?: CallOverrides): Promise<[[BigNumber, BigNumber]] & {
            phases: [BigNumber, BigNumber];
        }>;
        getPhasesTime(overrides?: CallOverrides): Promise<[
            [BigNumber, BigNumber, BigNumber, BigNumber]
        ] & {
            phases: [BigNumber, BigNumber, BigNumber, BigNumber];
        }>;
        getPrices(overrides?: CallOverrides): Promise<[
            [BigNumber, BigNumber, BigNumber]
        ] & {
            prises: [BigNumber, BigNumber, BigNumber];
        }>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isLaunched(overrides?: CallOverrides): Promise<[boolean]>;
        join(_referrer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        joined(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        launchingTokenPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        mint(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        phasesTime(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        referralActionBuy(overrides?: CallOverrides): Promise<[number]>;
        referralContractAddress(overrides?: CallOverrides): Promise<[string]>;
        referrerRewardDivider(overrides?: CallOverrides): Promise<[BigNumber]>;
        referrerRewardPercent(overrides?: CallOverrides): Promise<[BigNumber]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        routerAddress(overrides?: CallOverrides): Promise<[string]>;
        setDiscount(_owner: PromiseOrValue<string>, _discount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPhases(_phasesTime: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _phasesPrices: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _phasesMaxAmount: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _launchingPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRouterAddress(_routerAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTokenAddress(_tokenAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        tokenAddress(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    MINTER_ROLE(overrides?: CallOverrides): Promise<string>;
    PAUSER_ROLE(overrides?: CallOverrides): Promise<string>;
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    burn(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    burnAll(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    burnFrom(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    buy(_amountOut: PromiseOrValue<BigNumberish>, _referrer: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deadAddress(overrides?: CallOverrides): Promise<string>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    discount(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    discountDivider(overrides?: CallOverrides): Promise<BigNumber>;
    getCurrentPhaseCountdown(overrides?: CallOverrides): Promise<number>;
    getCurrentPhaseEndTime(overrides?: CallOverrides): Promise<number>;
    getMyDiscount(overrides?: CallOverrides): Promise<BigNumber>;
    getPhase(overrides?: CallOverrides): Promise<number>;
    getPhaseAmountOut(owner: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, phase: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getPhasesAmount(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    getPhasesMaxAmount(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    getPhasesTime(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
    getPrices(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isLaunched(overrides?: CallOverrides): Promise<boolean>;
    join(_referrer: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    joined(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    launchingTokenPrice(overrides?: CallOverrides): Promise<BigNumber>;
    mint(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    phasesTime(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    referralActionBuy(overrides?: CallOverrides): Promise<number>;
    referralContractAddress(overrides?: CallOverrides): Promise<string>;
    referrerRewardDivider(overrides?: CallOverrides): Promise<BigNumber>;
    referrerRewardPercent(overrides?: CallOverrides): Promise<BigNumber>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    routerAddress(overrides?: CallOverrides): Promise<string>;
    setDiscount(_owner: PromiseOrValue<string>, _discount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPhases(_phasesTime: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], _phasesPrices: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], _phasesMaxAmount: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], _launchingPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRouterAddress(_routerAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTokenAddress(_tokenAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    tokenAddress(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unpause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        MINTER_ROLE(overrides?: CallOverrides): Promise<string>;
        PAUSER_ROLE(overrides?: CallOverrides): Promise<string>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        burnAll(overrides?: CallOverrides): Promise<void>;
        burnFrom(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        buy(_amountOut: PromiseOrValue<BigNumberish>, _referrer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        deadAddress(overrides?: CallOverrides): Promise<string>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        discount(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        discountDivider(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentPhaseCountdown(overrides?: CallOverrides): Promise<number>;
        getCurrentPhaseEndTime(overrides?: CallOverrides): Promise<number>;
        getMyDiscount(overrides?: CallOverrides): Promise<BigNumber>;
        getPhase(overrides?: CallOverrides): Promise<number>;
        getPhaseAmountOut(owner: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, phase: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPhasesAmount(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getPhasesMaxAmount(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getPhasesTime(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        getPrices(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        isLaunched(overrides?: CallOverrides): Promise<boolean>;
        join(_referrer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        joined(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        launchingTokenPrice(overrides?: CallOverrides): Promise<BigNumber>;
        mint(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        phasesTime(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        referralActionBuy(overrides?: CallOverrides): Promise<number>;
        referralContractAddress(overrides?: CallOverrides): Promise<string>;
        referrerRewardDivider(overrides?: CallOverrides): Promise<BigNumber>;
        referrerRewardPercent(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        routerAddress(overrides?: CallOverrides): Promise<string>;
        setDiscount(_owner: PromiseOrValue<string>, _discount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPhases(_phasesTime: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _phasesPrices: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _phasesMaxAmount: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _launchingPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setRouterAddress(_routerAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setTokenAddress(_tokenAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        tokenAddress(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        unpause(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddLiquidity(uint256,uint256)"(tokenAmount?: null, ethAmount?: null): AddLiquidityEventFilter;
        AddLiquidity(tokenAmount?: null, ethAmount?: null): AddLiquidityEventFilter;
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter$1;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter$1;
        "Burn(uint256,address)"(amount?: null, owner?: PromiseOrValue<string> | null): BurnEventFilter;
        Burn(amount?: null, owner?: PromiseOrValue<string> | null): BurnEventFilter;
        "Buy(uint256,uint256,uint8,address)"(amountIn?: null, amountOut?: null, phase?: null, owner?: PromiseOrValue<string> | null): BuyEventFilter;
        Buy(amountIn?: null, amountOut?: null, phase?: null, owner?: PromiseOrValue<string> | null): BuyEventFilter;
        "Join(address)"(owner?: null): JoinEventFilter;
        Join(owner?: null): JoinEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$3;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$3;
        "Paused(address)"(account?: null): PausedEventFilter$2;
        Paused(account?: null): PausedEventFilter$2;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter$2;
        RoleAdminChanged(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter$2;
        "RoleGranted(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter$2;
        RoleGranted(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter$2;
        "RoleRevoked(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter$2;
        RoleRevoked(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter$2;
        "SetDiscount(address,uint256)"(owner?: PromiseOrValue<string> | null, discount?: null): SetDiscountEventFilter;
        SetDiscount(owner?: PromiseOrValue<string> | null, discount?: null): SetDiscountEventFilter;
        "SetPhases(uint256[4],uint256[3],uint256[2],uint256)"(phasesTime?: null, phasesPrices?: null, phasesMaxAmount?: null, launchingPrice?: null): SetPhasesEventFilter;
        SetPhases(phasesTime?: null, phasesPrices?: null, phasesMaxAmount?: null, launchingPrice?: null): SetPhasesEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter$1;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter$1;
        "TryTransfer(address,address,uint256)"(from?: null, to?: null, amount?: null): TryTransferEventFilter;
        TryTransfer(from?: null, to?: null, amount?: null): TryTransferEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter$2;
        Unpaused(account?: null): UnpausedEventFilter$2;
        "UpdateRouterAddress(address)"(tokenAddress?: null): UpdateRouterAddressEventFilter;
        UpdateRouterAddress(tokenAddress?: null): UpdateRouterAddressEventFilter;
        "UpdateTokenAddress(address)"(tokenAddress?: null): UpdateTokenAddressEventFilter;
        UpdateTokenAddress(tokenAddress?: null): UpdateTokenAddressEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MINTER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        PAUSER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        burnAll(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        burnFrom(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        buy(_amountOut: PromiseOrValue<BigNumberish>, _referrer: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deadAddress(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        discount(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        discountDivider(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentPhaseCountdown(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentPhaseEndTime(overrides?: CallOverrides): Promise<BigNumber>;
        getMyDiscount(overrides?: CallOverrides): Promise<BigNumber>;
        getPhase(overrides?: CallOverrides): Promise<BigNumber>;
        getPhaseAmountOut(owner: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, phase: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPhasesAmount(overrides?: CallOverrides): Promise<BigNumber>;
        getPhasesMaxAmount(overrides?: CallOverrides): Promise<BigNumber>;
        getPhasesTime(overrides?: CallOverrides): Promise<BigNumber>;
        getPrices(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isLaunched(overrides?: CallOverrides): Promise<BigNumber>;
        join(_referrer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        joined(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        launchingTokenPrice(overrides?: CallOverrides): Promise<BigNumber>;
        mint(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        phasesTime(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        referralActionBuy(overrides?: CallOverrides): Promise<BigNumber>;
        referralContractAddress(overrides?: CallOverrides): Promise<BigNumber>;
        referrerRewardDivider(overrides?: CallOverrides): Promise<BigNumber>;
        referrerRewardPercent(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        routerAddress(overrides?: CallOverrides): Promise<BigNumber>;
        setDiscount(_owner: PromiseOrValue<string>, _discount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPhases(_phasesTime: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _phasesPrices: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _phasesMaxAmount: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _launchingPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRouterAddress(_routerAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTokenAddress(_tokenAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        tokenAddress(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MINTER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PAUSER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        burnAll(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        burnFrom(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        buy(_amountOut: PromiseOrValue<BigNumberish>, _referrer: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deadAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        discount(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        discountDivider(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentPhaseCountdown(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentPhaseEndTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMyDiscount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPhase(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPhaseAmountOut(owner: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, phase: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPhasesAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPhasesMaxAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPhasesTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPrices(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isLaunched(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        join(_referrer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        joined(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        launchingTokenPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        phasesTime(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referralActionBuy(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referralContractAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referrerRewardDivider(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referrerRewardPercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        routerAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDiscount(_owner: PromiseOrValue<string>, _discount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPhases(_phasesTime: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _phasesPrices: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _phasesMaxAmount: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _launchingPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRouterAddress(_routerAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTokenAddress(_tokenAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

interface ReferralServiceInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "PAUSER_ROLE()": FunctionFragment;
        "REFERRAL_UPDATER_ROLE()": FunctionFragment;
        "SET_REWARD_TOKEN()": FunctionFragment;
        "accrualHistory(address,uint256)": FunctionFragment;
        "accrualHistoryLength(address)": FunctionFragment;
        "addReferral(address,address)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "owner()": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "referrals(address,uint256)": FunctionFragment;
        "referralsLength(address)": FunctionFragment;
        "referrerClaim()": FunctionFragment;
        "referrerRewardToken()": FunctionFragment;
        "referrers(address)": FunctionFragment;
        "referrersRewards(address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "saveReferrerReward(address,uint128,uint8)": FunctionFragment;
        "setReferrerRewardToken(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "totalPendingRewards()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unpause()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "PAUSER_ROLE" | "REFERRAL_UPDATER_ROLE" | "SET_REWARD_TOKEN" | "accrualHistory" | "accrualHistoryLength" | "addReferral" | "getRoleAdmin" | "getRoleMember" | "getRoleMemberCount" | "grantRole" | "hasRole" | "owner" | "pause" | "paused" | "referrals" | "referralsLength" | "referrerClaim" | "referrerRewardToken" | "referrers" | "referrersRewards" | "renounceOwnership" | "renounceRole" | "revokeRole" | "saveReferrerReward" | "setReferrerRewardToken" | "supportsInterface" | "totalPendingRewards" | "transferOwnership" | "unpause"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "PAUSER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "REFERRAL_UPDATER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "SET_REWARD_TOKEN", values?: undefined): string;
    encodeFunctionData(functionFragment: "accrualHistory", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "accrualHistoryLength", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "addReferral", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "referrals", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "referralsLength", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "referrerClaim", values?: undefined): string;
    encodeFunctionData(functionFragment: "referrerRewardToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "referrers", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "referrersRewards", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "saveReferrerReward", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setReferrerRewardToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "totalPendingRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PAUSER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "REFERRAL_UPDATER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SET_REWARD_TOKEN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accrualHistory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accrualHistoryLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addReferral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referrals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referralsLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referrerClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referrerRewardToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referrers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referrersRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "saveReferrerReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReferrerRewardToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalPendingRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
        "Paused(address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
interface OwnershipTransferredEventObject$2 {
    previousOwner: string;
    newOwner: string;
}
declare type OwnershipTransferredEvent$2 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$2>;
declare type OwnershipTransferredEventFilter$2 = TypedEventFilter<OwnershipTransferredEvent$2>;
interface PausedEventObject$1 {
    account: string;
}
declare type PausedEvent$1 = TypedEvent<[string], PausedEventObject$1>;
declare type PausedEventFilter$1 = TypedEventFilter<PausedEvent$1>;
interface RoleAdminChangedEventObject$1 {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
declare type RoleAdminChangedEvent$1 = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject$1>;
declare type RoleAdminChangedEventFilter$1 = TypedEventFilter<RoleAdminChangedEvent$1>;
interface RoleGrantedEventObject$1 {
    role: string;
    account: string;
    sender: string;
}
declare type RoleGrantedEvent$1 = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject$1>;
declare type RoleGrantedEventFilter$1 = TypedEventFilter<RoleGrantedEvent$1>;
interface RoleRevokedEventObject$1 {
    role: string;
    account: string;
    sender: string;
}
declare type RoleRevokedEvent$1 = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject$1>;
declare type RoleRevokedEventFilter$1 = TypedEventFilter<RoleRevokedEvent$1>;
interface UnpausedEventObject$1 {
    account: string;
}
declare type UnpausedEvent$1 = TypedEvent<[string], UnpausedEventObject$1>;
declare type UnpausedEventFilter$1 = TypedEventFilter<UnpausedEvent$1>;
interface ReferralService extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ReferralServiceInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        PAUSER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        REFERRAL_UPDATER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        SET_REWARD_TOKEN(overrides?: CallOverrides): Promise<[string]>;
        accrualHistory(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            number,
            number
        ] & {
            amount: BigNumber;
            from: string;
            timestamp: number;
            action: number;
        }>;
        accrualHistoryLength(_referrer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        addReferral(_referrer: PromiseOrValue<string>, _referral: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        referrals(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, number] & {
            account: string;
            timestamp: number;
        }>;
        referralsLength(_referrer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        referrerClaim(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        referrerRewardToken(overrides?: CallOverrides): Promise<[string]>;
        referrers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        referrersRewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            reward: BigNumber;
            rewarded: BigNumber;
        }>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        saveReferrerReward(_refferal: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _action: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReferrerRewardToken(_referrerRewardToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        totalPendingRewards(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    PAUSER_ROLE(overrides?: CallOverrides): Promise<string>;
    REFERRAL_UPDATER_ROLE(overrides?: CallOverrides): Promise<string>;
    SET_REWARD_TOKEN(overrides?: CallOverrides): Promise<string>;
    accrualHistory(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        string,
        number,
        number
    ] & {
        amount: BigNumber;
        from: string;
        timestamp: number;
        action: number;
    }>;
    accrualHistoryLength(_referrer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    addReferral(_referrer: PromiseOrValue<string>, _referral: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    pause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    referrals(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, number] & {
        account: string;
        timestamp: number;
    }>;
    referralsLength(_referrer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    referrerClaim(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    referrerRewardToken(overrides?: CallOverrides): Promise<string>;
    referrers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    referrersRewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        reward: BigNumber;
        rewarded: BigNumber;
    }>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    saveReferrerReward(_refferal: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _action: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReferrerRewardToken(_referrerRewardToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    totalPendingRewards(overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unpause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        PAUSER_ROLE(overrides?: CallOverrides): Promise<string>;
        REFERRAL_UPDATER_ROLE(overrides?: CallOverrides): Promise<string>;
        SET_REWARD_TOKEN(overrides?: CallOverrides): Promise<string>;
        accrualHistory(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            number,
            number
        ] & {
            amount: BigNumber;
            from: string;
            timestamp: number;
            action: number;
        }>;
        accrualHistoryLength(_referrer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        addReferral(_referrer: PromiseOrValue<string>, _referral: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        referrals(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, number] & {
            account: string;
            timestamp: number;
        }>;
        referralsLength(_referrer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        referrerClaim(overrides?: CallOverrides): Promise<void>;
        referrerRewardToken(overrides?: CallOverrides): Promise<string>;
        referrers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        referrersRewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            reward: BigNumber;
            rewarded: BigNumber;
        }>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        saveReferrerReward(_refferal: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _action: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setReferrerRewardToken(_referrerRewardToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        totalPendingRewards(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        unpause(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$2;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$2;
        "Paused(address)"(account?: null): PausedEventFilter$1;
        Paused(account?: null): PausedEventFilter$1;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter$1;
        RoleAdminChanged(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter$1;
        "RoleGranted(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter$1;
        RoleGranted(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter$1;
        "RoleRevoked(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter$1;
        RoleRevoked(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter$1;
        "Unpaused(address)"(account?: null): UnpausedEventFilter$1;
        Unpaused(account?: null): UnpausedEventFilter$1;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        PAUSER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        REFERRAL_UPDATER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        SET_REWARD_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;
        accrualHistory(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        accrualHistoryLength(_referrer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        addReferral(_referrer: PromiseOrValue<string>, _referral: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        referrals(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        referralsLength(_referrer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        referrerClaim(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        referrerRewardToken(overrides?: CallOverrides): Promise<BigNumber>;
        referrers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        referrersRewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        saveReferrerReward(_refferal: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _action: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReferrerRewardToken(_referrerRewardToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        totalPendingRewards(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PAUSER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        REFERRAL_UPDATER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SET_REWARD_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accrualHistory(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accrualHistoryLength(_referrer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addReferral(_referrer: PromiseOrValue<string>, _referral: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referrals(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referralsLength(_referrer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referrerClaim(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        referrerRewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referrers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referrersRewards(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        saveReferrerReward(_refferal: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _action: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReferrerRewardToken(_referrerRewardToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalPendingRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

interface SolarTokenInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "MINTER_ROLE()": FunctionFragment;
        "MIN_TX_AMOUNT_HARD_CAP()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "blackList(address)": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "excludeFromAntiWhale(address)": FunctionFragment;
        "excludeFromBlackListBlackList(address)": FunctionFragment;
        "excludeFromFee(address)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "includeInAntiWhale(address)": FunctionFragment;
        "includeInBlackList(address)": FunctionFragment;
        "includeInFee(address)": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "isExcludedFromAntiWhale(address)": FunctionFragment;
        "isExcludedFromFee(address)": FunctionFragment;
        "mainPairAddress()": FunctionFragment;
        "maxAmountToSell()": FunctionFragment;
        "maxTxAmount()": FunctionFragment;
        "milkyWay()": FunctionFragment;
        "milkyWayAddress()": FunctionFragment;
        "minAmountToSell()": FunctionFragment;
        "mint(address,uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "pairAddresses(address)": FunctionFragment;
        "pairSwapFee()": FunctionFragment;
        "pairedTokenAddress()": FunctionFragment;
        "referralActionBuy()": FunctionFragment;
        "referralActionSell()": FunctionFragment;
        "referralActionTransfer()": FunctionFragment;
        "referralServiceAddress()": FunctionFragment;
        "referrerRewardActionBuyPercent()": FunctionFragment;
        "referrerRewardActionSellPercent()": FunctionFragment;
        "referrerRewardActionTransferPercent()": FunctionFragment;
        "referrerRewardDivider()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setAmountToSell(uint256,uint256)": FunctionFragment;
        "setMaxTxAmount(uint256)": FunctionFragment;
        "setMilkyWayAddress(address)": FunctionFragment;
        "setPairAddress(address,bool)": FunctionFragment;
        "setPairSwapFee(uint256)": FunctionFragment;
        "setReferralServiceAddress(address)": FunctionFragment;
        "setReferrerRewardPercents(uint256,uint256,uint256)": FunctionFragment;
        "setTaxBuyFee(uint256)": FunctionFragment;
        "setTaxSellFee(uint256)": FunctionFragment;
        "setTaxTransferFee(uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "taxBuyFee()": FunctionFragment;
        "taxSellFee()": FunctionFragment;
        "taxTransferFee()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "MINTER_ROLE" | "MIN_TX_AMOUNT_HARD_CAP" | "allowance" | "approve" | "balanceOf" | "blackList" | "decimals" | "decreaseAllowance" | "excludeFromAntiWhale" | "excludeFromBlackListBlackList" | "excludeFromFee" | "getRoleAdmin" | "getRoleMember" | "getRoleMemberCount" | "grantRole" | "hasRole" | "includeInAntiWhale" | "includeInBlackList" | "includeInFee" | "increaseAllowance" | "isExcludedFromAntiWhale" | "isExcludedFromFee" | "mainPairAddress" | "maxAmountToSell" | "maxTxAmount" | "milkyWay" | "milkyWayAddress" | "minAmountToSell" | "mint" | "name" | "owner" | "pairAddresses" | "pairSwapFee" | "pairedTokenAddress" | "referralActionBuy" | "referralActionSell" | "referralActionTransfer" | "referralServiceAddress" | "referrerRewardActionBuyPercent" | "referrerRewardActionSellPercent" | "referrerRewardActionTransferPercent" | "referrerRewardDivider" | "renounceOwnership" | "renounceRole" | "revokeRole" | "setAmountToSell" | "setMaxTxAmount" | "setMilkyWayAddress" | "setPairAddress" | "setPairSwapFee" | "setReferralServiceAddress" | "setReferrerRewardPercents" | "setTaxBuyFee" | "setTaxSellFee" | "setTaxTransferFee" | "supportsInterface" | "symbol" | "taxBuyFee" | "taxSellFee" | "taxTransferFee" | "totalSupply" | "transfer" | "transferFrom" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MINTER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_TX_AMOUNT_HARD_CAP", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "blackList", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "excludeFromAntiWhale", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "excludeFromBlackListBlackList", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "excludeFromFee", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "includeInAntiWhale", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "includeInBlackList", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "includeInFee", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isExcludedFromAntiWhale", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isExcludedFromFee", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mainPairAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxAmountToSell", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxTxAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "milkyWay", values?: undefined): string;
    encodeFunctionData(functionFragment: "milkyWayAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "minAmountToSell", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pairAddresses", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "pairSwapFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "pairedTokenAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "referralActionBuy", values?: undefined): string;
    encodeFunctionData(functionFragment: "referralActionSell", values?: undefined): string;
    encodeFunctionData(functionFragment: "referralActionTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "referralServiceAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "referrerRewardActionBuyPercent", values?: undefined): string;
    encodeFunctionData(functionFragment: "referrerRewardActionSellPercent", values?: undefined): string;
    encodeFunctionData(functionFragment: "referrerRewardActionTransferPercent", values?: undefined): string;
    encodeFunctionData(functionFragment: "referrerRewardDivider", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setAmountToSell", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMaxTxAmount", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMilkyWayAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setPairAddress", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setPairSwapFee", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setReferralServiceAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setReferrerRewardPercents", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setTaxBuyFee", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTaxSellFee", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTaxTransferFee", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "taxBuyFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "taxSellFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "taxTransferFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MINTER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_TX_AMOUNT_HARD_CAP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blackList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "excludeFromAntiWhale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "excludeFromBlackListBlackList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "excludeFromFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "includeInAntiWhale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "includeInBlackList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "includeInFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isExcludedFromAntiWhale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isExcludedFromFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mainPairAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxAmountToSell", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxTxAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "milkyWay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "milkyWayAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minAmountToSell", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairSwapFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairedTokenAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referralActionBuy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referralActionSell", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referralActionTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referralServiceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referrerRewardActionBuyPercent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referrerRewardActionSellPercent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referrerRewardActionTransferPercent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referrerRewardDivider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAmountToSell", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxTxAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMilkyWayAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPairAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPairSwapFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReferralServiceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReferrerRewardPercents", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTaxBuyFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTaxSellFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTaxTransferFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "taxBuyFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "taxSellFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "taxTransferFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ExcludeFromAntiWhale(address)": EventFragment;
        "ExcludeFromBlackList(address)": EventFragment;
        "ExcludeFromFee(address)": EventFragment;
        "IncludeInAntiWhale(address)": EventFragment;
        "IncludeInBlackList(address)": EventFragment;
        "IncludeInFee(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "SellTax(uint256,uint256,address)": EventFragment;
        "SetMilkyWayAddress(address)": EventFragment;
        "SetPairAddress(address,bool)": EventFragment;
        "SetReferralServiceAddress(address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "UpdateMaxTxAmount(uint256)": EventFragment;
        "UpdatePairSwapFee(uint256)": EventFragment;
        "UpdateReferrerRewardPercents(uint256,uint256,uint256)": EventFragment;
        "UpdateSellAmounts(uint256,uint256)": EventFragment;
        "UpdateTaxBuyFee(uint256)": EventFragment;
        "UpdateTaxSellFee(uint256)": EventFragment;
        "UpdateTaxTransferFee(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExcludeFromAntiWhale"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExcludeFromBlackList"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExcludeFromFee"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IncludeInAntiWhale"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IncludeInBlackList"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IncludeInFee"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SellTax"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetMilkyWayAddress"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPairAddress"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetReferralServiceAddress"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateMaxTxAmount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdatePairSwapFee"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateReferrerRewardPercents"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateSellAmounts"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateTaxBuyFee"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateTaxSellFee"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateTaxTransferFee"): EventFragment;
}
interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
interface ExcludeFromAntiWhaleEventObject {
    account: string;
}
declare type ExcludeFromAntiWhaleEvent = TypedEvent<[
    string
], ExcludeFromAntiWhaleEventObject>;
declare type ExcludeFromAntiWhaleEventFilter = TypedEventFilter<ExcludeFromAntiWhaleEvent>;
interface ExcludeFromBlackListEventObject {
    account: string;
}
declare type ExcludeFromBlackListEvent = TypedEvent<[
    string
], ExcludeFromBlackListEventObject>;
declare type ExcludeFromBlackListEventFilter = TypedEventFilter<ExcludeFromBlackListEvent>;
interface ExcludeFromFeeEventObject {
    account: string;
}
declare type ExcludeFromFeeEvent = TypedEvent<[
    string
], ExcludeFromFeeEventObject>;
declare type ExcludeFromFeeEventFilter = TypedEventFilter<ExcludeFromFeeEvent>;
interface IncludeInAntiWhaleEventObject {
    account: string;
}
declare type IncludeInAntiWhaleEvent = TypedEvent<[
    string
], IncludeInAntiWhaleEventObject>;
declare type IncludeInAntiWhaleEventFilter = TypedEventFilter<IncludeInAntiWhaleEvent>;
interface IncludeInBlackListEventObject {
    account: string;
}
declare type IncludeInBlackListEvent = TypedEvent<[
    string
], IncludeInBlackListEventObject>;
declare type IncludeInBlackListEventFilter = TypedEventFilter<IncludeInBlackListEvent>;
interface IncludeInFeeEventObject {
    account: string;
}
declare type IncludeInFeeEvent = TypedEvent<[string], IncludeInFeeEventObject>;
declare type IncludeInFeeEventFilter = TypedEventFilter<IncludeInFeeEvent>;
interface OwnershipTransferredEventObject$1 {
    previousOwner: string;
    newOwner: string;
}
declare type OwnershipTransferredEvent$1 = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject$1>;
declare type OwnershipTransferredEventFilter$1 = TypedEventFilter<OwnershipTransferredEvent$1>;
interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
declare type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
declare type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
declare type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
declare type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
declare type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
declare type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
interface SellTaxEventObject {
    amountIn: BigNumber;
    amountOut: BigNumber;
    milkyWayAddress: string;
}
declare type SellTaxEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string
], SellTaxEventObject>;
declare type SellTaxEventFilter = TypedEventFilter<SellTaxEvent>;
interface SetMilkyWayAddressEventObject {
    milkyWayAddress: string;
}
declare type SetMilkyWayAddressEvent = TypedEvent<[
    string
], SetMilkyWayAddressEventObject>;
declare type SetMilkyWayAddressEventFilter = TypedEventFilter<SetMilkyWayAddressEvent>;
interface SetPairAddressEventObject {
    pairAddress: string;
    val: boolean;
}
declare type SetPairAddressEvent = TypedEvent<[
    string,
    boolean
], SetPairAddressEventObject>;
declare type SetPairAddressEventFilter = TypedEventFilter<SetPairAddressEvent>;
interface SetReferralServiceAddressEventObject {
    referralServiceAddress: string;
}
declare type SetReferralServiceAddressEvent = TypedEvent<[
    string
], SetReferralServiceAddressEventObject>;
declare type SetReferralServiceAddressEventFilter = TypedEventFilter<SetReferralServiceAddressEvent>;
interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
interface UpdateMaxTxAmountEventObject {
    newAmount: BigNumber;
}
declare type UpdateMaxTxAmountEvent = TypedEvent<[
    BigNumber
], UpdateMaxTxAmountEventObject>;
declare type UpdateMaxTxAmountEventFilter = TypedEventFilter<UpdateMaxTxAmountEvent>;
interface UpdatePairSwapFeeEventObject {
    fee: BigNumber;
}
declare type UpdatePairSwapFeeEvent = TypedEvent<[
    BigNumber
], UpdatePairSwapFeeEventObject>;
declare type UpdatePairSwapFeeEventFilter = TypedEventFilter<UpdatePairSwapFeeEvent>;
interface UpdateReferrerRewardPercentsEventObject {
    referrerRewardActionBuyPercent: BigNumber;
    referrerRewardActionSellPercent: BigNumber;
    referrerRewardActionTransferPercent: BigNumber;
}
declare type UpdateReferrerRewardPercentsEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], UpdateReferrerRewardPercentsEventObject>;
declare type UpdateReferrerRewardPercentsEventFilter = TypedEventFilter<UpdateReferrerRewardPercentsEvent>;
interface UpdateSellAmountsEventObject {
    newMinAmount: BigNumber;
    maxMinAmount: BigNumber;
}
declare type UpdateSellAmountsEvent = TypedEvent<[
    BigNumber,
    BigNumber
], UpdateSellAmountsEventObject>;
declare type UpdateSellAmountsEventFilter = TypedEventFilter<UpdateSellAmountsEvent>;
interface UpdateTaxBuyFeeEventObject {
    fee: BigNumber;
}
declare type UpdateTaxBuyFeeEvent = TypedEvent<[
    BigNumber
], UpdateTaxBuyFeeEventObject>;
declare type UpdateTaxBuyFeeEventFilter = TypedEventFilter<UpdateTaxBuyFeeEvent>;
interface UpdateTaxSellFeeEventObject {
    fee: BigNumber;
}
declare type UpdateTaxSellFeeEvent = TypedEvent<[
    BigNumber
], UpdateTaxSellFeeEventObject>;
declare type UpdateTaxSellFeeEventFilter = TypedEventFilter<UpdateTaxSellFeeEvent>;
interface UpdateTaxTransferFeeEventObject {
    fee: BigNumber;
}
declare type UpdateTaxTransferFeeEvent = TypedEvent<[
    BigNumber
], UpdateTaxTransferFeeEventObject>;
declare type UpdateTaxTransferFeeEventFilter = TypedEventFilter<UpdateTaxTransferFeeEvent>;
interface SolarToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SolarTokenInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        MINTER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        MIN_TX_AMOUNT_HARD_CAP(overrides?: CallOverrides): Promise<[BigNumber]>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        blackList(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        excludeFromAntiWhale(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        excludeFromBlackListBlackList(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        excludeFromFee(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        includeInAntiWhale(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        includeInBlackList(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        includeInFee(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isExcludedFromAntiWhale(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isExcludedFromFee(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        mainPairAddress(overrides?: CallOverrides): Promise<[string]>;
        maxAmountToSell(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxTxAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        milkyWay(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        milkyWayAddress(overrides?: CallOverrides): Promise<[string]>;
        minAmountToSell(overrides?: CallOverrides): Promise<[BigNumber]>;
        mint(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pairAddresses(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        pairSwapFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        pairedTokenAddress(overrides?: CallOverrides): Promise<[string]>;
        referralActionBuy(overrides?: CallOverrides): Promise<[number]>;
        referralActionSell(overrides?: CallOverrides): Promise<[number]>;
        referralActionTransfer(overrides?: CallOverrides): Promise<[number]>;
        referralServiceAddress(overrides?: CallOverrides): Promise<[string]>;
        referrerRewardActionBuyPercent(overrides?: CallOverrides): Promise<[BigNumber]>;
        referrerRewardActionSellPercent(overrides?: CallOverrides): Promise<[BigNumber]>;
        referrerRewardActionTransferPercent(overrides?: CallOverrides): Promise<[BigNumber]>;
        referrerRewardDivider(overrides?: CallOverrides): Promise<[BigNumber]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAmountToSell(_minAmountToSell: PromiseOrValue<BigNumberish>, _maxAmountToSell: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaxTxAmount(_maxTxAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMilkyWayAddress(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPairAddress(_pairAddress: PromiseOrValue<string>, _val: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPairSwapFee(_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReferralServiceAddress(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReferrerRewardPercents(_referrerRewardActionBuyPercent: PromiseOrValue<BigNumberish>, _referrerRewardActionSellPercent: PromiseOrValue<BigNumberish>, _referrerRewardActionTransferPercent: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTaxBuyFee(_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTaxSellFee(_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTaxTransferFee(_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        taxBuyFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        taxSellFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        taxTransferFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    MINTER_ROLE(overrides?: CallOverrides): Promise<string>;
    MIN_TX_AMOUNT_HARD_CAP(overrides?: CallOverrides): Promise<BigNumber>;
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    blackList(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    excludeFromAntiWhale(_account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    excludeFromBlackListBlackList(account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    excludeFromFee(_account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    includeInAntiWhale(_account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    includeInBlackList(account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    includeInFee(_account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isExcludedFromAntiWhale(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isExcludedFromFee(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    mainPairAddress(overrides?: CallOverrides): Promise<string>;
    maxAmountToSell(overrides?: CallOverrides): Promise<BigNumber>;
    maxTxAmount(overrides?: CallOverrides): Promise<BigNumber>;
    milkyWay(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    milkyWayAddress(overrides?: CallOverrides): Promise<string>;
    minAmountToSell(overrides?: CallOverrides): Promise<BigNumber>;
    mint(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pairAddresses(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    pairSwapFee(overrides?: CallOverrides): Promise<BigNumber>;
    pairedTokenAddress(overrides?: CallOverrides): Promise<string>;
    referralActionBuy(overrides?: CallOverrides): Promise<number>;
    referralActionSell(overrides?: CallOverrides): Promise<number>;
    referralActionTransfer(overrides?: CallOverrides): Promise<number>;
    referralServiceAddress(overrides?: CallOverrides): Promise<string>;
    referrerRewardActionBuyPercent(overrides?: CallOverrides): Promise<BigNumber>;
    referrerRewardActionSellPercent(overrides?: CallOverrides): Promise<BigNumber>;
    referrerRewardActionTransferPercent(overrides?: CallOverrides): Promise<BigNumber>;
    referrerRewardDivider(overrides?: CallOverrides): Promise<BigNumber>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAmountToSell(_minAmountToSell: PromiseOrValue<BigNumberish>, _maxAmountToSell: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaxTxAmount(_maxTxAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMilkyWayAddress(_address: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPairAddress(_pairAddress: PromiseOrValue<string>, _val: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPairSwapFee(_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReferralServiceAddress(_address: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReferrerRewardPercents(_referrerRewardActionBuyPercent: PromiseOrValue<BigNumberish>, _referrerRewardActionSellPercent: PromiseOrValue<BigNumberish>, _referrerRewardActionTransferPercent: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTaxBuyFee(_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTaxSellFee(_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTaxTransferFee(_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    taxBuyFee(overrides?: CallOverrides): Promise<BigNumber>;
    taxSellFee(overrides?: CallOverrides): Promise<BigNumber>;
    taxTransferFee(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        MINTER_ROLE(overrides?: CallOverrides): Promise<string>;
        MIN_TX_AMOUNT_HARD_CAP(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        blackList(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        excludeFromAntiWhale(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        excludeFromBlackListBlackList(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        excludeFromFee(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        includeInAntiWhale(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        includeInBlackList(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        includeInFee(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        isExcludedFromAntiWhale(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isExcludedFromFee(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        mainPairAddress(overrides?: CallOverrides): Promise<string>;
        maxAmountToSell(overrides?: CallOverrides): Promise<BigNumber>;
        maxTxAmount(overrides?: CallOverrides): Promise<BigNumber>;
        milkyWay(overrides?: CallOverrides): Promise<void>;
        milkyWayAddress(overrides?: CallOverrides): Promise<string>;
        minAmountToSell(overrides?: CallOverrides): Promise<BigNumber>;
        mint(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pairAddresses(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        pairSwapFee(overrides?: CallOverrides): Promise<BigNumber>;
        pairedTokenAddress(overrides?: CallOverrides): Promise<string>;
        referralActionBuy(overrides?: CallOverrides): Promise<number>;
        referralActionSell(overrides?: CallOverrides): Promise<number>;
        referralActionTransfer(overrides?: CallOverrides): Promise<number>;
        referralServiceAddress(overrides?: CallOverrides): Promise<string>;
        referrerRewardActionBuyPercent(overrides?: CallOverrides): Promise<BigNumber>;
        referrerRewardActionSellPercent(overrides?: CallOverrides): Promise<BigNumber>;
        referrerRewardActionTransferPercent(overrides?: CallOverrides): Promise<BigNumber>;
        referrerRewardDivider(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setAmountToSell(_minAmountToSell: PromiseOrValue<BigNumberish>, _maxAmountToSell: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMaxTxAmount(_maxTxAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMilkyWayAddress(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setPairAddress(_pairAddress: PromiseOrValue<string>, _val: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setPairSwapFee(_fee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setReferralServiceAddress(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setReferrerRewardPercents(_referrerRewardActionBuyPercent: PromiseOrValue<BigNumberish>, _referrerRewardActionSellPercent: PromiseOrValue<BigNumberish>, _referrerRewardActionTransferPercent: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTaxBuyFee(_fee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTaxSellFee(_fee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTaxTransferFee(_fee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        taxBuyFee(overrides?: CallOverrides): Promise<BigNumber>;
        taxSellFee(overrides?: CallOverrides): Promise<BigNumber>;
        taxTransferFee(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        "ExcludeFromAntiWhale(address)"(account?: null): ExcludeFromAntiWhaleEventFilter;
        ExcludeFromAntiWhale(account?: null): ExcludeFromAntiWhaleEventFilter;
        "ExcludeFromBlackList(address)"(account?: null): ExcludeFromBlackListEventFilter;
        ExcludeFromBlackList(account?: null): ExcludeFromBlackListEventFilter;
        "ExcludeFromFee(address)"(account?: null): ExcludeFromFeeEventFilter;
        ExcludeFromFee(account?: null): ExcludeFromFeeEventFilter;
        "IncludeInAntiWhale(address)"(account?: null): IncludeInAntiWhaleEventFilter;
        IncludeInAntiWhale(account?: null): IncludeInAntiWhaleEventFilter;
        "IncludeInBlackList(address)"(account?: null): IncludeInBlackListEventFilter;
        IncludeInBlackList(account?: null): IncludeInBlackListEventFilter;
        "IncludeInFee(address)"(account?: null): IncludeInFeeEventFilter;
        IncludeInFee(account?: null): IncludeInFeeEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$1;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter$1;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        RoleGranted(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        RoleRevoked(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        "SellTax(uint256,uint256,address)"(amountIn?: null, amountOut?: null, milkyWayAddress?: PromiseOrValue<string> | null): SellTaxEventFilter;
        SellTax(amountIn?: null, amountOut?: null, milkyWayAddress?: PromiseOrValue<string> | null): SellTaxEventFilter;
        "SetMilkyWayAddress(address)"(milkyWayAddress?: null): SetMilkyWayAddressEventFilter;
        SetMilkyWayAddress(milkyWayAddress?: null): SetMilkyWayAddressEventFilter;
        "SetPairAddress(address,bool)"(pairAddress?: null, val?: null): SetPairAddressEventFilter;
        SetPairAddress(pairAddress?: null, val?: null): SetPairAddressEventFilter;
        "SetReferralServiceAddress(address)"(referralServiceAddress?: null): SetReferralServiceAddressEventFilter;
        SetReferralServiceAddress(referralServiceAddress?: null): SetReferralServiceAddressEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        "UpdateMaxTxAmount(uint256)"(newAmount?: null): UpdateMaxTxAmountEventFilter;
        UpdateMaxTxAmount(newAmount?: null): UpdateMaxTxAmountEventFilter;
        "UpdatePairSwapFee(uint256)"(fee?: null): UpdatePairSwapFeeEventFilter;
        UpdatePairSwapFee(fee?: null): UpdatePairSwapFeeEventFilter;
        "UpdateReferrerRewardPercents(uint256,uint256,uint256)"(referrerRewardActionBuyPercent?: null, referrerRewardActionSellPercent?: null, referrerRewardActionTransferPercent?: null): UpdateReferrerRewardPercentsEventFilter;
        UpdateReferrerRewardPercents(referrerRewardActionBuyPercent?: null, referrerRewardActionSellPercent?: null, referrerRewardActionTransferPercent?: null): UpdateReferrerRewardPercentsEventFilter;
        "UpdateSellAmounts(uint256,uint256)"(newMinAmount?: null, maxMinAmount?: null): UpdateSellAmountsEventFilter;
        UpdateSellAmounts(newMinAmount?: null, maxMinAmount?: null): UpdateSellAmountsEventFilter;
        "UpdateTaxBuyFee(uint256)"(fee?: null): UpdateTaxBuyFeeEventFilter;
        UpdateTaxBuyFee(fee?: null): UpdateTaxBuyFeeEventFilter;
        "UpdateTaxSellFee(uint256)"(fee?: null): UpdateTaxSellFeeEventFilter;
        UpdateTaxSellFee(fee?: null): UpdateTaxSellFeeEventFilter;
        "UpdateTaxTransferFee(uint256)"(fee?: null): UpdateTaxTransferFeeEventFilter;
        UpdateTaxTransferFee(fee?: null): UpdateTaxTransferFeeEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MINTER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_TX_AMOUNT_HARD_CAP(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        blackList(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        excludeFromAntiWhale(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        excludeFromBlackListBlackList(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        excludeFromFee(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        includeInAntiWhale(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        includeInBlackList(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        includeInFee(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isExcludedFromAntiWhale(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isExcludedFromFee(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mainPairAddress(overrides?: CallOverrides): Promise<BigNumber>;
        maxAmountToSell(overrides?: CallOverrides): Promise<BigNumber>;
        maxTxAmount(overrides?: CallOverrides): Promise<BigNumber>;
        milkyWay(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        milkyWayAddress(overrides?: CallOverrides): Promise<BigNumber>;
        minAmountToSell(overrides?: CallOverrides): Promise<BigNumber>;
        mint(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pairAddresses(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        pairSwapFee(overrides?: CallOverrides): Promise<BigNumber>;
        pairedTokenAddress(overrides?: CallOverrides): Promise<BigNumber>;
        referralActionBuy(overrides?: CallOverrides): Promise<BigNumber>;
        referralActionSell(overrides?: CallOverrides): Promise<BigNumber>;
        referralActionTransfer(overrides?: CallOverrides): Promise<BigNumber>;
        referralServiceAddress(overrides?: CallOverrides): Promise<BigNumber>;
        referrerRewardActionBuyPercent(overrides?: CallOverrides): Promise<BigNumber>;
        referrerRewardActionSellPercent(overrides?: CallOverrides): Promise<BigNumber>;
        referrerRewardActionTransferPercent(overrides?: CallOverrides): Promise<BigNumber>;
        referrerRewardDivider(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAmountToSell(_minAmountToSell: PromiseOrValue<BigNumberish>, _maxAmountToSell: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaxTxAmount(_maxTxAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMilkyWayAddress(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPairAddress(_pairAddress: PromiseOrValue<string>, _val: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPairSwapFee(_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReferralServiceAddress(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReferrerRewardPercents(_referrerRewardActionBuyPercent: PromiseOrValue<BigNumberish>, _referrerRewardActionSellPercent: PromiseOrValue<BigNumberish>, _referrerRewardActionTransferPercent: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTaxBuyFee(_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTaxSellFee(_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTaxTransferFee(_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        taxBuyFee(overrides?: CallOverrides): Promise<BigNumber>;
        taxSellFee(overrides?: CallOverrides): Promise<BigNumber>;
        taxTransferFee(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MINTER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_TX_AMOUNT_HARD_CAP(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        blackList(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        excludeFromAntiWhale(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        excludeFromBlackListBlackList(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        excludeFromFee(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        includeInAntiWhale(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        includeInBlackList(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        includeInFee(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isExcludedFromAntiWhale(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isExcludedFromFee(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mainPairAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxAmountToSell(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxTxAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        milkyWay(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        milkyWayAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minAmountToSell(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairAddresses(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairSwapFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairedTokenAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referralActionBuy(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referralActionSell(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referralActionTransfer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referralServiceAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referrerRewardActionBuyPercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referrerRewardActionSellPercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referrerRewardActionTransferPercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referrerRewardDivider(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAmountToSell(_minAmountToSell: PromiseOrValue<BigNumberish>, _maxAmountToSell: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaxTxAmount(_maxTxAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMilkyWayAddress(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPairAddress(_pairAddress: PromiseOrValue<string>, _val: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPairSwapFee(_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReferralServiceAddress(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReferrerRewardPercents(_referrerRewardActionBuyPercent: PromiseOrValue<BigNumberish>, _referrerRewardActionSellPercent: PromiseOrValue<BigNumberish>, _referrerRewardActionTransferPercent: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTaxBuyFee(_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTaxSellFee(_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTaxTransferFee(_fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        taxBuyFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        taxSellFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        taxTransferFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

interface StakingServiceInterface extends utils.Interface {
    functions: {
        "earningToken()": FunctionFragment;
        "getApy(uint128,uint128)": FunctionFragment;
        "getReward(address)": FunctionFragment;
        "getStaker(address)": FunctionFragment;
        "getStakerHistory(address,uint16)": FunctionFragment;
        "migrate(uint16,uint128,uint32)": FunctionFragment;
        "owner()": FunctionFragment;
        "paused()": FunctionFragment;
        "referralActionClaim()": FunctionFragment;
        "referralContract()": FunctionFragment;
        "referrerRewardDivider()": FunctionFragment;
        "referrerRewardPercent()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "secPerDay()": FunctionFragment;
        "setReferralContract(address)": FunctionFragment;
        "setReferrerRewardPercent(uint128)": FunctionFragment;
        "slrTokenAddress()": FunctionFragment;
        "stake(uint16,uint128,uint32,address)": FunctionFragment;
        "stakers(address)": FunctionFragment;
        "state(uint16)": FunctionFragment;
        "totalStaked(uint16)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unstake(uint16)": FunctionFragment;
        "unstakeWithFee(uint16)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "earningToken" | "getApy" | "getReward" | "getStaker" | "getStakerHistory" | "migrate" | "owner" | "paused" | "referralActionClaim" | "referralContract" | "referrerRewardDivider" | "referrerRewardPercent" | "renounceOwnership" | "secPerDay" | "setReferralContract" | "setReferrerRewardPercent" | "slrTokenAddress" | "stake" | "stakers" | "state" | "totalStaked" | "transferOwnership" | "unstake" | "unstakeWithFee"): FunctionFragment;
    encodeFunctionData(functionFragment: "earningToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "getApy", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getReward", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getStaker", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getStakerHistory", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "migrate", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "referralActionClaim", values?: undefined): string;
    encodeFunctionData(functionFragment: "referralContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "referrerRewardDivider", values?: undefined): string;
    encodeFunctionData(functionFragment: "referrerRewardPercent", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "secPerDay", values?: undefined): string;
    encodeFunctionData(functionFragment: "setReferralContract", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setReferrerRewardPercent", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "slrTokenAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "stake", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "stakers", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "state", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "totalStaked", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unstake", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "unstakeWithFee", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "earningToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStaker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakerHistory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referralActionClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referralContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referrerRewardDivider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referrerRewardPercent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "secPerDay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReferralContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReferrerRewardPercent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slrTokenAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalStaked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unstakeWithFee", data: BytesLike): Result;
    events: {
        "Migrate(address,uint128,uint128,uint16)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Paused(address)": EventFragment;
        "Staked(address,uint128,uint16)": EventFragment;
        "Unpaused(address)": EventFragment;
        "Unstaked(address,uint128,uint128,uint128)": EventFragment;
        "UpdateReferralContract(address)": EventFragment;
        "UpdateReferrerRewardPercent(uint128)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Migrate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unstaked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateReferralContract"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateReferrerRewardPercent"): EventFragment;
}
interface MigrateEventObject {
    owner: string;
    migratedAmount: BigNumber;
    amount: BigNumber;
    poolId: number;
}
declare type MigrateEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    number
], MigrateEventObject>;
declare type MigrateEventFilter = TypedEventFilter<MigrateEvent>;
interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
interface PausedEventObject {
    account: string;
}
declare type PausedEvent = TypedEvent<[string], PausedEventObject>;
declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
interface StakedEventObject {
    owner: string;
    amount: BigNumber;
    poolId: number;
}
declare type StakedEvent = TypedEvent<[
    string,
    BigNumber,
    number
], StakedEventObject>;
declare type StakedEventFilter = TypedEventFilter<StakedEvent>;
interface UnpausedEventObject {
    account: string;
}
declare type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
interface UnstakedEventObject {
    owner: string;
    amount: BigNumber;
    reward: BigNumber;
    fee: BigNumber;
}
declare type UnstakedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], UnstakedEventObject>;
declare type UnstakedEventFilter = TypedEventFilter<UnstakedEvent>;
interface UpdateReferralContractEventObject {
    referralContract: string;
}
declare type UpdateReferralContractEvent = TypedEvent<[
    string
], UpdateReferralContractEventObject>;
declare type UpdateReferralContractEventFilter = TypedEventFilter<UpdateReferralContractEvent>;
interface UpdateReferrerRewardPercentEventObject {
    percent: BigNumber;
}
declare type UpdateReferrerRewardPercentEvent = TypedEvent<[
    BigNumber
], UpdateReferrerRewardPercentEventObject>;
declare type UpdateReferrerRewardPercentEventFilter = TypedEventFilter<UpdateReferrerRewardPercentEvent>;
interface StakingService extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StakingServiceInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        earningToken(overrides?: CallOverrides): Promise<[string]>;
        getApy(apr: PromiseOrValue<BigNumberish>, times: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getReward(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getStaker(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            number,
            number,
            number,
            BigNumber
        ] & {
            poolId: number;
            amount: BigNumber;
            lock: number;
            startStaking: number;
            timestamp: number;
            reward: BigNumber;
        }>;
        getStakerHistory(_owner: PromiseOrValue<string>, _poolId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber,
            number
        ] & {
            poolId: number;
            amount: BigNumber;
            earned: BigNumber;
            lock: number;
        }>;
        migrate(_poolId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _lock: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        referralActionClaim(overrides?: CallOverrides): Promise<[number]>;
        referralContract(overrides?: CallOverrides): Promise<[string]>;
        referrerRewardDivider(overrides?: CallOverrides): Promise<[BigNumber]>;
        referrerRewardPercent(overrides?: CallOverrides): Promise<[BigNumber]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        secPerDay(overrides?: CallOverrides): Promise<[number]>;
        setReferralContract(_referralContract: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReferrerRewardPercent(_referrerRewardPercent: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        slrTokenAddress(overrides?: CallOverrides): Promise<[string]>;
        stake(_poolId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _lock: PromiseOrValue<BigNumberish>, _referrer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stakers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber,
            number,
            number
        ] & {
            poolId: number;
            initalAmount: BigNumber;
            amount: BigNumber;
            lock: number;
            startStaking: number;
        }>;
        state(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            BigNumber,
            number,
            number,
            BigNumber
        ] & {
            totalStaked: BigNumber;
            id: number;
            apr: BigNumber;
            minLock: number;
            maxLock: number;
            withdrawalFees: BigNumber;
        }>;
        totalStaked(_poolId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            amount: BigNumber;
        }>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unstake(_poolId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unstakeWithFee(_poolId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    earningToken(overrides?: CallOverrides): Promise<string>;
    getApy(apr: PromiseOrValue<BigNumberish>, times: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getReward(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getStaker(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        number,
        BigNumber,
        number,
        number,
        number,
        BigNumber
    ] & {
        poolId: number;
        amount: BigNumber;
        lock: number;
        startStaking: number;
        timestamp: number;
        reward: BigNumber;
    }>;
    getStakerHistory(_owner: PromiseOrValue<string>, _poolId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        number,
        BigNumber,
        BigNumber,
        number
    ] & {
        poolId: number;
        amount: BigNumber;
        earned: BigNumber;
        lock: number;
    }>;
    migrate(_poolId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _lock: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    referralActionClaim(overrides?: CallOverrides): Promise<number>;
    referralContract(overrides?: CallOverrides): Promise<string>;
    referrerRewardDivider(overrides?: CallOverrides): Promise<BigNumber>;
    referrerRewardPercent(overrides?: CallOverrides): Promise<BigNumber>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    secPerDay(overrides?: CallOverrides): Promise<number>;
    setReferralContract(_referralContract: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReferrerRewardPercent(_referrerRewardPercent: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    slrTokenAddress(overrides?: CallOverrides): Promise<string>;
    stake(_poolId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _lock: PromiseOrValue<BigNumberish>, _referrer: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stakers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        number,
        BigNumber,
        BigNumber,
        number,
        number
    ] & {
        poolId: number;
        initalAmount: BigNumber;
        amount: BigNumber;
        lock: number;
        startStaking: number;
    }>;
    state(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        number,
        BigNumber,
        number,
        number,
        BigNumber
    ] & {
        totalStaked: BigNumber;
        id: number;
        apr: BigNumber;
        minLock: number;
        maxLock: number;
        withdrawalFees: BigNumber;
    }>;
    totalStaked(_poolId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unstake(_poolId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unstakeWithFee(_poolId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        earningToken(overrides?: CallOverrides): Promise<string>;
        getApy(apr: PromiseOrValue<BigNumberish>, times: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getReward(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getStaker(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            number,
            number,
            number,
            BigNumber
        ] & {
            poolId: number;
            amount: BigNumber;
            lock: number;
            startStaking: number;
            timestamp: number;
            reward: BigNumber;
        }>;
        getStakerHistory(_owner: PromiseOrValue<string>, _poolId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber,
            number
        ] & {
            poolId: number;
            amount: BigNumber;
            earned: BigNumber;
            lock: number;
        }>;
        migrate(_poolId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _lock: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        referralActionClaim(overrides?: CallOverrides): Promise<number>;
        referralContract(overrides?: CallOverrides): Promise<string>;
        referrerRewardDivider(overrides?: CallOverrides): Promise<BigNumber>;
        referrerRewardPercent(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        secPerDay(overrides?: CallOverrides): Promise<number>;
        setReferralContract(_referralContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setReferrerRewardPercent(_referrerRewardPercent: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        slrTokenAddress(overrides?: CallOverrides): Promise<string>;
        stake(_poolId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _lock: PromiseOrValue<BigNumberish>, _referrer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        stakers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber,
            number,
            number
        ] & {
            poolId: number;
            initalAmount: BigNumber;
            amount: BigNumber;
            lock: number;
            startStaking: number;
        }>;
        state(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            BigNumber,
            number,
            number,
            BigNumber
        ] & {
            totalStaked: BigNumber;
            id: number;
            apr: BigNumber;
            minLock: number;
            maxLock: number;
            withdrawalFees: BigNumber;
        }>;
        totalStaked(_poolId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        unstake(_poolId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        unstakeWithFee(_poolId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Migrate(address,uint128,uint128,uint16)"(owner?: PromiseOrValue<string> | null, migratedAmount?: null, amount?: null, poolId?: null): MigrateEventFilter;
        Migrate(owner?: PromiseOrValue<string> | null, migratedAmount?: null, amount?: null, poolId?: null): MigrateEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Staked(address,uint128,uint16)"(owner?: PromiseOrValue<string> | null, amount?: null, poolId?: null): StakedEventFilter;
        Staked(owner?: PromiseOrValue<string> | null, amount?: null, poolId?: null): StakedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
        "Unstaked(address,uint128,uint128,uint128)"(owner?: PromiseOrValue<string> | null, amount?: null, reward?: null, fee?: null): UnstakedEventFilter;
        Unstaked(owner?: PromiseOrValue<string> | null, amount?: null, reward?: null, fee?: null): UnstakedEventFilter;
        "UpdateReferralContract(address)"(referralContract?: null): UpdateReferralContractEventFilter;
        UpdateReferralContract(referralContract?: null): UpdateReferralContractEventFilter;
        "UpdateReferrerRewardPercent(uint128)"(percent?: null): UpdateReferrerRewardPercentEventFilter;
        UpdateReferrerRewardPercent(percent?: null): UpdateReferrerRewardPercentEventFilter;
    };
    estimateGas: {
        earningToken(overrides?: CallOverrides): Promise<BigNumber>;
        getApy(apr: PromiseOrValue<BigNumberish>, times: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getReward(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getStaker(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getStakerHistory(_owner: PromiseOrValue<string>, _poolId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        migrate(_poolId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _lock: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        referralActionClaim(overrides?: CallOverrides): Promise<BigNumber>;
        referralContract(overrides?: CallOverrides): Promise<BigNumber>;
        referrerRewardDivider(overrides?: CallOverrides): Promise<BigNumber>;
        referrerRewardPercent(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        secPerDay(overrides?: CallOverrides): Promise<BigNumber>;
        setReferralContract(_referralContract: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReferrerRewardPercent(_referrerRewardPercent: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        slrTokenAddress(overrides?: CallOverrides): Promise<BigNumber>;
        stake(_poolId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _lock: PromiseOrValue<BigNumberish>, _referrer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stakers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        state(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        totalStaked(_poolId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unstake(_poolId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unstakeWithFee(_poolId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        earningToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getApy(apr: PromiseOrValue<BigNumberish>, times: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReward(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStaker(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakerHistory(_owner: PromiseOrValue<string>, _poolId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        migrate(_poolId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _lock: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referralActionClaim(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referralContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referrerRewardDivider(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        referrerRewardPercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        secPerDay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setReferralContract(_referralContract: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReferrerRewardPercent(_referrerRewardPercent: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        slrTokenAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stake(_poolId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _lock: PromiseOrValue<BigNumberish>, _referrer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stakers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        state(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalStaked(_poolId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unstake(_poolId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unstakeWithFee(_poolId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

declare class ERC20__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20;
}

declare class IPair__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): IPairInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPair;
}

declare class IRouter02__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IRouter02Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRouter02;
}

declare class MilkyWay__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): MilkyWayInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MilkyWay;
}

declare class Multicall__factory {
    static readonly abi: ({
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): MulticallInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Multicall;
}

declare class PresaleService__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): PresaleServiceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PresaleService;
}

declare class ReferralService__factory {
    static readonly abi: ({
        inputs: any[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ReferralServiceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReferralService;
}

declare class SolarToken__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): SolarTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SolarToken;
}

declare class StakingService__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): StakingServiceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StakingService;
}

type index_ERC20__factory = ERC20__factory;
declare const index_ERC20__factory: typeof ERC20__factory;
type index_IPair__factory = IPair__factory;
declare const index_IPair__factory: typeof IPair__factory;
type index_IRouter02__factory = IRouter02__factory;
declare const index_IRouter02__factory: typeof IRouter02__factory;
type index_MilkyWay__factory = MilkyWay__factory;
declare const index_MilkyWay__factory: typeof MilkyWay__factory;
type index_Multicall__factory = Multicall__factory;
declare const index_Multicall__factory: typeof Multicall__factory;
type index_PresaleService__factory = PresaleService__factory;
declare const index_PresaleService__factory: typeof PresaleService__factory;
type index_ReferralService__factory = ReferralService__factory;
declare const index_ReferralService__factory: typeof ReferralService__factory;
type index_SolarToken__factory = SolarToken__factory;
declare const index_SolarToken__factory: typeof SolarToken__factory;
type index_StakingService__factory = StakingService__factory;
declare const index_StakingService__factory: typeof StakingService__factory;
declare namespace index {
  export {
    index_ERC20__factory as ERC20__factory,
    index_IPair__factory as IPair__factory,
    index_IRouter02__factory as IRouter02__factory,
    index_MilkyWay__factory as MilkyWay__factory,
    index_Multicall__factory as Multicall__factory,
    index_PresaleService__factory as PresaleService__factory,
    index_ReferralService__factory as ReferralService__factory,
    index_SolarToken__factory as SolarToken__factory,
    index_StakingService__factory as StakingService__factory,
  };
}

export { ERC20, ERC20__factory, IPair, IPair__factory, IRouter02, IRouter02__factory, MilkyWay, MilkyWay__factory, Multicall, Multicall__factory, PresaleService, PresaleService__factory, ReferralService, ReferralService__factory, SolarToken, SolarToken__factory, StakingService, StakingService__factory, index as factories };
