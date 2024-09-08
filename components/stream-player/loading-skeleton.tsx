import { Commet } from "react-loading-indicators"

interface LoadingSkeletonProps {
    label: string;
};

export const LoadingSkeleton = ({label,}: LoadingSkeletonProps) => {
    return(
        <div className="h-full flex flex-col space-y-4 justify-center items-center">
            <Commet color="#ffffff" size="large" text="" textColor="#ffffff" />
            <p className="text-muted-foreground capitalize">
                Loading...
            </p>
        </div>
    );
};