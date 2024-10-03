// import { Loader } from "lucide-react";
import {BlinkBlur, ThreeDot, TrophySpin} from "react-loading-indicators"

interface LoadingVideoProps {
    label: string;
};

export const LoadingVideo = ({label,}: LoadingVideoProps) => {
    return(
        <div className="h-full flex flex-col space-y-4 justify-center items-center">
            {/* <Loader className="h-10 w-10 text-muted-foreground animate-ping" /> */}
            {/* <ThreeDot variant="bounce" color="#e5e5e5" size="large"/> */}
            <TrophySpin color="#ffffff" size="large" textColor="#ffffff" />
            {/* <ThreeDot variant="bounce" color="#e5e5e5" size="large" text={label} textColor="#e5e5e5"/> */}
            {/* <p className="text-muted-foreground capitalize">
                {label}
            </p> */}
        </div>
    );
};