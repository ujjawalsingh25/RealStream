import { StreamPlayerSkeleton } from "@/components/stream-player"
import { LoadingVideo } from "@/components/stream-player/loading-video";

const CreatorLoading = () => {
    return (
        <div className="h-full">
            {/* <LoadingVideo label="Loading..." /> */}
            <StreamPlayerSkeleton />
        </div>
    );
}

export default CreatorLoading;