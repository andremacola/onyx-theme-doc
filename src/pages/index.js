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
    title: <>Fácil de Usar</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Indicado tanto para iniciantes ou experientes.
        Com uma documentação bem clara e explicativa, boa para quem está começando seu primeiro projeto.
      </>
    ),
  },
  {
    title: <>Necessidades Reais</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Desenvolvido para suprir as necessidades desde sites básicos
        quanto de grandes portais ou até mesmo apps baseados no core do WordPress.
      </>
    ),
  },
  {
    title: <>Cases de Sucesso</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        O Onyx Theme já é utilizado por diversos clientes, sendo alguns com milhões de visitas diárias
        e dezenas de jornalistas e editores trabalhando utilizando suas funcionalidades.
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
          <p className="hero__subtitle">Documentação para o <strong>Tema Onyx</strong> do WordPress</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Iniciar
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
