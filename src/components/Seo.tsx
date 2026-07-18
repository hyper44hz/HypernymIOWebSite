import { useEffect } from 'react';

const siteUrl = 'https://hypernymbiz.com';

export const Seo = ({ title, description }: { title: string; description: string }) => {
  useEffect(() => {
    document.title = title;
    const canonical = `${siteUrl}${window.location.pathname === '/' ? '/' : window.location.pathname}`;

    const setMeta = (selector: string, attribute: string, value: string) => {
      const element = document.head.querySelector<HTMLMetaElement>(selector);
      if (element) element.setAttribute(attribute, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);

    const canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = canonical;
  }, [title, description]);

  return null;
};
