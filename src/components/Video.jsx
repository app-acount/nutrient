export default function Video({ src }) {
    return (
        <video controls style={{ maxWidth: "100%" }}>
            <source src={src} type="video/mp4" />
        </video>
    );
}
