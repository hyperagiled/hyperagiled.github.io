import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "학습을 가장 작은 단위로",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        기능을 만드는 속도가 아니라, 가설을 검증하고 방향을 바꾸는 학습 속도를
        최적화합니다.
      </>
    ),
  },
  {
    title: "AI로 루프를 증강",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        탐색–설계–구현–검증 전 단계에서 AI를 활용하되, 검증 가능성과 책임은 팀이
        유지합니다.
      </>
    ),
  },
  {
    title: "재현 가능한 팀 규칙",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        프롬프트, 정의(DoD), 체크리스트, 품질 게이트를 문서로 고정해 팀의
        실행력을 누적합니다.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
