"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
    placeholder?: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors
}

const MessageInput: React.FC<MessageInputProps> = ({
    placeholder,
    id,
    type,
    required,
    register,
    errors
}) => {
    return (
        <div>
            Message Input
        </div>
    );
}
 
export default MessageInput;