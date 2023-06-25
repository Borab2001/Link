"use client";

import clsx from "clsx";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BsPersonFillAdd } from "react-icons/bs";

import useConversation from "@/app/hooks/useConversation";
import { FullConversationType } from "@/app/types";
import ConversationBox from "./ConversationBox";
import GroupChatModal from "./GroupChatModal";
import { User } from "@prisma/client";

interface ConversationListProps {
    initialItems: FullConversationType[];
    users: User[];
}

const ConversationList: React.FC<ConversationListProps> = ({
    initialItems,
    users
}) => {
    const [items, setItems] = useState(initialItems);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const router = useRouter();

    const { conversationId, isOpen } = useConversation();

    return (
        <>
            <GroupChatModal
                users={users}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
            <aside 
                className={clsx(`
                    fixed
                    inset-y-0
                    pb-20
                    lg:pb-20
                    lg:left-20
                    lg:w-80
                    lg:block
                    overflow-y-auto
                    border-r
                    bg-white
                    dark:bg-neutral-950
                    border-gray-200
                    dark:border-zinc-800
                `,
                    isOpen ? 'hidden' : 'block w-full left-0'
                )}
            >
                <div className="px-5">
                    <div className="flex justify-between mb-4 pt-4">
                        <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                            Messages
                        </div>
                        <div
                            onClick={() => setIsModalOpen(true)}
                            className="
                                rounded-full
                                p-2
                                bg-gray-100
                                dark:bg-zinc-900
                                text-gray-600
                                dark:text-gray-400
                                cursor-pointer
                                hover:bg-gray-200
                                hover:text-black
                                dark:hover:text-white
                                dark:hover:bg-zinc-800
                                transition
                            "
                        >
                            <AiOutlineUsergroupAdd size={20} />
                            {/* <BsPersonFillAdd /> */}
                        </div>
                    </div>
                    {items.map((item) => (
                        <ConversationBox 
                            key={item.id}
                            data={item}
                            selected={conversationId === item.id}
                        />
                    ))}
                </div>
            </aside>
        </>
    );
}
 
export default ConversationList;