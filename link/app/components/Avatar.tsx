'use client';

import { User } from "@prisma/client";
import Image from "next/image";
import useActiveList from "../hooks/useActiveList";

interface AvatarProps {
    user?: User;
}

const Avatar: React.FC<AvatarProps> = ({
    user
}) => {
    const { members } = useActiveList();
    const isActive = members.indexOf(user?.email!) !== -1;

    return (
        <div className="relative flex items-center justify-center">
            <div 
                className="
                    relative
                    inline-block
                    rounded-full
                    overflow-hidden
                    h-9
                    w-9
                "
            >
                <Image 
                    alt="Avatar"
                    src={user?.image || '/images/placeholder.webp'}
                    fill
                />
            </div>
            {isActive && (
                <span 
                    className="
                        absolute
                        block
                        rounded-full
                        bg-green-500
                        ring-2
                        ring-white
                        dark:ring-zinc-800
                        top-0
                        right-0
                        h-2.5
                        w-2.5
                    " 
                />
            )}
        </div>
    );
}
 
export default Avatar;