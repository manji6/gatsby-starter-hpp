import { graphql, useStaticQuery } from 'gatsby';

type Props = {
  site: {
    siteMetadata: {
      siteTitle?: string;
      siteTitleAlt?: string;
      siteHeadline?: string;
      siteUrl?: string;
      siteDescription?: string;
      siteLanguage?: string;
      author?: string;
      twitterUrl?: string;
    };
  };
};

/**
 * ex. const {siteTitle, siteUrl} = useSiteMetadata();
 */
export default () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleAlt
          siteHeadline
          siteUrl
          siteDescription
          siteLanguage
          author
          twitterUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
