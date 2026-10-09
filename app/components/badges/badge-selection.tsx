import CredlyBadge from "./credly-badge";

export default function BadgeSection() {
    // const badges = []
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

                <CredlyBadge 
                    badgeId="da49dcea-60e0-41a5-8c7d-23d3b982e2fc"
                />

                <CredlyBadge 
                    badgeId="455b7d28-5488-49ca-8048-78d9e1c05270"
                />

                <CredlyBadge 
                    badgeId="92c96453-0d85-45fd-b7db-d4adc986ceb9"
                />

                <CredlyBadge 
                    badgeId="e839e452-dfa9-493e-ad71-c51f61e2243d"
                />

            </div>
        </section>
    );
}