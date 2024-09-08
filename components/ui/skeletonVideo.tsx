import { cn } from "@/lib/utils"
import { LoadingSkeleton } from "../stream-player/loading-skeleton"

function SkeletonVideo({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
        <div
        className={cn("animate-pulse rounded-md bg-muted", className)}
        {...props}
        >
            <LoadingSkeleton label="Loading..." />
        </div>
    </>
  )
}

export { SkeletonVideo }
