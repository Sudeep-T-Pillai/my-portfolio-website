interface CredlyBadgeProps {
    badgeId: string;
    width?: number;
    height?: number;
}


export default function CredlyBadge({
    badgeId,
    width = 150,
    height = 270
}: CredlyBadgeProps) {

    return (
        <iframe
            src={`https://www.credly.com/embedded_badge/${badgeId}`}
            width={width}
            height={height}
            style={{ overflow: 'hidden' }}
            data-share-badge-id={badgeId}
            data-share-badge-host="https://www.credly.com"

        />
    );
}