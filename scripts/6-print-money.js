import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0x3fB79EFA81c632015003e65F3a6Bd561f5689307");

(async () => {
    try {
        const amount = 1_000_000;
        await token.mintToSelf(amount);
        const totalSupply = await token.totalSupply();

        console.log("✅ There now is", totalSupply.displayValue, "$GFRIEND in circulation");
    } catch (error) {
        console.error("Failed to print money", error);
    }
})();