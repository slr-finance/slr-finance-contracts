import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface StakingServiceInterface extends utils.Interface {
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
export interface MigrateEventObject {
    owner: string;
    migratedAmount: BigNumber;
    amount: BigNumber;
    poolId: number;
}
export declare type MigrateEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    number
], MigrateEventObject>;
export declare type MigrateEventFilter = TypedEventFilter<MigrateEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PausedEventObject {
    account: string;
}
export declare type PausedEvent = TypedEvent<[string], PausedEventObject>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface StakedEventObject {
    owner: string;
    amount: BigNumber;
    poolId: number;
}
export declare type StakedEvent = TypedEvent<[
    string,
    BigNumber,
    number
], StakedEventObject>;
export declare type StakedEventFilter = TypedEventFilter<StakedEvent>;
export interface UnpausedEventObject {
    account: string;
}
export declare type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface UnstakedEventObject {
    owner: string;
    amount: BigNumber;
    reward: BigNumber;
    fee: BigNumber;
}
export declare type UnstakedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], UnstakedEventObject>;
export declare type UnstakedEventFilter = TypedEventFilter<UnstakedEvent>;
export interface UpdateReferralContractEventObject {
    referralContract: string;
}
export declare type UpdateReferralContractEvent = TypedEvent<[
    string
], UpdateReferralContractEventObject>;
export declare type UpdateReferralContractEventFilter = TypedEventFilter<UpdateReferralContractEvent>;
export interface UpdateReferrerRewardPercentEventObject {
    percent: BigNumber;
}
export declare type UpdateReferrerRewardPercentEvent = TypedEvent<[
    BigNumber
], UpdateReferrerRewardPercentEventObject>;
export declare type UpdateReferrerRewardPercentEventFilter = TypedEventFilter<UpdateReferrerRewardPercentEvent>;
export interface StakingService extends BaseContract {
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
