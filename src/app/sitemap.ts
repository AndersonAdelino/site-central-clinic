export const dynamic = "force-static";
import { MetadataRoute } from "next";
import { services } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://site-central-clinic-vercel-app.vercel.app";

    const serviceUrls: MetadataRoute.Sitemap = services.map((service) => ({
        url: `${baseUrl}/servicos/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        ...serviceUrls,
    ];
}
