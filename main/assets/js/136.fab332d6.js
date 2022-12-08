(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{744:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-71-proposer-based-timestamps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-71-proposer-based-timestamps"}},[e._v("#")]),e._v(" ADR 71: Proposer-Based Timestamps")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("July 15 2021: Created by @williambanfield")]),e._v(" "),a("li",[e._v("Aug 4 2021: Draft completed by @williambanfield")]),e._v(" "),a("li",[e._v("Aug 5 2021: Draft updated to include data structure changes by @williambanfield")]),e._v(" "),a("li",[e._v("Aug 20 2021: Language edits completed by @williambanfield")]),e._v(" "),a("li",[e._v("Oct 25 2021: Update the ADR to match updated spec from @cason by @williambanfield")]),e._v(" "),a("li",[e._v("Nov 10 2021: Additional language updates by @williambanfield per feedback from @cason")]),e._v(" "),a("li",[e._v("Feb 2 2022: Synchronize logic for timely with latest version of the spec by @williambanfield")])]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[a("strong",[e._v("Accepted")])]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("Tendermint currently provides a monotonically increasing source of time known as "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/main/spec/consensus/bft-time.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("BFTTime"),a("OutboundLink")],1),e._v(".\nThis mechanism for producing a source of time is reasonably simple.\nEach correct validator adds a timestamp to each "),a("code",[e._v("Precommit")]),e._v(" message it sends.\nThe timestamp it sends is either the validator's current known Unix time or one millisecond greater than the previous block time, depending on which value is greater.\nWhen a block is produced, the proposer chooses the block timestamp as the weighted median of the times in all of the "),a("code",[e._v("Precommit")]),e._v(" messages the proposer received.\nThe weighting is proportional to the amount of voting power, or stake, a validator has on the network.\nThis mechanism for producing timestamps is both deterministic and byzantine fault tolerant.")]),e._v(" "),a("p",[e._v("This current mechanism for producing timestamps has a few drawbacks.\nValidators do not have to agree at all on how close the selected block timestamp is to their own currently known Unix time.\nAdditionally, any amount of voting power "),a("code",[e._v(">1/3")]),e._v(" may directly control the block timestamp.\nAs a result, it is quite possible that the timestamp is not particularly meaningful.")]),e._v(" "),a("p",[e._v("These drawbacks present issues in the Tendermint protocol.\nTimestamps are used by light clients to verify blocks.\nLight clients rely on correspondence between their own currently known Unix time and the block timestamp to verify blocks they see;\nHowever, their currently known Unix time may be greatly divergent from the block timestamp as a result of the limitations of "),a("code",[e._v("BFTTime")]),e._v(".")]),e._v(" "),a("p",[e._v("The proposer-based timestamps specification suggests an alternative approach for producing block timestamps that remedies these issues.\nProposer-based timestamps alter the current mechanism for producing block timestamps in two main ways:")]),e._v(" "),a("ol",[a("li",[e._v("The block proposer is amended to offer up its currently known Unix time as the timestamp for the next block instead of the "),a("code",[e._v("BFTTime")]),e._v(".")]),e._v(" "),a("li",[e._v("Correct validators only approve the proposed block timestamp if it is close enough to their own currently known Unix time.")])]),e._v(" "),a("p",[e._v("The result of these changes is a more meaningful timestamp that cannot be controlled by "),a("code",[e._v("<= 2/3")]),e._v(" of the validator voting power.\nThis document outlines the necessary code changes in Tendermint to implement the corresponding "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/main/spec/consensus/proposer-based-timestamp",target:"_blank",rel:"noopener noreferrer"}},[e._v("proposer-based timestamps specification"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"alternative-approaches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternative-approaches"}},[e._v("#")]),e._v(" Alternative Approaches")]),e._v(" "),a("h3",{attrs:{id:"remove-timestamps-altogether"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove-timestamps-altogether"}},[e._v("#")]),e._v(" Remove timestamps altogether")]),e._v(" "),a("p",[e._v("Computer clocks are bound to skew for a variety of reasons.\nUsing timestamps in our protocol means either accepting the timestamps as not reliable or impacting the protocol’s liveness guarantees.\nThis design requires impacting the protocol’s liveness in order to make the timestamps more reliable.\nAn alternate approach is to remove timestamps altogether from the block protocol.\n"),a("code",[e._v("BFTTime")]),e._v(" is deterministic but may be arbitrarily inaccurate.\nHowever, having a reliable source of time is quite useful for applications and protocols built on top of a blockchain.")]),e._v(" "),a("p",[e._v("We therefore decided not to remove the timestamp.\nApplications often wish for some transactions to occur on a certain day, on a regular period, or after some time following a different event.\nAll of these require some meaningful representation of agreed upon time.\nThe following protocols and application features require a reliable source of time:")]),e._v(" "),a("ul",[a("li",[e._v("Tendermint Light Clients "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/main/spec/light-client/verification/README.md#definitions-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("rely on correspondence between their known time"),a("OutboundLink")],1),e._v(" and the block time for block verification.")]),e._v(" "),a("li",[e._v("Tendermint Evidence validity is determined "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/8029cf7a0fcc89a5004e173ec065aa48ad5ba3c8/spec/consensus/evidence.md#verification",target:"_blank",rel:"noopener noreferrer"}},[e._v("either in terms of heights or in terms of time"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Unbonding of staked assets in the Cosmos Hub "),a("a",{attrs:{href:"https://github.com/cosmos/governance/blob/ce75de4019b0129f6efcbb0e752cd2cc9e6136d3/params-change/Staking.md#unbondingtime",target:"_blank",rel:"noopener noreferrer"}},[e._v("occurs after a period of 21 days"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("IBC packets can use either a "),a("a",{attrs:{href:"https://docs.cosmos.network/v0.45/ibc/overview.html#acknowledgements",target:"_blank",rel:"noopener noreferrer"}},[e._v("timestamp or a height to timeout packet delivery"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Finally, inflation distribution in the Cosmos Hub uses an approximation of time to calculate an annual percentage rate.\nThis approximation of time is calculated using "),a("a",{attrs:{href:"https://github.com/cosmos/governance/blob/master/params-change/Mint.md#blocksperyear",target:"_blank",rel:"noopener noreferrer"}},[e._v("block heights with an estimated number of blocks produced in a year"),a("OutboundLink")],1),e._v(".\nProposer-based timestamps will allow this inflation calculation to use a more meaningful and accurate source of time.")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("Implement proposer-based timestamps and remove "),a("code",[e._v("BFTTime")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"detailed-design"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#detailed-design"}},[e._v("#")]),e._v(" Detailed Design")]),e._v(" "),a("h3",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Implementing proposer-based timestamps will require a few changes to Tendermint’s code.\nThese changes will be to the following components:")]),e._v(" "),a("ul",[a("li",[e._v("The "),a("code",[e._v("internal/consensus/")]),e._v(" package.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("state/")]),e._v(" package.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("Vote")]),e._v(", "),a("code",[e._v("CommitSig")]),e._v(" and "),a("code",[e._v("Header")]),e._v(" types.")]),e._v(" "),a("li",[e._v("The consensus parameters.")])]),e._v(" "),a("h3",{attrs:{id:"changes-to-commitsig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changes-to-commitsig"}},[e._v("#")]),e._v(" Changes to "),a("code",[e._v("CommitSig")])]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/a419f4df76fe4aed668a6c74696deabb9fe73211/types/block.go#L604",target:"_blank",rel:"noopener noreferrer"}},[e._v("CommitSig"),a("OutboundLink")],1),e._v(" struct currently contains a timestamp.\nThis timestamp is the current Unix time known to the validator when it issued a "),a("code",[e._v("Precommit")]),e._v(" for the block.\nThis timestamp is no longer used and will be removed in this change.")]),e._v(" "),a("p",[a("code",[e._v("CommitSig")]),e._v(" will be updated as follows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"dHlwZSBDb21taXRTaWcgc3RydWN0IHsKCUJsb2NrSURGbGFnICAgICAgQmxvY2tJREZsYWcgYGpzb246JnF1b3Q7YmxvY2tfaWRfZmxhZyZxdW90O2AKCVZhbGlkYXRvckFkZHJlc3MgQWRkcmVzcyAgICAgYGpzb246JnF1b3Q7dmFsaWRhdG9yX2FkZHJlc3MmcXVvdDtgCi0tCVRpbWVzdGFtcCAgICAgICAgdGltZS5UaW1lICAgYGpzb246JnF1b3Q7dGltZXN0YW1wJnF1b3Q7YAoJU2lnbmF0dXJlICAgICAgICBbXWJ5dGUgICAgICBganNvbjomcXVvdDtzaWduYXR1cmUmcXVvdDtgCn0K"}}),e._v(" "),a("h3",{attrs:{id:"changes-to-vote-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changes-to-vote-messages"}},[e._v("#")]),e._v(" Changes to "),a("code",[e._v("Vote")]),e._v(" messages")]),e._v(" "),a("p",[a("code",[e._v("Precommit")]),e._v(" and "),a("code",[e._v("Prevote")]),e._v(" messages use a common "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/a419f4df76fe4aed668a6c74696deabb9fe73211/types/vote.go#L50",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vote struct"),a("OutboundLink")],1),e._v(".\nThis struct currently contains a timestamp.\nThis timestamp is set using the "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/e8013281281985e3ada7819f42502b09623d24a0/internal/consensus/state.go#L2241",target:"_blank",rel:"noopener noreferrer"}},[e._v("voteTime"),a("OutboundLink")],1),e._v(" function and therefore vote times correspond to the current Unix time known to the validator, provided this time is greater than the timestamp of the previous block.\nFor precommits, this timestamp is used to construct the "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/e8013281281985e3ada7819f42502b09623d24a0/types/block.go#L754",target:"_blank",rel:"noopener noreferrer"}},[e._v("CommitSig that is included in the block in the LastCommit"),a("OutboundLink")],1),e._v(" field.\nFor prevotes, this field is currently unused.\nProposer-based timestamps will use the timestamp that the proposer sets into the block and will therefore no longer require that a timestamp be included in the vote messages.\nThis timestamp is therefore no longer useful as part of consensus and may optionally be dropped from the message.")]),e._v(" "),a("p",[a("code",[e._v("Vote")]),e._v(" will be updated as follows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"dHlwZSBWb3RlIHN0cnVjdCB7CglUeXBlICAgICAgICAgICAgIHRtcHJvdG8uU2lnbmVkTXNnVHlwZSBganNvbjomcXVvdDt0eXBlJnF1b3Q7YAoJSGVpZ2h0ICAgICAgICAgICBpbnQ2NCAgICAgICAgICAgICAgICAgYGpzb246JnF1b3Q7aGVpZ2h0JnF1b3Q7YAoJUm91bmQgICAgICAgICAgICBpbnQzMiAgICAgICAgICAgICAgICAgYGpzb246JnF1b3Q7cm91bmQmcXVvdDtgCglCbG9ja0lEICAgICAgICAgIEJsb2NrSUQgICAgICAgICAgICAgICBganNvbjomcXVvdDtibG9ja19pZCZxdW90O2AgLy8gemVybyBpZiB2b3RlIGlzIG5pbC4KLS0JVGltZXN0YW1wICAgICAgICB0aW1lLlRpbWUgICAgICAgICAgICAgYGpzb246JnF1b3Q7dGltZXN0YW1wJnF1b3Q7YAoJVmFsaWRhdG9yQWRkcmVzcyBBZGRyZXNzICAgICAgICAgICAgICAgYGpzb246JnF1b3Q7dmFsaWRhdG9yX2FkZHJlc3MmcXVvdDtgCglWYWxpZGF0b3JJbmRleCAgIGludDMyICAgICAgICAgICAgICAgICBganNvbjomcXVvdDt2YWxpZGF0b3JfaW5kZXgmcXVvdDtgCglTaWduYXR1cmUgICAgICAgIFtdYnl0ZSAgICAgICAgICAgICAgICBganNvbjomcXVvdDtzaWduYXR1cmUmcXVvdDtgCn0K"}}),e._v(" "),a("h3",{attrs:{id:"new-consensus-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-consensus-parameters"}},[e._v("#")]),e._v(" New consensus parameters")]),e._v(" "),a("p",[e._v("The proposer-based timestamp specification includes a pair of new parameters that must be the same among all validators.\nThese parameters are "),a("code",[e._v("PRECISION")]),e._v(", and "),a("code",[e._v("MSGDELAY")]),e._v(".")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("PRECISION")]),e._v(" and "),a("code",[e._v("MSGDELAY")]),e._v(" parameters are used to determine if the proposed timestamp is acceptable.\nA validator will only Prevote a proposal if the proposal timestamp is considered "),a("code",[e._v("timely")]),e._v(".\nA proposal timestamp is considered "),a("code",[e._v("timely")]),e._v(" if it is within "),a("code",[e._v("PRECISION")]),e._v(" and "),a("code",[e._v("MSGDELAY")]),e._v(" of the Unix time known to the validator.\nMore specifically, a proposal timestamp is "),a("code",[e._v("timely")]),e._v(" if "),a("code",[e._v("proposalTimestamp - PRECISION ≤ validatorLocalTime ≤ proposalTimestamp + PRECISION + MSGDELAY")]),e._v(".")]),e._v(" "),a("p",[e._v("Because the "),a("code",[e._v("PRECISION")]),e._v(" and "),a("code",[e._v("MSGDELAY")]),e._v(" parameters must be the same across all validators, they will be added to the "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/main/proto/tendermint/types/params.proto#L11",target:"_blank",rel:"noopener noreferrer"}},[e._v("consensus parameters"),a("OutboundLink")],1),e._v(" as "),a("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration",target:"_blank",rel:"noopener noreferrer"}},[e._v("durations"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("The consensus parameters will be updated to include this "),a("code",[e._v("Synchrony")]),e._v(" field as follows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"dHlwZSBDb25zZW5zdXNQYXJhbXMgc3RydWN0IHsKCUJsb2NrICAgICBCbG9ja1BhcmFtcyAgICAgYGpzb246JnF1b3Q7YmxvY2smcXVvdDtgCglFdmlkZW5jZSAgRXZpZGVuY2VQYXJhbXMgIGBqc29uOiZxdW90O2V2aWRlbmNlJnF1b3Q7YAoJVmFsaWRhdG9yIFZhbGlkYXRvclBhcmFtcyBganNvbjomcXVvdDt2YWxpZGF0b3ImcXVvdDtgCglWZXJzaW9uICAgVmVyc2lvblBhcmFtcyAgIGBqc29uOiZxdW90O3ZlcnNpb24mcXVvdDtgCisrCVN5bmNocm9ueSBTeW5jaHJvbnlQYXJhbXMgYGpzb246JnF1b3Q7c3luY2hyb255JnF1b3Q7YAp9Cg=="}}),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBTeW5jaHJvbnlQYXJhbXMgc3RydWN0IHsKCU1lc3NhZ2VEZWxheSB0aW1lLkR1cmF0aW9uIGBqc29uOiZxdW90O21lc3NhZ2VfZGVsYXkmcXVvdDtgCglQcmVjaXNpb24gICAgdGltZS5EdXJhdGlvbiBganNvbjomcXVvdDtwcmVjaXNpb24mcXVvdDtgCn0K"}}),e._v(" "),a("h3",{attrs:{id:"changes-to-the-block-proposal-step"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changes-to-the-block-proposal-step"}},[e._v("#")]),e._v(" Changes to the block proposal step")]),e._v(" "),a("h4",{attrs:{id:"proposer-selects-block-timestamp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proposer-selects-block-timestamp"}},[e._v("#")]),e._v(" Proposer selects block timestamp")]),e._v(" "),a("p",[e._v("Tendermint currently uses the "),a("code",[e._v("BFTTime")]),e._v(" algorithm to produce the block's "),a("code",[e._v("Header.Timestamp")]),e._v(".\nThe "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/68ca65f5d79905abd55ea999536b1a3685f9f19d/internal/state/state.go#L269",target:"_blank",rel:"noopener noreferrer"}},[e._v("proposal logic"),a("OutboundLink")],1),e._v(" sets the weighted median of the times in the "),a("code",[e._v("LastCommit.CommitSigs")]),e._v(" as the proposed block's "),a("code",[e._v("Header.Timestamp")]),e._v(".")]),e._v(" "),a("p",[e._v("In proposer-based timestamps, the proposer will still set a timestamp into the "),a("code",[e._v("Header.Timestamp")]),e._v(".\nThe timestamp the proposer sets into the "),a("code",[e._v("Header")]),e._v(" will change depending on if the block has previously received a "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/053651160f496bb44b107a434e3e6482530bb287/docs/introduction/what-is-tendermint.md#consensus-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("polka"),a("OutboundLink")],1),e._v(" or not.")]),e._v(" "),a("h4",{attrs:{id:"proposal-of-a-block-that-has-not-previously-received-a-polka"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proposal-of-a-block-that-has-not-previously-received-a-polka"}},[e._v("#")]),e._v(" Proposal of a block that has not previously received a polka")]),e._v(" "),a("p",[e._v("If a proposer is proposing a new block then it will set the Unix time currently known to the proposer into the "),a("code",[e._v("Header.Timestamp")]),e._v(" field.\nThe proposer will also set this same timestamp into the "),a("code",[e._v("Timestamp")]),e._v(" field of the "),a("code",[e._v("Proposal")]),e._v(" message that it issues.")]),e._v(" "),a("h4",{attrs:{id:"re-proposal-of-a-block-that-has-previously-received-a-polka"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#re-proposal-of-a-block-that-has-previously-received-a-polka"}},[e._v("#")]),e._v(" Re-proposal of a block that has previously received a polka")]),e._v(" "),a("p",[e._v("If a proposer is re-proposing a block that has previously received a polka on the network, then the proposer does not update the "),a("code",[e._v("Header.Timestamp")]),e._v(" of that block.\nInstead, the proposer simply re-proposes the exact same block.\nThis way, the proposed block has the exact same block ID as the previously proposed block and the validators that have already received that block do not need to attempt to receive it again.")]),e._v(" "),a("p",[e._v("The proposer will set the re-proposed block's "),a("code",[e._v("Header.Timestamp")]),e._v(" as the "),a("code",[e._v("Proposal")]),e._v(" message's "),a("code",[e._v("Timestamp")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"proposer-waits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proposer-waits"}},[e._v("#")]),e._v(" Proposer waits")]),e._v(" "),a("p",[e._v("Block timestamps must be monotonically increasing.\nIn "),a("code",[e._v("BFTTime")]),e._v(", if a validator’s clock was behind, the "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/e8013281281985e3ada7819f42502b09623d24a0/internal/consensus/state.go#L2246",target:"_blank",rel:"noopener noreferrer"}},[e._v("validator added 1 millisecond to the previous block’s time and used that in its vote messages"),a("OutboundLink")],1),e._v(".\nA goal of adding proposer-based timestamps is to enforce some degree of clock synchronization, so having a mechanism that completely ignores the Unix time of the validator time no longer works.\nValidator clocks will not be perfectly in sync.\nTherefore, the proposer’s current known Unix time may be less than the previous block's "),a("code",[e._v("Header.Time")]),e._v(".\nIf the proposer’s current known Unix time is less than the previous block's "),a("code",[e._v("Header.Time")]),e._v(", the proposer will sleep until its known Unix time exceeds it.")]),e._v(" "),a("p",[e._v("This change will require amending the "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/822893615564cb20b002dd5cf3b42b8d364cb7d9/internal/consensus/state.go#L1180",target:"_blank",rel:"noopener noreferrer"}},[e._v("defaultDecideProposal"),a("OutboundLink")],1),e._v(" method.\nThis method should now schedule a timeout that fires when the proposer’s time is greater than the previous block's "),a("code",[e._v("Header.Time")]),e._v(".\nWhen the timeout fires, the proposer will finally issue the "),a("code",[e._v("Proposal")]),e._v(" message.")]),e._v(" "),a("h3",{attrs:{id:"changes-to-proposal-validation-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changes-to-proposal-validation-rules"}},[e._v("#")]),e._v(" Changes to proposal validation rules")]),e._v(" "),a("p",[e._v("The rules for validating a proposed block will be modified to implement proposer-based timestamps.\nWe will change the validation logic to ensure that a proposal is "),a("code",[e._v("timely")]),e._v(".")]),e._v(" "),a("p",[e._v("Per the proposer-based timestamps spec, "),a("code",[e._v("timely")]),e._v(" only needs to be checked if a block has not received a +2/3 majority of "),a("code",[e._v("Prevotes")]),e._v(" in a round.\nIf a block previously received a +2/3 majority of prevotes in a previous round, then +2/3 of the voting power considered the block's timestamp near enough to their own currently known Unix time in that round.")]),e._v(" "),a("p",[e._v("The validation logic will be updated to check "),a("code",[e._v("timely")]),e._v(" for blocks that did not previously receive +2/3 prevotes in a round.\nReceiving +2/3 prevotes in a round is frequently referred to as a 'polka' and we will use this term for simplicity.")]),e._v(" "),a("h4",{attrs:{id:"current-timestamp-validation-logic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#current-timestamp-validation-logic"}},[e._v("#")]),e._v(" Current timestamp validation logic")]),e._v(" "),a("p",[e._v("To provide a better understanding of the changes needed to timestamp validation, we will first detail how timestamp validation works currently in Tendermint.")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/c3ae6f5b58e07b29c62bfdc5715b6bf8ae5ee951/state/validation.go#L14",target:"_blank",rel:"noopener noreferrer"}},[e._v("validBlock function"),a("OutboundLink")],1),e._v(" currently "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/c3ae6f5b58e07b29c62bfdc5715b6bf8ae5ee951/state/validation.go#L118",target:"_blank",rel:"noopener noreferrer"}},[e._v("validates the proposed block timestamp in three ways"),a("OutboundLink")],1),e._v(".\nFirst, the validation logic checks that this timestamp is greater than the previous block’s timestamp.")]),e._v(" "),a("p",[e._v("Second, it validates that the block timestamp is correctly calculated as the weighted median of the timestamps in the "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/e8013281281985e3ada7819f42502b09623d24a0/types/block.go#L48",target:"_blank",rel:"noopener noreferrer"}},[e._v("block’s LastCommit"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Finally, the validation logic authenticates the timestamps in the "),a("code",[e._v("LastCommit.CommitSig")]),e._v(".\nThe cryptographic signature in each "),a("code",[e._v("CommitSig")]),e._v(" is created by signing a hash of fields in the block with the voting validator’s private key.\nOne of the items in this "),a("code",[e._v("signedBytes")]),e._v(" hash is the timestamp in the "),a("code",[e._v("CommitSig")]),e._v(".\nTo authenticate the "),a("code",[e._v("CommitSig")]),e._v(" timestamp, the validator authenticating votes builds a hash of fields that includes the "),a("code",[e._v("CommitSig")]),e._v(" timestamp and checks this hash against the signature.\nThis takes place in the "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/e8013281281985e3ada7819f42502b09623d24a0/types/validation.go#L25",target:"_blank",rel:"noopener noreferrer"}},[e._v("VerifyCommit function"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"remove-unused-timestamp-validation-logic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove-unused-timestamp-validation-logic"}},[e._v("#")]),e._v(" Remove unused timestamp validation logic")]),e._v(" "),a("p",[a("code",[e._v("BFTTime")]),e._v(" validation is no longer applicable and will be removed.\nThis means that validators will no longer check that the block timestamp is a weighted median of "),a("code",[e._v("LastCommit")]),e._v(" timestamps.\nSpecifically, we will remove the call to "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/4db71da68e82d5cb732b235eeb2fd69d62114b45/state/validation.go#L117",target:"_blank",rel:"noopener noreferrer"}},[e._v("MedianTime in the validateBlock function"),a("OutboundLink")],1),e._v(".\nThe "),a("code",[e._v("MedianTime")]),e._v(" function can be completely removed.")]),e._v(" "),a("p",[e._v("Since "),a("code",[e._v("CommitSig")]),e._v("s will no longer contain a timestamp, the validator authenticating a commit will no longer include the "),a("code",[e._v("CommitSig")]),e._v(" timestamp in the hash of fields it builds to check against the cryptographic signature.")]),e._v(" "),a("h4",{attrs:{id:"timestamp-validation-when-a-block-has-not-received-a-polka"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timestamp-validation-when-a-block-has-not-received-a-polka"}},[e._v("#")]),e._v(" Timestamp validation when a block has not received a polka")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/68ca65f5d79905abd55ea999536b1a3685f9f19d/types/proposal.go#L29",target:"_blank",rel:"noopener noreferrer"}},[e._v("POLRound"),a("OutboundLink")],1),e._v(" in the "),a("code",[e._v("Proposal")]),e._v(" message indicates which round the block received a polka.\nA negative value in the "),a("code",[e._v("POLRound")]),e._v(" field indicates that the block has not previously been proposed on the network.\nTherefore the validation logic will check for timely when "),a("code",[e._v("POLRound < 0")]),e._v(".")]),e._v(" "),a("p",[e._v("When a validator receives a "),a("code",[e._v("Proposal")]),e._v(" message, the validator will check that the "),a("code",[e._v("Proposal.Timestamp")]),e._v(" is at most "),a("code",[e._v("PRECISION")]),e._v(" greater than the current Unix time known to the validator, and at maximum "),a("code",[e._v("PRECISION + MSGDELAY")]),e._v(" less than the current Unix time known to the validator.\nIf the timestamp is not within these bounds, the proposed block will not be considered "),a("code",[e._v("timely")]),e._v(".")]),e._v(" "),a("p",[e._v("Once a full block matching the "),a("code",[e._v("Proposal")]),e._v(" message is received, the validator will also check that the timestamp in the "),a("code",[e._v("Header.Timestamp")]),e._v(" of the block matches this "),a("code",[e._v("Proposal.Timestamp")]),e._v(".\nUsing the "),a("code",[e._v("Proposal.Timestamp")]),e._v(" to check "),a("code",[e._v("timely")]),e._v(" allows for the "),a("code",[e._v("MSGDELAY")]),e._v(" parameter to be more finely tuned since "),a("code",[e._v("Proposal")]),e._v(" messages do not change sizes and are therefore faster to gossip than full blocks across the network.")]),e._v(" "),a("p",[e._v("A validator will also check that the proposed timestamp is greater than the timestamp of the block for the previous height.\nIf the timestamp is not greater than the previous block's timestamp, the block will not be considered valid, which is the same as the current logic.")]),e._v(" "),a("h4",{attrs:{id:"timestamp-validation-when-a-block-has-received-a-polka"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timestamp-validation-when-a-block-has-received-a-polka"}},[e._v("#")]),e._v(" Timestamp validation when a block has received a polka")]),e._v(" "),a("p",[e._v("When a block is re-proposed that has already received a +2/3 majority of "),a("code",[e._v("Prevote")]),e._v("s on the network, the "),a("code",[e._v("Proposal")]),e._v(" message for the re-proposed block is created with a "),a("code",[e._v("POLRound")]),e._v(" that is "),a("code",[e._v(">= 0")]),e._v(".\nA validator will not check that the "),a("code",[e._v("Proposal")]),e._v(" is "),a("code",[e._v("timely")]),e._v(" if the propose message has a non-negative "),a("code",[e._v("POLRound")]),e._v(".\nIf the "),a("code",[e._v("POLRound")]),e._v(" is non-negative, each validator will simply ensure that it received the "),a("code",[e._v("Prevote")]),e._v(" messages for the proposed block in the round indicated by "),a("code",[e._v("POLRound")]),e._v(".")]),e._v(" "),a("p",[e._v("If the validator does not receive "),a("code",[e._v("Prevote")]),e._v(" messages for the proposed block before the proposal timeout, then it will prevote nil.\nValidators already check that +2/3 prevotes were seen in "),a("code",[e._v("POLRound")]),e._v(", so this does not represent a change to the prevote logic.")]),e._v(" "),a("p",[e._v("A validator will also check that the proposed timestamp is greater than the timestamp of the block for the previous height.\nIf the timestamp is not greater than the previous block's timestamp, the block will not be considered valid, which is the same as the current logic.")]),e._v(" "),a("p",[e._v("Additionally, this validation logic can be updated to check that the "),a("code",[e._v("Proposal.Timestamp")]),e._v(" matches the "),a("code",[e._v("Header.Timestamp")]),e._v(" of the proposed block, but it is less relevant since checking that votes were received is sufficient to ensure the block timestamp is correct.")]),e._v(" "),a("h4",{attrs:{id:"relaxation-of-the-timely-check"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relaxation-of-the-timely-check"}},[e._v("#")]),e._v(" Relaxation of the 'Timely' check")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Synchrony")]),e._v(" parameters, "),a("code",[e._v("MessageDelay")]),e._v(" and "),a("code",[e._v("Precision")]),e._v(" provide a means to bound the timestamp of a proposed block.\nSelecting values that are too small presents a possible liveness issue for the network.\nIf a Tendermint network selects a "),a("code",[e._v("MessageDelay")]),e._v(" parameter that does not accurately reflect the time to broadcast a proposal message to all of the validators on the network, nodes will begin rejecting proposals from otherwise correct proposers because these proposals will appear to be too far in the past.")]),e._v(" "),a("p",[a("code",[e._v("MessageDelay")]),e._v(" and "),a("code",[e._v("Precision")]),e._v(" are planned to be configured as "),a("code",[e._v("ConsensusParams")]),e._v(".\nA very common way to update "),a("code",[e._v("ConsensusParams")]),e._v(" is by executing a transaction included in a block that specifies new values for them.\nHowever, if the network is unable to produce blocks because of this liveness issue, no such transaction may be executed.\nTo prevent this dangerous condition, we will add a relaxation mechanism to the "),a("code",[e._v("Timely")]),e._v(" predicate.\nIf consensus takes more than 10 rounds to produce a block for any reason, the "),a("code",[e._v("MessageDelay")]),e._v(" will be doubled.\nThis doubling will continue for each subsequent 10 rounds of consensus.\nThis will enable chains that selected too small of a value for the "),a("code",[e._v("MessageDelay")]),e._v(" parameter to eventually issue a transaction and readjust the parameters to more accurately reflect the broadcast time.")]),e._v(" "),a("p",[e._v("This liveness issue is not as problematic for chains with very small "),a("code",[e._v("Precision")]),e._v(" values.\nOperators can more easily readjust local validator clocks to be more aligned.\nAdditionally, chains that wish to increase a small "),a("code",[e._v("Precision")]),e._v(" value can still take advantage of the "),a("code",[e._v("MessageDelay")]),e._v(" relaxation, waiting for the "),a("code",[e._v("MessageDelay")]),e._v(" value to grow significantly and issuing proposals with timestamps that are far in the past of their peers.")]),e._v(" "),a("p",[e._v("For more discussion of this, see "),a("a",{attrs:{href:"https://github.com/tendermint/spec/issues/371",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue 371"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"changes-to-the-prevote-step"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changes-to-the-prevote-step"}},[e._v("#")]),e._v(" Changes to the prevote step")]),e._v(" "),a("p",[e._v("Currently, a validator will prevote a proposal in one of three cases:")]),e._v(" "),a("ul",[a("li",[e._v("Case 1:  Validator has no locked block and receives a valid proposal.")]),e._v(" "),a("li",[e._v("Case 2:  Validator has a locked block and receives a valid proposal matching its locked block.")]),e._v(" "),a("li",[e._v("Case 3:  Validator has a locked block, sees a valid proposal not matching its locked block but sees +2/3 prevotes for the proposal’s block, either in the current round or in a round greater than or equal to the round in which it locked its locked block.")])]),e._v(" "),a("p",[e._v("The only change we will make to the prevote step is to what a validator considers a valid proposal as detailed above.")]),e._v(" "),a("h3",{attrs:{id:"changes-to-the-precommit-step"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changes-to-the-precommit-step"}},[e._v("#")]),e._v(" Changes to the precommit step")]),e._v(" "),a("p",[e._v("The precommit step will not require much modification.\nIts proposal validation rules will change in the same ways that validation will change in the prevote step with the exception of the "),a("code",[e._v("timely")]),e._v(" check: precommit validation will never check that the timestamp is "),a("code",[e._v("timely")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"remove-votetime-completely"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove-votetime-completely"}},[e._v("#")]),e._v(" Remove voteTime Completely")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/822893615564cb20b002dd5cf3b42b8d364cb7d9/internal/consensus/state.go#L2229",target:"_blank",rel:"noopener noreferrer"}},[e._v("voteTime"),a("OutboundLink")],1),e._v(" is a mechanism for calculating the next "),a("code",[e._v("BFTTime")]),e._v(" given both the validator's current known Unix time and the previous block timestamp.\nIf the previous block timestamp is greater than the validator's current known Unix time, then voteTime returns a value one millisecond greater than the previous block timestamp.\nThis logic is used in multiple places and is no longer needed for proposer-based timestamps.\nIt should therefore be removed completely.")]),e._v(" "),a("h2",{attrs:{id:"future-improvements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#future-improvements"}},[e._v("#")]),e._v(" Future Improvements")]),e._v(" "),a("ul",[a("li",[e._v("Implement BLS signature aggregation.\nBy removing fields from the "),a("code",[e._v("Precommit")]),e._v(" messages, we are able to aggregate signatures.")])]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("<2/3")]),e._v(" of validators can no longer influence block timestamps.")]),e._v(" "),a("li",[e._v("Block timestamp will have stronger correspondence to real time.")]),e._v(" "),a("li",[e._v("Improves the reliability of light client block verification.")]),e._v(" "),a("li",[e._v("Enables BLS signature aggregation.")]),e._v(" "),a("li",[e._v("Enables evidence handling to use time instead of height for evidence validity.")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("ul",[a("li",[e._v("Alters Tendermint’s liveness properties.\nLiveness now requires that all correct validators have synchronized clocks within a bound.\nLiveness will now also require that validators’ clocks move forward, which was not required under "),a("code",[e._v("BFTTime")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("May increase the length of the propose step if there is a large skew between the previous proposer and the current proposer’s local Unix time.\nThis skew will be bound by the "),a("code",[e._v("PRECISION")]),e._v(" value, so it is unlikely to be too large.")])]),e._v(" "),a("li",[a("p",[e._v("Current chains with block timestamps far in the future will either need to pause consensus until after the erroneous block timestamp or must maintain synchronized but very inaccurate clocks.")])])]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/main/spec/consensus/proposer-based-timestamp",target:"_blank",rel:"noopener noreferrer"}},[e._v("PBTS Spec"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/main/spec/consensus/bft-time.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("BFTTime spec"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/tendermint/spec/issues/371",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 371"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);