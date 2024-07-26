import category from '../data/category';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BrowseCategories() {
    return (
        <div className='mt-80'>
            <h1 className='text-center text-2xl mb-4 justify-center'>Browse Categories</h1>
            <div className='grid grid-cols-3 md:grid-cols-7 gap-6 justify-center ml-20'>
                {category.map((item) => (
                    <Link key={item.id} href={`/${item.URL}`}>
                        <div
                            className='relative flex flex-col items-center justify-center bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer'
                            style={{
                                width: '160px',
                                height: '160px'
                            }}
                            title={item.name}
                        >
                            <div className='flex flex-col items-center justify-center p-4'>
                                <Image src={item.icon} alt={item.name} width={350} height={180}
                                    className='absolute top-0 w-full h-[60%] rounded-lg' />
                                <span className='mt-20 text-center text-lg'>{item.name}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
