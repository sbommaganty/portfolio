import { APP_DESCRIPTION, APP_TITLE, MY_IMAGE_URL, socialLinks } from "config";
import Head from "next/head";

type props = {
  siteTitle?: string;
  description?: string;
  url?: string;
  image?: string;
};

export const SEO = ({ siteTitle, description, url, image }: props) => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <!-- Primary Meta Tags --> */}
      <title>{siteTitle ? `${siteTitle} | ${APP_TITLE}` : APP_TITLE}</title>
      <meta name="description" content={description || APP_DESCRIPTION} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={siteTitle ? `${siteTitle} | ${APP_TITLE}` : APP_TITLE}
      />
      <meta
        property="og:site_name"
        content={siteTitle ? `${siteTitle} | ${APP_TITLE}` : APP_TITLE}
      />
      <meta
        property="og:description"
        content={description || APP_DESCRIPTION}
      />
      <meta property="og:url" content={url || socialLinks.facebook} />
      <meta property="og:image" content={image || MY_IMAGE_URL} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content={socialLinks.twitter} />
      <meta
        property="twitter:title"
        content={siteTitle ? `${siteTitle} | ${APP_TITLE}` : APP_TITLE}
      />
      <meta
        property="twitter:description"
        content={description || APP_DESCRIPTION}
      />
      <meta property="twitter:url" content={url || socialLinks.twitter} />
      <meta property="twitter:image" content={image || MY_IMAGE_URL} />
    </Head>
  );
};

export default SEO;
