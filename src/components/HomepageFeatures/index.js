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
        To support AI practitioners, the Responsible AI dashboard enables debugging capabilities that can be used throughout the machine learning lifecycle.  This lesson teaches how to optimize ML models for fairness, explainability, and identify other responsible AI issues.
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
        When working with LLMs and generative AI solutions, the responses are dynamic and sometimes unpredictable. This lesson illustrates how to use Content Safety to add safety guardrails to detect and prevent offensive or undesirable Prompts and Outputs from the model.
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
        Prompt Flow is a tool designed to streamline the development AI apps powered by LLMs. This lesson will show how to create visual graphs to use LLMs, prompts, embedding your data, vector indexes, and Python tools. Finally, users will learn how to evaluate the AI flow for groundedness, accuracy, relevance etc.
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
