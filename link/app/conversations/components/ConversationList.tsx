"use client";

import { FullConversationType } from "@/app/types";

interface ConversationListProps {
    initialItems: FullConversationType[];
}

const ConversationList: React.FC<ConversationListProps> = ({
    initialItems
}) => {
    return (
        <div>
            Conv List
        </div>
    );
}
 
export default ConversationList;