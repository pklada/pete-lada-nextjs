import { Browser } from '@/components/Browser/Browser';
import { IPhone } from '@/components/IPhone/IPhone';
import { PostHeader } from '@/components/Post/Header/PostHeader';
import { PostInfo } from '@/components/Post/Info/PostInfo';
import { Post } from '@/components/Post/Post';
import { ArrowList, Text, TextBlock } from '@/components/Text/Text';
import { ZoomableImage } from '@/components/ZoomableImage/ZoomableImage';
import { SectionTitle } from '../layout';
import styles from '../project.module.css';
import headerImage from './project-header-eco-points-store.png';
import postStyles from './styles.module.css';

export default function Project() {
  const accent = '13,87,74';

  return (
    <Post
      title="Building the Eco Points Store"
      subtitle='"Closing the loop" on Eco Points'
      prevSlug="eco-app"
      nextSlug="quora-messages"
      accentRgb={accent}
    >
      <>
        <PostHeader
          title="Building the Eco Points Store"
          subtitle={`"Closing the loop" on Eco Points`}
          className={postStyles.header}
          imgContainerClassName={postStyles.headerImg}
          backgroundColor={accent}
          image={headerImage}
        />
        <div className={styles.body}>
          <div className={styles.section}>
            <PostInfo
              items={[
                { key: 'Company', value: 'Eco' },
                { key: 'Year', value: '2023' },
                {
                  key: 'My role',
                  value: (
                    <>
                      Design direction
                      <br />
                      UI/UX design
                      <br />
                      Implementation
                    </>
                  )
                }
              ]}
            />
            <TextBlock>
              <SectionTitle>Summary</SectionTitle>
              <Text>
                I pushed for prioritization and designed the Eco Points Store,
                where Eco users can spend the points they earn on the platform.
              </Text>
              <SectionTitle>Background</SectionTitle>
              <Text>
                To address churn and growth challenges, we conducted user
                research to determine where Eco as a product was falling short.
                The ability to derive value from Eco Points was frequently
                cited. I pushed the executive team to prioritize the ability to
                spend Eco Points in product, and designed the experience for two
                programs: Point Drops and Eco Credit.
              </Text>
            </TextBlock>
          </div>

          <figure className={`${styles.section} ${styles.fullWidth}`}>
            <Browser url="https://docs.google.com">
              <div className={styles.image}>
                <ZoomableImage
                  imgSrc="/eco-points-feedback.jpg"
                  subtitle="Old Quora messages vs. the new redesign."
                />
              </div>
            </Browser>
            <figcaption className={styles.sectionCaption}>
              <Text intensity="medium">
                A sampling of feedback we gathered from user studies. In this
                batch, nearly 50% cited Eco Points (lack of) value as the reason
                they churned.
              </Text>
            </figcaption>
          </figure>

          <div className={styles.section}>
            <TextBlock>
              <SectionTitle>Getting buy-in</SectionTitle>
              <Text>
                Since joining Eco, I felt strongly about introducing a way to
                spend points as soon as possible. Intuitively, it felt like a
                missing piece of the experience - users would accumulate points
                on the platform for various actions, but had no ability to
                redeem them in a meaningful way. We played around the edges, but
                never allocated resources to the initiative, instead focusing on
                features to reach bank-parity.
              </Text>
              <Text>
                After conducting a series of research studies to address churn
                and growth concerns, we learned the lack of point spend programs
                was becoming increasingly problematic.{' '}
                <b>
                  Users wanted a way to spend the Points they were accruing
                  &mdash; trust in Eco was in jeopardy.
                </b>
              </Text>
              <Text>
                Proactively, I put together a set of rough designs on a point
                store experience and pitched the programs to the executive team
                via a series of Loom recordings (
                <a href="https://www.loom.com/share/311a47696d1147b486cffcb534f80f42?sid=4f78a0fc-f5ee-4e8d-8fe2-21823546cf19">
                  example
                </a>
                ). Ultimately, the user research results combined with my
                product direction was enough to give our team the green light to
                devote resources to the problem.
              </Text>
            </TextBlock>
          </div>

          <div className={styles.section}>
            <TextBlock>
              <SectionTitle>Point-spend programs</SectionTitle>
              <Text>
                We took my initial concepts and pared them down to two initial
                programs: <b>Points Drops</b> and <b>Eco Credit</b>. We felt
                this was broad enough for an MVP, while being scoped narrowly
                enough to execute on quickly. They also had the benefit of each
                addressing a pillar of one of Eco's core philosophies:{' '}
                <em>
                  <b>"head in the clouds, feet on the ground"</b>
                </em>
                . Drops were meant to be aspirational and magical{' '}
                <i>("head in the clouds")</i> while credit was meant to be
                grounded and utilitarian <i>("feet on the ground")</i>.
              </Text>
            </TextBlock>
          </div>

          <div className={styles.section}>
            <TextBlock>
              <SectionTitle>Points Drops</SectionTitle>
              <Text>
                Points Drops is a program where a luxary, rare, or otherwise
                compelling item (think AirPods Max, Taylor Swift tickets, etc)
                is "dropped" at a regular cadence. The quantity is limited, but
                the "exchange rate" of Points to USD is far and away the highest
                on the platform. The program is designed to drive urgency and
                virality to the platform &mdash;{' '}
                <i>"what is the drop this week?"</i>,{' '}
                <i>"should I buy this drop, or wait for the next?"</i>,{' '}
                <i>"I need to tell people about this"</i> &mdash; and gamify the
                point-spend experience in a unique way.
              </Text>
              <Text>I think of it as a modern twist on Woot.</Text>
            </TextBlock>
          </div>

          <section className={`${styles.section} ${styles.wide}`}>
            <div className={styles.figureGrid}>
              <figure>
                <IPhone>
                  <ZoomableImage
                    muxId="iEpHe7FwRdGGjCVR6FekKi100AzrsrBW5t7o7wbPx8RI"
                    subtitle="The primary entry point into the Credit summary view is via a user's dashboard."
                  />
                </IPhone>
                <figcaption className={styles.sectionCaption}>
                  <Text intensity="medium">
                    The purchase flow for a drop. I designed and built a bunch
                    of custom interactions and animations for this flow.
                  </Text>
                </figcaption>
              </figure>
              <figure>
                <IPhone>
                  <ZoomableImage
                    imgSrc="/eco-drop-story.jpg"
                    subtitle="We created a story for each new drop. The user would also be notified via email and push notif."
                  />
                </IPhone>
                <figcaption className={styles.sectionCaption}>
                  <Text intensity="medium">
                    We created a story for each new drop. The user would also be
                    notified via email and push notif.
                  </Text>
                </figcaption>
              </figure>
            </div>
          </section>

          <div className={styles.section}>
            <TextBlock>
              <SectionTitle>Eco Credit</SectionTitle>
              <Text>
                Credit, in contrast to Drops, is meant to be much more
                utilitarian and predictable. This program wraps the ability to
                sell your points for USD in a layer which encourages additional
                transacting on the product. Instead of directly selling Points,
                you instead{' '}
                <b>
                  <i>buy credit towards future transactions on Eco</i>
                </b>
                . Once transacted, you earn a rebate directly into your Eco
                account of the amount spent. This program is meant to be a
                reliable, evergreen way to spend your Points - the trade off
                being a lower exchange rate. Wrapping the program in future
                transactions creates a compounding effect on engagement:
                spending Points requires transacting, transacting earns more
                Points.
              </Text>
            </TextBlock>
          </div>

          <section className={`${styles.section} ${styles.wide}`}>
            <div className={styles.figureGrid}>
              <figure>
                <IPhone>
                  <ZoomableImage
                    muxId="qKgIxH94dErBeKxKa6IkzfR1yuufcw5hyCwoV9fQQkY"
                    subtitle="The primary entry point into the Credit summary view is via a user's dashboard."
                  />
                </IPhone>
                <figcaption className={styles.sectionCaption}>
                  <Text intensity="medium">
                    The primary entry point into the Credit summary view is via
                    a user's dashboard.
                  </Text>
                </figcaption>
              </figure>
              <figure>
                <IPhone>
                  <ZoomableImage
                    muxId="a1gCeaF7TyEpssT5aKfUYGcrWeqMHegq2bRuY00XNeuA"
                    subtitle="Credit can 'sell out' each month. This gives Eco some protection and prevents mass points liquidation."
                  />
                </IPhone>
                <figcaption className={styles.sectionCaption}>
                  <Text intensity="medium">
                    Credit can "sell out" each month. This gives Eco some
                    protection and prevents mass points liquidation.
                  </Text>
                </figcaption>
              </figure>
              <figure>
                <IPhone>
                  <ZoomableImage
                    muxId="602rRJXOoabieD8W2bqkgTWvwNumZigTalIvIziT7o7E"
                    subtitle="Purchasing credit is a simple flow, which deducts Points from a user's Point balance."
                  />
                </IPhone>
                <figcaption className={styles.sectionCaption}>
                  <Text intensity="medium">
                    Purchasing credit is a simple flow, which deducts Points
                    from a user's Point balance.
                  </Text>
                </figcaption>
              </figure>
              <figure>
                <IPhone>
                  <ZoomableImage
                    muxId="MtZ4VYv6KcgLn2VoufJK8S14YXSz01lmLIJvzxP2KEHI"
                    subtitle="Credit is represented in the UI with a purple treatment, and the credit icon."
                  />
                </IPhone>
                <figcaption className={styles.sectionCaption}>
                  <Text intensity="medium">
                    Credit is represented in the UI with a purple treatment, and
                    the credit icon.
                  </Text>
                </figcaption>
              </figure>
            </div>
          </section>

          <div className={styles.section}>
            <TextBlock>
              <SectionTitle>Driving adoption</SectionTitle>
              <Text>
                To make new and existing users aware of the program, we
                implemented a series of promotional items which I designed. We
                sent out a series of emails leading up to launch (example below)
                and introduced a new promotional app-launch sheet. We also sent
                a story (Eco's version of an interactive notification) to all
                users for the first drop, as well as a video story promoting the
                program in general.
              </Text>
            </TextBlock>
          </div>

          <section className={`${styles.section} ${styles.wide}`}>
            <div className={styles.figureGrid}>
              <figure>
                <IPhone>
                  <ZoomableImage
                    imgSrc="/eco-points-store-sheet.jpg"
                    imgSrc2x="/eco-points-store-sheet@2x.jpg"
                    subtitle="A promotional sheet we'd show to new and existing users when they entered Eco post-launch."
                  />
                </IPhone>
                <figcaption className={styles.sectionCaption}>
                  <Text intensity="medium">
                    A promotional sheet we'd show to new and existing users when
                    they entered Eco post-launch.
                  </Text>
                </figcaption>
              </figure>
              <figure>
                <IPhone>
                  <ZoomableImage
                    videoSrc="/eco-points-store-email.mp4"
                    subtitle="One of the promotional emails we sent for the Points Store launch. I also built and designed Eco's entire email system."
                  />
                </IPhone>
                <figcaption className={styles.sectionCaption}>
                  <Text intensity="medium">
                    One of the promotional emails we sent for the Points Store
                    launch. I also built and designed Eco's entire email system.
                  </Text>
                </figcaption>
              </figure>
            </div>
          </section>

          <div className={styles.section}>
            <TextBlock>
              <SectionTitle>Results</SectionTitle>
              <Text>
                As of writing, the Points store is still brand new, having been
                released only 2 weeks prior. Early signals are extremely
                positive though, and solidify our decision to put time and
                development effort into the launch. Some early results:
              </Text>
              <ArrowList
                items={[
                  <Text key="1">
                    <b>+21% MAU</b> after launch
                  </Text>,
                  <Text key="2">
                    <b>+212% App Installs</b> in the week immediately following
                    release
                  </Text>,
                  <Text key="3">
                    Generated <b>4.5x the support traffic</b> (generally can be
                    abstracted to product engagement).
                  </Text>
                ]}
              />
            </TextBlock>
          </div>
        </div>
      </>
    </Post>
  );
}
