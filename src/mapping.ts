import { BigInt } from "@graphprotocol/graph-ts"
import {
  Oxb,
  Approval,
  ContsMinted,
  ERC20PaymentReleased,
  OwnershipTransferred,
  PayeeAdded,
  PaymentReceived,
  PaymentReleased,
  RewardCashoutAll,
  RewardCashoutOne,
  Transfer
} from "../generated/Oxb/Oxb"
import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.spender = event.params.spender

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract._crm(...)
  // - contract._isBlacklisted(...)
  // - contract.allowance(...)
  // - contract.antiBotEnabled(...)
  // - contract.approve(...)
  // - contract.automatedMarketMakerPairs(...)
  // - contract.balanceOf(...)
  // - contract.cashoutFee(...)
  // - contract.decimals(...)
  // - contract.decreaseAllowance(...)
  // - contract.developmentFee(...)
  // - contract.developmentFundPool(...)
  // - contract.enableAutoSwapDevFund(...)
  // - contract.enableAutoSwapTreasury(...)
  // - contract.enableCashout(...)
  // - contract.enableMintConts(...)
  // - contract.getCashoutTimeout(...)
  // - contract.getContPrice(...)
  // - contract.getContsCreationTime(...)
  // - contract.getContsCurrentAPR(...)
  // - contract.getContsInitialAPR(...)
  // - contract.getContsLastCashoutTime(...)
  // - contract.getContsNames(...)
  // - contract.getContsRewards(...)
  // - contract.getContsTypes(...)
  // - contract.getRewardAPRPerCont(...)
  // - contract.getRewardAmount(...)
  // - contract.getTotalConts(...)
  // - contract.getTotalContsPerContType(...)
  // - contract.increaseAllowance(...)
  // - contract.liquidityPool(...)
  // - contract.liquidityPoolFee(...)
  // - contract.name(...)
  // - contract.ownedContsLimit(...)
  // - contract.owner(...)
  // - contract.payee(...)
  // - contract.pinkAntiBot(...)
  // - contract.released(...)
  // - contract.released(...)
  // - contract.rewardsFee(...)
  // - contract.rewardsPool(...)
  // - contract.shares(...)
  // - contract.symbol(...)
  // - contract.totalFees(...)
  // - contract.totalReleased(...)
  // - contract.totalReleased(...)
  // - contract.totalShares(...)
  // - contract.totalSupply(...)
  // - contract.totalTokensPaidForMinting(...)
  // - contract.transfer(...)
  // - contract.transferFrom(...)
  // - contract.treasuryFee(...)
  // - contract.treasuryPool(...)
  // - contract.uniswapV2Pair(...)
  // - contract.uniswapV2Router(...)
  // - contract.usdcToken(...)
}

export function handleContsMinted(event: ContsMinted): void {}

export function handleERC20PaymentReleased(event: ERC20PaymentReleased): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePayeeAdded(event: PayeeAdded): void {}

export function handlePaymentReceived(event: PaymentReceived): void {}

export function handlePaymentReleased(event: PaymentReleased): void {}

export function handleRewardCashoutAll(event: RewardCashoutAll): void {}

export function handleRewardCashoutOne(event: RewardCashoutOne): void {}

export function handleTransfer(event: Transfer): void {}
