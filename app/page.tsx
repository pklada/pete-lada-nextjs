import { Text, TextBlock } from '@/components/Text/Text';
import styles from './home.module.css';

import EcoAppCover from '@/app/work/eco-app/cover.png';
import PointsStoreCover from '@/app/work/eco-points-store/cover.png';
import GBScheduleCover from '@/app/work/guidebook-schedule-redesign/cover.png';
import GBSpacesCover from '@/app/work/guidebook-spaces/cover.png';
import QuoraDarkModeCover from '@/app/work/quora-dark-mode/cover.png';
import QuoraMessagesCover from '@/app/work/quora-messages/cover.png';
import { ProjectCard } from '@/components/ProjectCard/ProjectCard';

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <TextBlock>
        <Text size="large" weight="bold">
          Selected Work
        </Text>
        <Text intensity="medium">
          Projects which highlight some of the more interesting challenges I've
          worked on.
        </Text>
      </TextBlock>
      <div className={styles.grid}>
        <ProjectCard
          title="Eco App"
          subtitle="Designing and developing the Eco App"
          image={EcoAppCover}
          company="Eco"
          year="2021-2023"
          slug="eco-app"
        />

        <ProjectCard
          title="Eco Points Store"
          subtitle="Closing the loop on Eco Points"
          image={PointsStoreCover}
          company="Eco"
          year="2023"
          slug="eco-points-store"
        />

        <ProjectCard
          title="Quora Messages"
          subtitle="Improving a complex multiplatform communication tool"
          image={QuoraMessagesCover}
          company="Quora"
          year="2021"
          slug="quora-messages"
        />

        <ProjectCard
          title="Quora Dark Mode"
          subtitle="Adding themeability to a massive consumer platform"
          image={QuoraDarkModeCover}
          company="Quora"
          year="2020"
          slug="quora-dark-mode"
        />

        <ProjectCard
          title="Guidebook Schedule Redesign"
          subtitle="Improving a feature used by millions"
          image={GBScheduleCover}
          company="Guidebook"
          year="2019"
          slug="guidebook-schedule-redesign"
        />

        <ProjectCard
          title="Guidebook Spaces"
          subtitle="Adding a new layer to the Guidebook platform"
          image={GBSpacesCover}
          company="Guidebook"
          year="2018"
          slug="guidebook-spaces"
        />

        {/* <ProjectCard
          title='Guidebook Homepage Redesign'
          subtitle="Rethinking Guidebook's home on the web"
          imgSrc="https://work.petelada.com/assets/images/project-cover-homepage-redesign.png"
          company='Guidebook'
          year='2019'
          slug='quora-messages'
        />

        <ProjectCard
          title='Guidebook UI Icon Set'
          subtitle="Standardizing Guidebook's iconography"
          imgSrc="https://work.petelada.com/assets/images/project-cover-icons.png"
          company='Guidebook'
          year='2017-2020'
          slug='quora-messages'
        />

        <ProjectCard
          title='Guidebook Beacon UI Kit'
          subtitle="Formalizing Guidebook's app UI"
          imgSrc="https://work.petelada.com/assets/images/project-cover-beacon.png"
          company='Guidebook'
          year='2017-2020'
          slug='quora-messages'
        /> */}
      </div>
    </div>
  );
}
