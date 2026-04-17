# ABS Streaming Demo

A minimal Next.js app that plays a video with Adaptive Bitrate Streaming using [`@imagekit/next`](https://www.npmjs.com/package/@imagekit/next).

Everything lives in `app/page.tsx`:

```tsx
import { Video } from "@imagekit/next";

export default function Page() {
  return (
    <Video
      urlEndpoint="https://ik.imagekit.io/ikmedia"
      src="/example_video.mp4"
      controls
      width={720}
      height={405}
      transformation={[{
        streamingResolutions: ["360", "480", "720", "1080"],
        quality: 80,
      }]}
    />
  );
}
```

## Setup

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

To use your own video, change `urlEndpoint` to your ImageKit URL endpoint and `src` to the path of your uploaded video.
