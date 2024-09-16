"use client";

import { useRouter } from 'next/navigation';
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { generateKitToken } from '@/utils/zego';

const VideoMeetPage = ({ params }) => {
    const { roomId } = params;      // to get the params / link and extract roomId
    const kitToken = generateKitToken(roomId);

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    // start the call
    const joinMeeting = (element) => {
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,     // the mode should be project type
            },
            sharedLinks: [
                {
                    name: "Copy Link",
                    url: `http://localhost:3000/room/${roomId}`, 
                }
            ],
            showScreenSharingButton: true,
        });
    };  

    return (
        <div 
            className='h-full'
            ref={joinMeeting}
        >
            <h1>Room Page</h1>
            <p>Room ID: {roomId}</p>
        </div>
    );
};

export default VideoMeetPage;
