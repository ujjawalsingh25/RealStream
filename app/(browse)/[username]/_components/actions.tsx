"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";

import { onBlock, onUnblock } from "@/actions/block";
import { Button } from "@/components/ui/button";
import { onFollow, onUnfollow } from "@/actions/follow";


interface ActionsProps {
    isFollowing: boolean;
    userId: string;
    isBlocked: boolean;
};

export const Actions = ({isFollowing, userId, isBlocked: initialBlocked }: ActionsProps) => {
    const [isPending, startTransition] = useTransition();
    const [isBlocked, setIsBlocked] = useState(initialBlocked);

    const handleFollow = () => {
        startTransition(() => {    
            onFollow(userId)
                .then((data) => toast.success(`Started Following ${data.following.username}`))
                .catch(() => toast.error("Something went wrong"));
        })
    }
    const handleUnfollow = () => {
        startTransition(() => {    
            onUnfollow(userId)
                .then((data) => toast.success(`Unfollowed ${data.following.username}`))
                .catch(() => toast.error("Something went wrong"));
        })
    }

    const onClick = () => {
        if(isFollowing) {
            handleUnfollow();
        } else {
            handleFollow();
        }
    }

    const handleBlock = () => {
        startTransition(() => {
            onBlock(userId)
                .then((data) => {
                    toast.success(`Blocked user ${data.blocked.username}`);
                    setIsBlocked(true);
                })
                .catch(() => toast.error("Something went wrong"));
        });
    };
    const handleUnblock = () => {
        startTransition(() => {
            onUnblock(userId)
                .then((data) => {
                    toast.success(`Unblocked user ${data.blocked.username}`);
                    setIsBlocked(false);
                })
                .catch(() => toast.error("Something went wrong"));
        });
    };
    
    const blockToggle = () => {
        if (isBlocked) {
            handleUnblock();
        } else {
            handleBlock();
        }
    };
    
    return (
        <>
            <Button 
                disabled={isPending} 
                onClick={onClick} 
                variant="primary"
                >
                {isFollowing ? "Unfollow" : "Follow" }
            </Button>
            <Button onClick={blockToggle} disabled={isPending}>
                {isBlocked ? "Unblock" : "Block"}
            </Button>
        </>
    );
};