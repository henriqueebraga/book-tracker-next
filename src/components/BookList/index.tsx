import { StatusMessage } from '@/components/StatusMessage';
import React from 'react';
import { BookItemCard } from '@/components/BookItemCard';
import { BookItemCardProgressBar } from '@/components/BookItemCard/BookItemCardProgressBar';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { USER_COOKIE } from '@/utils/constants';

export default async function BookList({ userData, bookListData }: any) {
    const userCookie = getCookie(USER_COOKIE, { cookies });
    const calculatePercentage = (bookSlug: string, index: number) => {
        const bookProgress = userData?.data?.bookProgress || [];
        const progressEntry = bookProgress.find((book: any) => book.slug === bookSlug);

        const currentPage = progressEntry?.currentPage || 0;
        const pageCount = bookListData?.data[index]?.pageCount || 0;
        if (pageCount !== 0) {
            return Math.ceil((currentPage / pageCount) * 100);
        }
 
        return 0;
    };
    console.log(userCookie)
    return (
        <div className="flex flex-wrap -mx-2">
            {bookListData && bookListData.data ? (
                bookListData?.data?.map((book: any, index: number) => {
                    return (
                        <React.Fragment key={book.id}>
                            <BookItemCard>
                                <BookItemCard.Image src={'/favicon.ico'} height={50} width={50} alt={book.title} />
                                <BookItemCard.Content>
                                    <p className="block center text-sm font-semibold mb-1 h-16">{book.title}</p>
                                    <div>
                                        <p className="text-gray-600 text-xs mb-1">Genre: {book.genre}</p>
                                        <p className="text-gray-600 text-xs">Page Count: {book.pageCount}</p>
                                    </div>
                                </BookItemCard.Content>
                                {/* {userCookie && <BookItemCardProgressBar pageProgress={calculatePercentage(book.slug, index)} />} */}
                            </BookItemCard>
                        </React.Fragment>
                    )
                })
            ) : (
                <StatusMessage>
                    <StatusMessage.Icon src={'/favicon.ico'} height={20} width={25} />
                    <StatusMessage.Content text={bookListData.error} size='small' variant='error' />
                </StatusMessage>
            )}
        </div>
    )
}