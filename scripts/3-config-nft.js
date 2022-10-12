import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = await sdk.getEditionDrop("0x9746cBf1B3F1Ae975bdF9dB237a01445058773A1");

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: "All Gfriend Member",
                description: "This NFT will give you access to BudiDAO!",
                image: readFileSync("scripts/assets/allgf.jpg"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})();