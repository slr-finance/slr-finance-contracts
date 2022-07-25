import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface PresaleServiceInterface extends utils.Interface {
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
export interface AddLiquidityEventObject {
    tokenAmount: BigNumber;
    ethAmount: BigNumber;
}
export declare type AddLiquidityEvent = TypedEvent<[
    BigNumber,
    BigNumber
], AddLiquidityEventObject>;
export declare type AddLiquidityEventFilter = TypedEventFilter<AddLiquidityEvent>;
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface BurnEventObject {
    amount: BigNumber;
    owner: string;
}
export declare type BurnEvent = TypedEvent<[BigNumber, string], BurnEventObject>;
export declare type BurnEventFilter = TypedEventFilter<BurnEvent>;
export interface BuyEventObject {
    amountIn: BigNumber;
    amountOut: BigNumber;
    phase: number;
    owner: string;
}
export declare type BuyEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    number,
    string
], BuyEventObject>;
export declare type BuyEventFilter = TypedEventFilter<BuyEvent>;
export interface JoinEventObject {
    owner: string;
}
export declare type JoinEvent = TypedEvent<[string], JoinEventObject>;
export declare type JoinEventFilter = TypedEventFilter<JoinEvent>;
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
export interface SetDiscountEventObject {
    owner: string;
    discount: BigNumber;
}
export declare type SetDiscountEvent = TypedEvent<[
    string,
    BigNumber
], SetDiscountEventObject>;
export declare type SetDiscountEventFilter = TypedEventFilter<SetDiscountEvent>;
export interface SetPhasesEventObject {
    phasesTime: [BigNumber, BigNumber, BigNumber, BigNumber];
    phasesPrices: [BigNumber, BigNumber, BigNumber];
    phasesMaxAmount: [BigNumber, BigNumber];
    launchingPrice: BigNumber;
}
export declare type SetPhasesEvent = TypedEvent<[
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
export declare type SetPhasesEventFilter = TypedEventFilter<SetPhasesEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface TryTransferEventObject {
    from: string;
    to: string;
    amount: BigNumber;
}
export declare type TryTransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TryTransferEventObject>;
export declare type TryTransferEventFilter = TypedEventFilter<TryTransferEvent>;
export interface UnpausedEventObject {
    account: string;
}
export declare type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface UpdateRouterAddressEventObject {
    tokenAddress: string;
}
export declare type UpdateRouterAddressEvent = TypedEvent<[
    string
], UpdateRouterAddressEventObject>;
export declare type UpdateRouterAddressEventFilter = TypedEventFilter<UpdateRouterAddressEvent>;
export interface UpdateTokenAddressEventObject {
    tokenAddress: string;
}
export declare type UpdateTokenAddressEvent = TypedEvent<[
    string
], UpdateTokenAddressEventObject>;
export declare type UpdateTokenAddressEventFilter = TypedEventFilter<UpdateTokenAddressEvent>;
export interface PresaleService extends BaseContract {
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
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        "Burn(uint256,address)"(amount?: null, owner?: PromiseOrValue<string> | null): BurnEventFilter;
        Burn(amount?: null, owner?: PromiseOrValue<string> | null): BurnEventFilter;
        "Buy(uint256,uint256,uint8,address)"(amountIn?: null, amountOut?: null, phase?: null, owner?: PromiseOrValue<string> | null): BuyEventFilter;
        Buy(amountIn?: null, amountOut?: null, phase?: null, owner?: PromiseOrValue<string> | null): BuyEventFilter;
        "Join(address)"(owner?: null): JoinEventFilter;
        Join(owner?: null): JoinEventFilter;
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
        "SetDiscount(address,uint256)"(owner?: PromiseOrValue<string> | null, discount?: null): SetDiscountEventFilter;
        SetDiscount(owner?: PromiseOrValue<string> | null, discount?: null): SetDiscountEventFilter;
        "SetPhases(uint256[4],uint256[3],uint256[2],uint256)"(phasesTime?: null, phasesPrices?: null, phasesMaxAmount?: null, launchingPrice?: null): SetPhasesEventFilter;
        SetPhases(phasesTime?: null, phasesPrices?: null, phasesMaxAmount?: null, launchingPrice?: null): SetPhasesEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        "TryTransfer(address,address,uint256)"(from?: null, to?: null, amount?: null): TryTransferEventFilter;
        TryTransfer(from?: null, to?: null, amount?: null): TryTransferEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
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
