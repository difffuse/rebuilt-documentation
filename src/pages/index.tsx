import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

export default function Home() {
  return <Layout title="Documentation" description="Learn Rebuilt for Blender: retopology, UVs, baking and export to Unity, Unreal and Godot.">
    <header className={styles.hero}>
      <h1 className="sr-only">Rebuilt — Retopo, Unwrap, Bake</h1>
      <img className={styles.artwork} src={useBaseUrl('/img/rebuilt-hero.jpg')} alt="" fetchPriority="high" />
    </header>
    <main className={`container ${styles.main}`}>
      <div className={styles.sectionIntro}>
        <h2>One model. A complete workflow.</h2>
        <p>Your guide from the first rebuild to the final export.</p>
        <div className={styles.actions}>
          <Link className={`button button--lg ${styles.cta}`} to="/docs/intro">Documentation</Link>
          <Link className={styles.quick} to="/docs/quick-start">Start with your first asset</Link>
        </div>
      </div>
      <div className={styles.features}>
        {[['01','Retopology','Build a lighter mesh and review its shape and geometry.','/docs/retopology'],['02','UVs & baking','Create seams, pack UVs and transfer the source detail to textures.','/docs/unwrap'],['03','Export','Prepare the finished asset for Unity, Unreal or Godot.','/docs/export']].map(([number,title,description,to])=><Link key={number} className={styles.feature} to={to}><span className={styles.number}>{number}</span><h3>{title} <span aria-hidden="true">↗</span></h3><p>{description}</p></Link>)}
      </div>
      <div className={styles.getStarted}><div><h2>New to Rebuilt?</h2><p>Install your extension, choose a mesh and make your first asset.</p></div><Link className="button button--secondary button--lg" to="/docs/installation">Installation guide →</Link></div>
    </main>
  </Layout>;
}
