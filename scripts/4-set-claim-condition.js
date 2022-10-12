import sdk from "./1-initialize-sdk.js";
import { MaxUint256 } from "@ethersproject/constants";

const editionDrop = await sdk.getEditionDrop("0x9746cBf1B3F1Ae975bdF9dB237a01445058773A1");

(async () => {
    try {
        const claimConditions = [{
            startTime: new Date(),
            maxQuantity: 10_000,
            price: 0,
            quantityLimitPerTransaction: 1,
            waitInSeconds: MaxUint256,
        }]

        await editionDrop.claimConditions.set("0", claimConditions);
        console.log("✅ Successfully set claim condition!");
    } catch (error) {
        console.error("Failed to set claim condition", error);
    }
})();