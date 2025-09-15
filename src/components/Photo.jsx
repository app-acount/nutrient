export default function Photo({ src, alt }) {
    return <img src={src} alt={alt} style={{ maxWidth: "100%" }} />;
}
