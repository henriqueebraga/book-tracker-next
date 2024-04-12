import { StatusMessage } from '@/components/StatusMessage';
import { fetchData } from '@/utils/fetchData'
import { BookType } from '@/types/types';
import React from 'react';
import { getUserCookie } from '@/utils/cookieServer'
import BookList from '@/components/BookList';

export default async function Books() {
    console.log('rendered')
    let id = null;

    const bookListData: any = await fetchData('books');
    const userData: any = await fetchData(`user/${id}`) || null;
    return (
        <>
            <header className='py-10'>
                <h1>Books</h1>
            </header>
            <BookList userData={userData} bookListData={bookListData} />
        </>
    )
}