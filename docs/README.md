## Axioms and Primitives for financial instruments 

> Design Principles

## Primitives

Defined ordered list 

`PrimitiveEvent`
`ExercisePrimitive`
`AllocationPrimitive`
`ContractFormationPrimitive`
`ExecutionPrimitive`
`InceptionPrimitive`
`ObservationPrimitive`
`QuantityChangePrimitive`
`ResetPrimitive`
`TermsChangePrimitive`
`TransferPrimitive`


### ExecutionPrimitive

Specification of the primitive event for an execution, with 'after' state being an ExecutionState and the 'before' state being Null.

The 'before' ExecutionState (0..0) The 0 cardinality reflects the fact that there is no execution in the before state of an execution primitive. Think of this as the "genesis" point.

after `ExecutionState`

The after state corresponds to the execution between the parties. In the case of an execution on a contractual product, some additional characteristics may need to be specified to get a fully-formed contract, for instance when the executing party acts as an agent, as is the case in an allocation scenario. This is the purpose of the `ContractFormation` primitive event.


### ContractFormationPrimitive

> **@dev** this design pattern is differnet in that it does not bundle together execution of the contract and formation of the contract, similar to the way a `proxy` contract works. The design pattern for this is to better provide for atomic primitites. Our pruposes do not need such atomiticy, as they are contractual products.


`ExecutionPrimitive` + `ContractFormationPrimitive` = atomic financial primitive

`InceptionPrimitive` = contractual product primitive


Specification of the primitive event for the formation of a contract, with 'before' state being an 'ExecutionState' and 'after' state being a 'PostInceptionState'.


### AllocationPrimitive
The primitive event to represent a split/allocation of a trade. As part of this primitive event the type of trade, either an execution or a contract, does not get altered. In the case of an execution, the further transformation of each split execution into a contract will be the purpose of the ContractFormation primitive.

### Primitive Example

```markdown
if AllocationPrimitive exists and before -> execution exists
	then after -> originalTrade -> execution exists
	and after -> allocatedTrade -> execution exists
	and after -> allocatedTrade -> contract is absent
	
condition ContractType: 
if AllocationPrimitive exists and before -> contract exists
	then after -> originalTrade -> contract exists
	and after -> allocatedTrade -> contract exists
	and after -> allocatedTrade -> execution is absent
```

### ExercisePrimitive

`exerciseTiming` which is deemed as associated to a request for exercise that is meant to take place, as opposed to the actual exercise event. Similar to how in FpML an OptionExercise is constructed. [FpML 5.5](https://www.fpml.org/spec/fpml-5-6-5-rec-1/html/confirmation/fpml-5-6-intro-8.html)

### Inception Primitive
The primitive event for the inception of a new contract between parties. 

### Obervation Primitive 
A class to specify the primitive object to specify market observation events, which is applicable across all asset classes.

### Quantity Change Primitive 
The primitive event to represent a change in quantity or notional.

### Reset  Primitive
The primitive event to represent a reset.

### Terms Change Primitive
The primitive event to represent change(s) to the contractual terms and the clearing submission and acceptance process.

### Transfer Primitive 
A class to specify the transfer of assets between parties, those assets being either cash, securities or physical assets (such as freight or an asset held by a bailee relationship such as warehouse receipts). This class combines components that are cross-assets (settlement date, settlement type, status, ...) and some other which are specialized by asset class (e.g. the payer/receiver amount and cashflow type for a cash transfer, the transferor/transferee, security indication, quantity, and asset transfer type qualification for the case of a security).


## Workflow for Contractual Product (e.g. Forward Contracts)

```javascript
if WorkflowStep -> businessEvent -> primitives -> inception -> after -> contract only exists
	then WorkflowStep -> businessEvent -> primitives -> inception -> after -> contract

else if WorkflowStep -> businessEvent -> primitives -> quantityChange -> after -> contract  exists
		
	then WorkflowStep -> businessEvent -> primitives -> quantityChange -> after -> contract
	else WorkflowStep -> businessEvent -> primitives -> inception -> after -> contract
 	as "Contract"
```

