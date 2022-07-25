import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface MilkyWayInterface extends utils.Interface {
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
export interface BaybackEventObject {
    bnbAmount: BigNumber;
    slrAmount: BigNumber;
}
export declare type BaybackEvent = TypedEvent<[
    BigNumber,
    BigNumber
], BaybackEventObject>;
export declare type BaybackEventFilter = TypedEventFilter<BaybackEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface MilkyWay extends BaseContract {
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
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
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
