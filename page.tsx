"use client"
import {Video, buildSrc} from "@imagekit/next"
// store url in .env file
const url = "https://ik.imagekit.io/{your_code}/"
const videoSrc = "sample-video.mp4"
const thumbs = [1, 2, 3, 4, 5, 6].map(i =>
    buildSrc({
        urlEndpoint: url,
        src: `${videoSrc}/ik-thumbnail.jpg`,
        transformation: [{width: 320, height: 180, startOffset: i * 2}]
    })
)


export default function Page() {
    return (
        <>
            <header className="nav">
                <span className="logo">NEXTFLIX</span>
                <a href="#">Home</a>
                <a href="#">Series</a>
                <a href="#">Movies</a>
                <a href="#">My List</a>
            </header>

            <section className="hero">
                <Video
                    urlEndpoint={url}
                    src={`${videoSrc}/ik-master.m3u8`}
                    controls
                    autoPlay
                    muted
                    playsInline
                    poster={buildSrc({
                        urlEndpoint: url,
                        src: `${videoSrc}/ik-thumbnail.jpg`
                    })}
                    transformation={[
                        {
                            streamingResolutions: ["240", "360", "480", "720", "1080"],
                            overlay: {
                                type: "text",
                                text: "DREAM",
                                position: {focus: "center"},
                                timing: {start: 0, duration: 2},
                                transformation: [
                                    {
                                        fontSize: 180,
                                        fontColor: "FFFFFF",
                                        typography: "b"
                                    }
                                ]
                            }
                        }
                    ]}
                />
            </section>

            <section className="row">
                <h2>Trending Now</h2>
                <div className="cards">
                    {thumbs.map((url, i) => (
                        <div
                            key={i}
                            className="card"
                            style={{backgroundImage: `url(${url}`}}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

