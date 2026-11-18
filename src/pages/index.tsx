import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

export default function Home() {
  return <Layout title="Documentation" description="Learn Rebuilt for Blender: retopology, UVs, baking and export to Unity, Unreal and Godot.">
    <header className={styles.hero}>
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>DIFFFUSE STUDIO · BLENDER EXTENSION</p>
          <h1>Rebuilt</h1>
          <p className={styles.tagline}>Retopo · UV · Bake</p>
          <p className={styles.description}>Turn complex models into clean production assets.<br/>Your guide from the first rebuild to the final export.</p>
          <Link className={`button button--lg ${styles.cta}`} to="/docs/intro">Documentation <span aria-hidden="true">→</span></Link>
          <Link className={styles.quick} to="/docs/quick-start">Start with your first asset</Link>
        </div>
        <img className={styles.buddha} src={useBaseUrl('/img/buddha-source.png')} alt="The detailed Buddha source model used throughout this guide" width="1000" height="1000"/>
      </div>
    </header>
    <main className={`container ${styles.main}`}>
      <div className={styles.sectionIntro}><h2>One model. A complete workflow.</h2><p>Follow the Buddha example, or use your own scan, sculpt or detailed mesh.</p></div>
      <div className={styles.features}>
        {[['01','Retopology','Build a lighter mesh and review its shape and geometry.','/docs/retopology'],['02','UVs & baking','Create seams, pack UVs and transfer the source detail to textures.','/docs/unwrap'],['03','Export','Prepare the finished asset for Unity, Unreal or Godot.','/docs/export']].map(([number,title,description,to])=><Link key={number} className={styles.feature} to={to}><span className={styles.number}>{number}</span><h3>{title} <span aria-hidden="true">↗</span></h3><p>{description}</p></Link>)}
      </div>
      <div className={styles.getStarted}><div><h2>New to Rebuilt?</h2><p>Install your extension, choose a mesh and make your first asset.</p></div><Link className="button button--secondary button--lg" to="/docs/installation">Installation guide →</Link></div>
    </main>
  </Layout>;
}
