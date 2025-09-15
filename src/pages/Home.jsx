import Photo from "../components/Photo";
import Video from "../components/Video";

export default function Home() {
    return (
        <div>
            <h2>🏠 ホームページ</h2>
            <Photo src="/src/assets/image.png" alt="サンプル写真" />
            <Video src="\src\assets\movie.mp4" alt="サンプル動画"/>
        </div>
    );
}
