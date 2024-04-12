import React from 'react';

enum VariantType {
    success = 'text-green-500',
    error = 'text-red-500',
}

enum SizeType {
    small = 'text-sm',
    base = 'text-base',
    large = 'text-lg',
    xl = 'text-2xl'

}

type StatusContentType = {
    text: string;
    variant: keyof typeof VariantType;
    size?: keyof typeof SizeType
};

export const StatusContent = ({ text, variant, size = 'base' }: StatusContentType) => {
    const classNames = `p-2 ${SizeType[size]} ${VariantType[variant]}`;
    return (
        <span className={classNames} data-cy={variant}>{text}</span>
    );
};