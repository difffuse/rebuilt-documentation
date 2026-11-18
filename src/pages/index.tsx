import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Home(): ReactNode {
  return (
    <Layout title="Documentation" description="Rebuilt documentation by Difffuse Studio">
      <header className={styles.heroBanner}>
        <div className="container">
          <Heading as="h1" className="hero__title">REBUILT</Heading>
          <p className="hero__subtitle">Retopo · UV · Bake</p>
          <Link className="button button--secondary button--lg" to="/docs/intro">Documentation</Link>
        </div>
      </header>
      <main className="container padding-vert--xl">
        <div className="row">
          {[
            ['Retopology', 'Prepare meshes for the next stage of your workflow.'],
            ['UV & Bake', 'Unwrap UVs and bake texture maps inside Blender.'],
            ['Export', 'Prepare assets for Unity, Unreal Engine and Godot.'],
          ].map(([title, description]) => (
            <section key={title} className="col col--4 text--center padding-horiz--md">
              <Heading as="h2">{title}</Heading><p>{description}</p>
            </section>
          ))}
        </div>
      </main>
    </Layout>
  );
}
