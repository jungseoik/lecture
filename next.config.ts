import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 디자인 시안의 캠퍼스/히어로 이미지는 Unsplash 플레이스홀더.
    // 프로덕션에서는 브랜드 에셋으로 교체하고 이 패턴을 정리하세요.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
