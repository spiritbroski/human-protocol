// Code generated by the multiversx-sc multi-contract system. DO NOT EDIT.

////////////////////////////////////////////////////
////////////////// AUTO-GENERATED //////////////////
////////////////////////////////////////////////////

// Init:                                 1
// Endpoints:                           13
// Async Callback (empty):               1
// Total number of exported functions:  15

#![no_std]
#![feature(alloc_error_handler, lang_items)]

multiversx_sc_wasm_adapter::allocator!();
multiversx_sc_wasm_adapter::panic_handler!();

multiversx_sc_wasm_adapter::endpoints! {
    escrow
    (
        getBalance
        addTrustedHandlers
        setup
        abort
        cancel
        complete
        storeResults
        bulkPayOut
        deposit
        getStatus
        getRemainingSolutions
        getToken
        getDuration
    )
}

multiversx_sc_wasm_adapter::empty_callback! {}
