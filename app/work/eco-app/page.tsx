'use client';

import { ArrowList, List, Text, TextBlock } from '@/components/Text/Text';
import { SectionTitle } from '../layout';
import styles from '../project.module.css';
import { Browser } from '@/components/Browser/Browser';
import { ZoomableImage } from '@/components/ZoomableImage/ZoomableImage';
import { Post } from '@/components/Post/Post';
import { AccentColorContext } from '@/contexts/AccentColorContext';
import { PostInfo } from '@/components/Post/Info/PostInfo';
import postStyles from './styles.module.css';
import { PostHeader } from '@/components/Post/Header/PostHeader';
import { IPhone } from '@/components/IPhone/IPhone';
import Image from 'next/image';
import Link from 'next/link';
import MuxPlayer from '@mux/mux-player-react';

const FigureWithVideo = ({
  frameColor,
  videoSrc,
  caption,
  includeDynamicIsland = true,
  muxId
}: {
  frameColor?: string;
  videoSrc?: string;
  caption: string;
  includeDynamicIsland?: boolean;
  muxId?: string;
}) => (
  <figure>
    <IPhone frameColor={frameColor} includeDynamicIsland={includeDynamicIsland}>
      <ZoomableImage videoSrc={videoSrc} subtitle={caption} muxId={muxId} />
    </IPhone>
    <figcaption className={styles.sectionCaption}>
      <Text intensity="medium">{caption}</Text>
    </figcaption>
  </figure>
);

const FigureWithImage = ({
  frameColor,
  imageSrc,
  imageSrc2x,
  caption,
  includeDynamicIsland = true
}: {
  frameColor?: string;
  imageSrc2x: string;
  imageSrc: string;
  caption: string;
  includeDynamicIsland?: boolean;
}) => (
  <figure>
    <IPhone frameColor={frameColor} includeDynamicIsland={includeDynamicIsland}>
      <ZoomableImage
        imgSrc={imageSrc}
        imgSrc2x={imageSrc2x}
        subtitle={caption}
      />
    </IPhone>
    <figcaption className={styles.sectionCaption}>
      <Text intensity="medium">{caption}</Text>
    </figcaption>
  </figure>
);

export default function Project() {
  return (
    <Post
      title="Designing and developing the Eco App"
      subtitle="Creating a zero to one fintech product"
      prevSlug=""
      nextSlug="quora-dark-mode"
      accentRgb="6,36,224"
    >
      <AccentColorContext.Consumer>
        {(value) => (
          <>
            <PostHeader
              title="Designing and developing the Eco App"
              subtitle={`Creating a zero to one fintech product`}
              imgSrc="/project-header-eco-app.png"
              className={postStyles.header}
              imgContainerClassName={postStyles.headerImg}
              backgroundColor="6,36,224"
            />
            <div className={styles.body}>
              <div className={styles.section}>
                <PostInfo
                  items={[
                    { key: 'Company', value: 'Eco' },
                    { key: 'Year', value: '2021-2023' },
                    {
                      key: 'My role',
                      value: (
                        <>
                          Design direction
                          <br />
                          UI/UX design
                          <br />
                          SwiftUI Implementation
                        </>
                      )
                    }
                  ]}
                />
                <TextBlock>
                  <SectionTitle>Summary</SectionTitle>
                  <Text>
                    Eco launched the first version of their app in 2020 after
                    raising a funding round from a16z and others. The initial
                    version of the Eco app was a true MVP, proving out the idea
                    that a banking system where the incetives of the company
                    align with incentives of the users could work.
                  </Text>
                  <Text>
                    The MVP version of the product was a React Native app, and
                    was designed and built rapidly by a more junior team. It
                    worked, but the product experience was lacking. I was
                    brought in to help reimagine the product experience and
                    rebuild the product as a polished, native, SwiftUI app.
                  </Text>
                  <Text>
                    There is too much to cover in a single post, so I'll focus
                    below on some specific design details and my involvement.
                  </Text>
                </TextBlock>
              </div>

              <div className={styles.section}>
                <TextBlock>
                  <SectionTitle>The Helix</SectionTitle>
                  <Text>
                    Before I joined, there was some conceptual design work done
                    by{' '}
                    <a href="https://work.co/" target="_blank">
                      Work & Co.
                    </a>
                    , specifically around the helix and app navigation. The
                    helix is a concept unique to Eco, a 3D artifact which serves
                    as the home screen to the product, meant to represent your
                    financial growth over time. You can think of it as a
                    vertical bar chart where each bar represents your relative
                    wealth at that point in time. The solid bars were historical
                    balances, while the faded out bars were a projection into
                    the future.
                  </Text>
                  <Text>
                    I took this concept and designed most of the experience
                    around the helix, including animations, display logic,
                    interactions, and more. I also implemented a lot of this in
                    Swift myself. For instance, the pull to refresh animation
                    and the various "success animations" were built by me. This
                    involved learning quite a bit about SceneKit (iOS' 3D
                    renderer), particle systems, and more.{' '}
                  </Text>
                </TextBlock>
              </div>

              <section className={styles.section}>
                <div className={styles.figureGrid}>
                  <FigureWithVideo
                    frameColor="#041178"
                    videoSrc="/eco-helix.mov"
                    caption="The helix served as the user's home view. I spent a lot of time getting the transitions between the helix and neighboring views feel seamless."
                  />

                  <FigureWithVideo
                    frameColor="#041178"
                    videoSrc="/eco-helix-refresh.mov"
                    caption="I was particularly fond of the pull to refresh animation I created here, both in the interaction design and the 'ripple' effect while refreshing."
                  />
                </div>
              </section>

              <div className={styles.section}>
                <TextBlock>
                  <SectionTitle>New user experience (NUX)</SectionTitle>
                  <Text>
                    During one of our hackathons, I conceptualized and built a
                    lightweight new user experience (NUX) for Eco. We took my
                    work from the hackathon and turned it into a full-fledged
                    feature. NUX became a core part of the Eco product
                    experience, with most new features feeding back into the
                    system in some way.
                  </Text>
                  <Text>
                    NUX ultimately was a successful launch. It allowed us to
                    drop a number of required steps during onboarding and move
                    them to a post-sign up experience, increasing our deposit
                    conversion rate. In fact, prior to launch our deposit rate
                    was 2%. <b>Post launch this increased to 10%</b>, and
                    continued to trend upwards (to near 17% - for context, the
                    industry standard is around 10%).
                  </Text>
                  <Text>
                    Additional data: Plaid linking (a key metric) went from 23%
                    pre-launch to ~40% post-launch. Similarly, sign ups for an
                    "Eco Concierge" session (think: a guided onboarding by
                    someone from Eco) went from 3.6% pre-launch, to 10% post.
                  </Text>
                  <ArrowList
                    items={[
                      <Text key="1">
                        <b>Deposit rate post-launch +8%</b>.
                      </Text>,
                      <Text key="2">
                        <b>Bank-link rate post-launch +17%</b>.
                      </Text>
                    ]}
                  />
                </TextBlock>
              </div>

              <section className={styles.section}>
                <div className={styles.figureGrid}>
                  <FigureWithImage
                    frameColor="#333"
                    imageSrc="/eco-nux-profile.png"
                    imageSrc2x="/eco-nux-profile@2x.png"
                    caption="NUX was primarily completed through a user's profile view. Items could be completed inline, without needing to manually navigate back to the profile upon completion."
                    includeDynamicIsland={false}
                  />

                  <FigureWithImage
                    frameColor="#041178"
                    imageSrc="/eco-nux-home.png"
                    imageSrc2x="/eco-nux-home@2x.png"
                    caption="New users would be presented with a NUX entry point on their home view. This aggressive treatment drove most of our NUX engagement."
                    includeDynamicIsland={false}
                  />
                </div>
              </section>

              <div className={styles.section}>
                <TextBlock>
                  <SectionTitle>P2P</SectionTitle>
                  <Text>
                    I designed the experience for a peer-to-peer, Venmo-like
                    feature where you could send either USD or Eco Points to
                    other Eco users, or people off the platform. The feature was
                    designed to both get us closer to bank parity while also
                    being a growth channel.
                  </Text>
                  <Text>
                    If a user sent funds to someone not on the platform, they'd
                    be taken through a unique onboarding experience where we'd
                    dangle the pending funds as a carrot to complete sign up. We
                    saw a lot of success with this referral mechanism.
                  </Text>
                  <ArrowList
                    items={[
                      <Text key="1">
                        In the two months after launch, we saw a{' '}
                        <b>2x increase in MAU</b>.
                      </Text>
                    ]}
                  />
                </TextBlock>
              </div>

              <section className={styles.section}>
                <div className={styles.figureGrid}>
                  <FigureWithVideo
                    frameColor="#333"
                    caption="The flow for sending Points to another user on Eco."
                    includeDynamicIsland={false}
                    muxId="e00c8MAAovRRFvqypSVxEEE3s00YwWPQhOh2Fi4n7BLKA"
                  />
                  <FigureWithImage
                    frameColor="#333"
                    imageSrc="/eco-invite-pending-usd.png"
                    imageSrc2x="/eco-invite-pending-usd@2x.png"
                    caption="If you sent to someone who was not on Eco, they would be presented with a personalized onboarding which included their pending funds as an incentive to complete sign up."
                  />
                </div>
              </section>

              <div className={styles.section}>
                <TextBlock>
                  <SectionTitle>Eco Card</SectionTitle>
                  <Text>
                    I designed the visual components for Eco's initial and
                    follow up debit cards, in addition to the card experience in
                    the app itself. To reflect on various physical card designs,
                    I created a 3D viewer in three.js to get a better sense of
                    the presence of each design.
                  </Text>
                  <Text>
                    The initial card design was meant to reflect Eco's ethos at
                    that point in time: still at the R&D stage, scrappy, early,
                    etc. The second card design was meant to be more elegant,
                    evergreen, and minimal - it was also printed on a metal card
                    with a matte finish, giving it a premium feel.
                  </Text>
                </TextBlock>
              </div>

              <section className={styles.section}>
                <figure>
                  <Browser url="https://eco.com">
                    <div className={styles.video}>
                      <ZoomableImage
                        videoSrc="/eco-card-viewer.mp4"
                        subtitle="The primary entry point into the Credit summary view is via a user's dashboard."
                      />
                    </div>
                  </Browser>
                  <figcaption className={styles.sectionCaption}>
                    <Text intensity="medium">
                      The card viewer I built to preview the various Eco Card
                      designs I made.{' '}
                      <a
                        href="https://work.petelada.com/eco/build"
                        target="_blank"
                      >
                        View it here
                      </a>{' '}
                      (desktop only).
                    </Text>
                  </figcaption>
                </figure>
              </section>

              <div className={styles.section}>
                <TextBlock>
                  <SectionTitle>Eco Points Store</SectionTitle>
                  <Text>
                    I designed a Points Store experience in app where users
                    could redeem the Eco Points they accrue for things like Eco
                    Credit and "prestige" goods (Apple AirPods Max, etc).
                  </Text>
                  <ArrowList
                    items={[
                      <Text key="1">
                        <b>+21% MAU</b> after launch
                      </Text>,
                      <Text key="2">
                        <b>+212% App Installs</b> in the week immediately
                        following release
                      </Text>,
                      <Text key="3">
                        Generated <b>4.5x the support traffic</b> (generally can
                        be abstracted to product engagement).
                      </Text>
                    ]}
                  />
                  <Text>
                    Read the{' '}
                    <Link href="/work/eco-points-store">full case study</Link>{' '}
                    on this project.
                  </Text>
                </TextBlock>
              </div>

              <section className={styles.section}>
                <div className={styles.figureGrid}>
                  <FigureWithVideo
                    frameColor="#333"
                    videoSrc="/eco-drop-purchase.mp4"
                    caption="Purchasing a Drop in the Points Store. Drops occured once every two weeks."
                  />

                  <FigureWithVideo
                    frameColor="#333"
                    videoSrc="/eco-credit-summary.mp4"
                    caption="Viewing your available Eco Credit. Credit would be applied towards future purchases on Eco."
                  />
                </div>
              </section>

              <div className={styles.section}>
                <TextBlock>
                  <SectionTitle>Results</SectionTitle>
                  <Text>
                    As of writing, the Points Store is still in limited beta
                    testing and conclusive results are pending. Response has
                    been positive from users. I will update this article with
                    more data once available.
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
