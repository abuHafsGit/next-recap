import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>logo</li>
                </ul>
                <ul>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/auth/signin'}>signin</Link></li>
                    <li><Link href={'/auth/signup'}>signup</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;