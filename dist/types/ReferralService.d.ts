import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface ReferralServiceInterface extends utils.Interface {
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
export interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
export declare type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
export declare type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
export declare type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
export declare type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
export declare type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
export declare type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface UnpausedEventObject {
    account: string;
}
export declare type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface ReferralService extends BaseContract {
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
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        RoleGranted(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        RoleRevoked(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
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
