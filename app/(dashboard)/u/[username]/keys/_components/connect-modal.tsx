"use client";

import { toast } from "sonner";
import { useState, useTransition, useRef, ElementRef } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import  { IngressInput } from "livekit-server-sdk";
import { createIngress } from "@/actions/ingress";

import { Dialog, DialogClose, DialogContent} from "@/components/ui/dialog";
import { DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle, } from "@/components/ui/alert";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const RTMP = String(IngressInput.RTMP_INPUT);
const WHIP = String(IngressInput.WHIP_INPUT);

type IngressType = typeof RTMP | typeof WHIP;

export const ConnectModal = () => {
    const closeRef = useRef<ElementRef<"button">>(null);
    const [isPending, startTransition] = useTransition();
    const [ingressType, setIngressType] = useState<IngressType>(RTMP);

    const onSubmit = () => {
        startTransition(() => {
            createIngress(parseInt(ingressType))
                .then(() => {
                    toast.success("Ingress Created");
                    closeRef?.current?.click();
                })
                .catch(() => toast.error("Something went wrong"));
                // .catch((error) => {
                //     console.error("Error creating ingress:", error); // Log the error for debugging
                //     toast.error(`Something went wrong: ${error.message}`);
                // });
        });
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="primary">
                    Generate Connection
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Generate Connection</DialogTitle>
                </DialogHeader>
                <Select
                    disabled={isPending}
                    value={ingressType}
                    onValueChange={(value) => setIngressType(value)}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Ingress Type"/>
                    </SelectTrigger> 
                    <SelectContent>
                        <SelectItem value={RTMP}>RTMP</SelectItem>
                        <SelectItem value={WHIP}>WHIP</SelectItem>
                    </SelectContent>
                </Select>
                <Alert>
                    <AlertTriangle className="h-4 w-4"/>
                    <AlertTitle>Warning!</AlertTitle>
                    <AlertDescription>
                        This action will reset all active streams using the current connections
                    </AlertDescription>
                </Alert>
                <div className="flex justify-between">
                    <DialogClose ref={closeRef} asChild >
                        <Button variant="ghost" className="bg-red-600">
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                        disabled={isPending}
                        onClick={onSubmit}
                        variant="primary"
                    >
                        Generate
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};