"use client";

import Link from 'next/link';

export default function Breadcrumb({ items, inHero = false }) {
  return (
    <nav className="py-4">
      <ul className="flex space-x-2 font-poppins">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index < items.length - 1 ? (
              <>
                <Link href={item.href} className={`hover:text-secondary ${inHero ? 'text-white' : 'text-primary'}`}>
                  {item.label}
                </Link>
                <span className={`mx-2 ${inHero ? 'text-white' : 'text-gray'}`}>/</span>
              </>
            ) : (
              <span className={inHero ? 'text-white font-semibold' : 'text-primary font-semibold'}>{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}