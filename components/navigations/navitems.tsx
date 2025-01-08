"use client";
import { primaryLinks } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type PrimaryNavItemsProps = (typeof primaryLinks)[number];

export default function PrimaryNavItems({ label, href }: PrimaryNavItemsProps) {
    const pathname = usePathname();
    return (
        <li>
            <Link
                className={`relative text-primary-500 p-3 leading-relaxed block ${
                    pathname === `${href}` ? "text-primary-600 font-bold" : ""
                }`}
                href={href}
            >
                {pathname === `${href}` && (
                    <span className="absolute left-0 top-0 bg-orange z-0 h-full w-full"></span>
                )}
                <span className="relative z-10">{label}</span>
            </Link>
        </li>
    );
}
