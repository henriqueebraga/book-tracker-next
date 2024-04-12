'use client'
import { useCardProgressHook } from './useBookItemCardProgressHook';

export const BookItemCardProgressBar = ({ pageProgress }: any) => {
    console.log('pageProgress', pageProgress)
    const { isCookieUser, isLoading } = useCardProgressHook();
    if (!isCookieUser) {
        return null;
    }
    if (isLoading) {
        return (
            <div className='flex'>
                <div className='flex items-center'>
                    <span className='text-xs mr-2'>0%</span>
                    <div className="flex-start flex h-1 w-20 overflow-hidden rounded-full bg-gray-200 font-sans text-xs font-medium">
                        <div className="flex h-full items-center justify-center overflow-hidden break-all rounded-full bg-green-300 text-white" style={{ width: `${pageProgress}%` }} />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            {isCookieUser ? (
                <div className='flex'>
                    <div className='flex items-center'>
                        <span className='text-xs mr-2'>{pageProgress}%</span>
                        <div className="flex-start flex h-1 w-20 overflow-hidden rounded-full bg-gray-200 font-sans text-xs font-medium">
                            <div className="flex h-full items-center justify-center overflow-hidden break-all rounded-full bg-green-300 text-white" style={{ width: `${pageProgress}%` }} />
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
