import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Responsible AI Dashboard',
    Svg: require('@site/static/img/workshop-dashboard.svg').default,
    link: 'https://github.com/ruyakubu/BUILD-AzureML-workshop',
    topic: 'Documentation',
    topiclink: 'https://learn.microsoft.com/azure/machine-learning/concept-responsible-ai-dashboard?view=azureml-api-2',
    description: (
      <>
        The Responsible AI dashboard provides a single interface to help you implement Responsible AI in practice effectively and efficiently.
      </>
    ),
  },
  {
    title: 'Azure Content Safety',
    Svg: require('@site/static/img/workshop-safety.svg').default,
    link: 'https://github.com/ruyakubu/azure-content-safety-workshop',
    topic: 'Documentation',
    topiclink: 'https://learn.microsoft.com//azure/ai-services/content-safety/overview',
    description: (
      <>
        Azure AI Content Safety detects harmful user-generated and AI-generated content in applications and services
      </>
    ),
  },
  {
    title: 'Azure ML Prompt Flow',
    Svg: require('@site/static/img/workshop-prompt.svg').default,
    link: 'https://github.com/ruyakubu/prompt-flow',
    topic: 'Documentation',
    topiclink: 'https://learn.microsoft.com/azure/machine-learning/prompt-flow/overview-what-is-prompt-flow?view=azureml-api-2',
    description: (
      <>
        Prompt Flow is a tool designed to streamline the entire development cycle of AI apps powered by Large Language Models (LLMs). 
      </>
    ),
  },
];

function Feature({Svg, title, description, topic, topiclink, link}) {
  return (
    <div className={clsx('col col--4', styles.contentItem)}>
      <a href={link} target="_blank">
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
      <div className="text--center padding-horiz--md">
          <a href={topiclink} target="_blank">
              <span className="badge badge--primary">{topic}</span>
          </a>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
