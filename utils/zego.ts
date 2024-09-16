import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import {v4 as uuid} from "uuid";

export const generateKitToken = (roomId: string) => {
    // const appID = process.env.ZEGO_APP_ID;
    // const serverSecret = process.env.ZEGO_APP_SECRET;
    const appID = 1951783504;
    const serverSecret = "e00c4b1008dbcbe043e01375eda7a44c";
    const username = "Ujjawal";

    // if(typeof appID !== "number") {
    //     throw new Error("Zego App Id Missing"); 
    // }
    // if(typeof serverSecret !== "string") {
    //     throw new Error("Zego App Id Missing"); 
    // }

    return ZegoUIKitPrebuilt.generateKitTokenForTest (
        appID, 
        serverSecret,  
        roomId, 
        uuid(),
        username,
    );    
}