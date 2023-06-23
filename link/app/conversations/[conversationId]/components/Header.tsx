"use client";

import Avatar from "@/app/components/Avatar";
import useOtherUser from "@/app/hooks/useOtherUser";

import { Conversation, User } from "@prisma/client";
import Link from "next/link";
import { useMemo } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { HiEllipsisHorizontal } from "react-icons/hi2";

interface HeaderProps {
    conversation: Conversation & {
        users: User[]
    }
};

const Header: React.FC<HeaderProps> = ({
    conversation
}) => {
    const otherUser = useOtherUser(conversation);

    const statusText = useMemo(() => {
        if (conversation.isGroup) {
            return `${conversation.users.length} members`;
        }

        return 'Active';
    }, [conversation]);

    return (
        <div
            className="
                bg-white
                dark:bg-zinc-950
                w-full
                flex
                border-b-[1px]
                dark:border-zinc-800
                sm:px-4
                py-3
                px-4
                lg:px-6
                justify-between
                items-center
                shadow-sm
            "
        >
            <div className="flex gap-3 items-center">
                <Link
                    className="
                        lg:hidden
                        block
                        text-indigo
                        hover:text-indigoDarker
                        transition
                        cursor-pointer
                    "
                    href="/conversations"
                >
                    <HiChevronLeft size={32} />
                </Link>
                <Avatar user={otherUser} />
                <div className="flex flex-col">
                    <div className="text-black dark:text-white text-sm font-medium">
                        {conversation.name || otherUser.name}
                    </div>
                    <div 
                        className="
                            text-xs
                            text-gray-500
                        "
                    >
                        {statusText}
                    </div>
                </div>
            </div>
            <HiEllipsisHorizontal 
                size={32}
                onClick={() => {}}
                className="
                    text-indigo
                    cursor-pointer
                    hover:text-indigoDarker
                    transition
                "
            />
        </div>
    );
}
 
export default Header;