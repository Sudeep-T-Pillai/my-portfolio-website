"use client";

import Script from "next/script";
import CredlyBadge from "./credly-badge";

export default function BadgeSection() {

    return (
        <section className="flex flex-col gap-6">

            <div className="grid grid-cols-3 gap-2">

                <CredlyBadge
                    badgeId="7480810e-5e8c-4f6c-aaa1-8d4b75490922"
                />

                <CredlyBadge
                    badgeId="2b5dffe1-4f3f-4067-b058-6a922ca3ba44"
                />

                <CredlyBadge
                    badgeId="4674d5e1-688f-4cff-9c98-8f4fc63c553f"
                />

            </div>

            <Script
                src="https://cdn.credly.com/assets/utilities/embed.js"
                strategy="afterInteractive"
            />

        </section>
    );
}