import sdk from "./1-initialize-sdk.js";

const vote = sdk.getVote("0x65670980473240964a52BcaA092a77D182c3771E");
const token = sdk.getToken("0x3fB79EFA81c632015003e65F3a6Bd561f5689307");

(async () => {
    try {
        await token.roles.grant("minter", vote.getAddress());

        console.log(
            "Successfully gave vote contract permissions to act on token contract"
        );
    } catch (error) {
        console.error(
            "failed to grant vote contract permissions on token contract",
            error
        );
        process.exit(1);
    }

    try {
        const ownedTokenBalance = await token.balanceOf(
            process.env.WALLET_ADDRESS
        );

        const ownedAmount = ownedTokenBalance.displayValue;
        const percent90 = Number(ownedAmount) / 100 * 90;

        await token.transfer(
            vote.getAddress(),
            percent90
        );

        console.log("✅ Successfully transferred " + percent90 + " tokens to vote contract");
    } catch (err) {
        console.error("failed to transfer tokens to vote contract", err);
    }
})();