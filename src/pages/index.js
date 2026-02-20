import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useThemeContext from '@theme/hooks/useThemeContext';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        For both beginners and experienced.
        With very clear and explanatory documentation, good for those who are starting their first project.
      </>
    ),
  },
  {
    title: <>Real Needs</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Developed to meet the needs of basic websites as well as large portals or even apps based on the core of WordPress.
      </>
    ),
  },
  {
    title: <>Success Stories</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        The Onyx Theme is already used by several clients, some with millions of daily visits and dozens of journalists and editors working using its features.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {/* {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )} */}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const OnyxLogo = () => {
  // const {siteConfig = {}} = useDocusaurusContext();
  // const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();
  // const logo = (isDarkTheme) ? 'img/logo-light.png' : 'img/logo.png';
  // return <img src={logo} alt={siteConfig.title}/>
  return <div className='onyx-logo'></div>;
};

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="Documentação"
      description="Starter theme e framework para WordPress">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <OnyxLogo />
          {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
          <p className="hero__subtitle">
            <strong>Onyx Theme</strong> for WordPress Documentation
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
