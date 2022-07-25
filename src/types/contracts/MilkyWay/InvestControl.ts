/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface InvestControlInterface extends utils.Interface {
  functions: {
    "bnb()": FunctionFragment;
    "changeInvestPoolShare(address,int128)": FunctionFragment;
    "invest(address)": FunctionFragment;
    "investAll()": FunctionFragment;
    "investPoolLastIndex()": FunctionFragment;
    "investPoolShare(uint256)": FunctionFragment;
    "setInvestController(address,bool)": FunctionFragment;
    "totalInvested()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bnb"
      | "changeInvestPoolShare"
      | "invest"
      | "investAll"
      | "investPoolLastIndex"
      | "investPoolShare"
      | "setInvestController"
      | "totalInvested"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "bnb", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "changeInvestPoolShare",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "invest",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "investAll", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "investPoolLastIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "investPoolShare",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setInvestController",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalInvested",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "bnb", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeInvestPoolShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "invest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "investAll", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "investPoolLastIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "investPoolShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInvestController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalInvested",
    data: BytesLike
  ): Result;

  events: {};
}

export interface InvestControl extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: InvestControlInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bnb(overrides?: CallOverrides): Promise<[string]>;

    changeInvestPoolShare(
      _controller: PromiseOrValue<string>,
      _share: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    invest(
      _controller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    investAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    investPoolLastIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    investPoolShare(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { controller: string; share: BigNumber }>;

    setInvestController(
      _address: PromiseOrValue<string>,
      _active: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalInvested(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  bnb(overrides?: CallOverrides): Promise<string>;

  changeInvestPoolShare(
    _controller: PromiseOrValue<string>,
    _share: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  invest(
    _controller: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  investAll(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  investPoolLastIndex(overrides?: CallOverrides): Promise<BigNumber>;

  investPoolShare(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { controller: string; share: BigNumber }>;

  setInvestController(
    _address: PromiseOrValue<string>,
    _active: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalInvested(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    bnb(overrides?: CallOverrides): Promise<string>;

    changeInvestPoolShare(
      _controller: PromiseOrValue<string>,
      _share: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    invest(
      _controller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    investAll(overrides?: CallOverrides): Promise<void>;

    investPoolLastIndex(overrides?: CallOverrides): Promise<BigNumber>;

    investPoolShare(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { controller: string; share: BigNumber }>;

    setInvestController(
      _address: PromiseOrValue<string>,
      _active: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    totalInvested(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    bnb(overrides?: CallOverrides): Promise<BigNumber>;

    changeInvestPoolShare(
      _controller: PromiseOrValue<string>,
      _share: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    invest(
      _controller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    investAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    investPoolLastIndex(overrides?: CallOverrides): Promise<BigNumber>;

    investPoolShare(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setInvestController(
      _address: PromiseOrValue<string>,
      _active: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalInvested(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    bnb(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeInvestPoolShare(
      _controller: PromiseOrValue<string>,
      _share: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    invest(
      _controller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    investAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    investPoolLastIndex(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    investPoolShare(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setInvestController(
      _address: PromiseOrValue<string>,
      _active: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalInvested(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}