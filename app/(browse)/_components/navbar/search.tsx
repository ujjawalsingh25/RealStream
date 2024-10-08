"use client";

import qs from "query-string"
import React, { useState } from "react";
import { SearchIcon, X} from "lucide-react"
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export const Search = () => {
    // console.log("I am logged here!");
    const router = useRouter();
    const [value, setValue] = useState("");

    const onSubmit= (eventt: React.FormEvent<HTMLFormElement>) => {
        eventt.preventDefault();
        if(!value)  return;
        const url = qs.stringifyUrl({
            url: "/search",
            query: {term: value},
        }, {skipEmptyString: true });
        //localhost:3000?term=value(thatUser_Search) -->> Url will stringfy as 
        router.push(url);
    }
    
    const onClear = () => {
        setValue("");
    }

    return (
        <form 
            onSubmit={onSubmit}
            className="relative w-full lg:w-[400px] flex items-center"
        >
            <Input 
                value={value}
                onChange={(eventt) => setValue(eventt.target.value)}
                placeholder="Search"
                className="rounded-r-none focus-visible: ring-0
                focus-visible: ring-transparent focus-visible: ring-offset-0" //bg-red-500
            />
            {value && (
                <X 
                    className="absolute top-2.5 right-14 h-5 w-5
                    text-muted-foreground cursor-pointer hover:opacity-75 transition" 
                    onClick={onClear}
                />
            )}
            <Button 
                type="submit"
                size="sm"
                variant="secondary"
                className="rounded-l-none bg-blue-500/90"
            >
                <SearchIcon className="h-7 w-7  text-muted-foreground" />
            </Button>
        </form>
    );
};