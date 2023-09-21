'use client';

import { Browser } from '@/components/Browser/Browser';
import { PostInfo } from '@/components/Post/Info/PostInfo';
import { Post } from '@/components/Post/Post';
import { ArrowList, List, Text, TextBlock } from '@/components/Text/Text';
import { ZoomableImage } from '@/components/ZoomableImage/ZoomableImage';
import { AccentColorContext } from '@/contexts/AccentColorContext';
import { SectionTitle } from '../layout';
import styles from '../project.module.css';
import postStyles from './styles.module.css';
import { PostHeader } from '@/components/Post/Header/PostHeader';
import HeaderImage from './header-image.png';

export default function Project() {
  return (
    <Post
      title="Quora Messages Redesign"
      subtitle="Improving a complex multiplatform communication tool"
      prevSlug=""
      nextSlug="quora-dark-mode"
      accentRgb="185, 43, 39"
    >
      <AccentColorContext.Consumer>
        {(value) => (
          <>
            <PostHeader
              title="Quora Messages Redesign"
              subtitle={`Improving a complex multiplatform communication tool`}
              className={postStyles.header}
              imgContainerClassName={postStyles.headerImg}
              backgroundColor={value.rgb}
              image={HeaderImage}
            />
            <div className={styles.body}>
              <div className={styles.section}>
                <PostInfo
                  items={[
                    { key: 'Company', value: 'Quora' },
                    { key: 'Year', value: '2021' },
                    {
                      key: 'My role',
                      value: (
                        <>
                          Design direction
                          <br />
                          Product management
                          <br />
                          UI/UX design
                          <br />
                          Front-end implementation
                        </>
                      )
                    }
                  ]}
                />
                <TextBlock>
                  <SectionTitle>Summary</SectionTitle>
                  <Text>
                    I redesigned Quora's messaging system and helped implement
                    the front end in React.
                  </Text>
                  <SectionTitle>Background</SectionTitle>
                  <Text>
                    Midway through Quora's React migration, I was asked to lead
                    design on migrating the messages product from Webnode
                    (Quora's proprietary front-end framework) to React. While
                    messaging is not a core feature of Quora, it is quite
                    heavily used, with nearly 10 million messages sent per week.
                  </Text>
                  <Text>
                    Initially, the goal was simply to migrate the messages
                    product in its current form, without any changes to behavior
                    or functionality. When I joined the project, I pushed hard
                    to use this as an opportunity to overhaul the messages
                    feature - bringing it closer to parity with other major
                    social internet products.
                  </Text>
                </TextBlock>
              </div>

              <figure className={`${styles.section} ${styles.fullWidth}`}>
                <div className={`${styles.image} ${styles.frameless}`}>
                  <ZoomableImage
                    imgSrc="/quora-messages-comparison.png"
                    imgSrc2x="/quora-messages-comparison@2x.png"
                    subtitle="Old Quora messages vs. the new redesign."
                  />
                </div>
                <figcaption className={styles.sectionCaption}>
                  <Text intensity="medium">
                    Old Quora messages vs. the new redesign.
                  </Text>
                </figcaption>
              </figure>

              <div className={styles.section}>
                <TextBlock>
                  <SectionTitle>Specific problem areas</SectionTitle>
                  <ArrowList
                    items={[
                      <>
                        There was no dedicated messaging page on desktop.
                        Messages always opened in an overlay, which provided
                        easy access but made navigating the messages system as a
                        power user frustrating.
                      </>,
                      <>
                        The messages inbox was a separate view from the message
                        thread on desktop. This made navigating between threads
                        more frictional than needed.
                      </>,
                      <>
                        Generally, performance was pretty poor. Sending a
                        message would send a full page reload. Some of this
                        would be improved “automatically” with React, but there
                        was room to make our message system feel more native.
                      </>,
                      <>The UI felt relatively outdated.</>
                    ]}
                  />
                  <Text>
                    Ultimately, I was successful in convincing leadership that
                    an overhaul was necessary. I worked with a small team of
                    engineers to fix the issues mentioned above, and implement a
                    smoother, more responsive messaging system. This included
                    moving messages to its own dedicated page on desktop,
                    including a two-column inbox system. We added a messages
                    dock on desktop as well, which persisted on every page, to
                    continue to allow the quick ease of access which the overlay
                    previously provided. We introduced live-updating of message
                    threads, so sending and receiving messages didn’t require a
                    full page refresh.
                  </Text>
                </TextBlock>
              </div>

              <figure className={`${styles.section} ${styles.fullWidth}`}>
                <Browser>
                  <div className={styles.video}>
                    <ZoomableImage
                      videoSrc="/quora-messages-dock.mov"
                      subtitle="The desktop messages dock in use."
                    />
                  </div>
                </Browser>
                <figcaption className={styles.sectionCaption}>
                  <Text intensity="medium">
                    The desktop messages dock in use.
                  </Text>
                </figcaption>
              </figure>

              <div className={styles.section}>
                <TextBlock>
                  <SectionTitle>Results</SectionTitle>
                  <Text>
                    Results were positive, particularly on desktop where the
                    bulk of changes were made. We saw messages sent increase by
                    20% on desktop during the initial migration, and another 20%
                    when we introduced the dock (the dock also increased
                    messages thread started by ~30%). The screenshots below are
                    taken from Scientist, Quora's internal experiment analysis
                    tool.
                  </Text>
                </TextBlock>
              </div>

              <figure
                className={`${styles.section} ${styles.fullWidth} ${styles.scrolls}`}
              >
                <div>
                  <div className={styles.image}>
                    <img src="/quora-message-migration-results.jpg" />
                  </div>
                </div>
                <figcaption className={styles.sectionCaption}>
                  <Text intensity="medium">
                    Results from the initial React migration + redesign.
                  </Text>
                </figcaption>
              </figure>

              <figure
                className={`${styles.section} ${styles.fullWidth} ${styles.scrolls}`}
              >
                <div>
                  <div className={styles.image}>
                    <img src="/quora-message-migration-results-2.jpg" />
                  </div>
                </div>
                <figcaption className={styles.sectionCaption}>
                  <Text intensity="medium">
                    Results from the subsequent desktop messages dock
                    experiment.
                  </Text>
                </figcaption>
              </figure>

              <div className={styles.section}>
                <TextBlock>
                  <Text>
                    In the end, this was a successful migration which resulted
                    in an opportunity to modernize a non-mission-critical
                    feature, in which design played a key role in both pushing
                    for change and leading implementation.
                  </Text>
                </TextBlock>
              </div>
            </div>
          </>
        )}
      </AccentColorContext.Consumer>
    </Post>
  );
}
