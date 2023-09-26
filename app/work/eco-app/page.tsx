import { Browser } from '@/components/Browser/Browser';
import { IPhone } from '@/components/IPhone/IPhone';
import { PostHeader } from '@/components/Post/Header/PostHeader';
import { PostInfo } from '@/components/Post/Info/PostInfo';
import { Post } from '@/components/Post/Post';
import { ArrowList, Text, TextBlock } from '@/components/Text/Text';
import { ZoomableImage } from '@/components/ZoomableImage/ZoomableImage';
import Link from 'next/link';
import { SectionTitle } from '../layout';
import styles from '../project.module.css';
import headerImage from './project-header-eco-app.png';
import postStyles from './styles.module.css';
import { Metadata } from 'next';
import { Button } from '@/components/Button/Button';

export const metadata: Metadata = {
  title:
    'Pete Lada | Product design generalist | Designing and developing the Eco App',
  openGraph: {
    images: ['/meta-eco-app.jpg']
  }
};

const FigureWithVideo = ({
  frameColor,
  videoSrc,
  caption,
  includeDynamicIsland = true,
  muxId,
  posterUrl
}: {
  frameColor?: string;
  videoSrc?: string;
  caption: string;
  includeDynamicIsland?: boolean;
  muxId?: string;
  posterUrl?: string;
}) => (
  <figure>
    <IPhone frameColor={frameColor} includeDynamicIsland={includeDynamicIsland}>
      <ZoomableImage
        videoSrc={videoSrc}
        subtitle={caption}
        muxId={muxId}
        posterUrl={posterUrl}
      />
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
  includeDynamicIsland = true,
  aspectRatio
}: {
  frameColor?: string;
  imageSrc2x: string;
  imageSrc: string;
  caption: string;
  includeDynamicIsland?: boolean;
  aspectRatio?: string;
}) => (
  <figure>
    <IPhone frameColor={frameColor} includeDynamicIsland={includeDynamicIsland}>
      <ZoomableImage
        imgSrc={imageSrc}
        imgSrc2x={imageSrc2x}
        subtitle={caption}
        aspectRatio={aspectRatio}
      />
    </IPhone>
    <figcaption className={styles.sectionCaption}>
      <Text intensity="medium">{caption}</Text>
    </figcaption>
  </figure>
);

export default function Project() {
  const accent = '6,36,224';

  return (
    <Post
      title="Designing and developing the Eco App"
      subtitle="Creating a zero to one fintech product"
      prevSlug=""
      nextSlug="eco-points-store"
      accentRgb={accent}
      resources={[
        {
          title: "Techcrunch article on Eco's launch",
          url: 'https://techcrunch.com/2021/03/05/eco-raises-26m-in-a16z-led-round-to-scale-its-digital-cryptocurrency-platform/'
        },
        {
          title: "Bloomberg article on Eco's launch",
          url: 'https://www.bloomberg.com/news/articles/2021-07-27/a16z-backed-crypto-firm-eco-raises-60-million-in-funding-round'
        }
      ]}
    >
      <>
        <PostHeader
          title="Designing and developing the Eco App"
          subtitle={`Creating a zero to one fintech product`}
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
                version of the Eco app was a true MVP, proving out the idea that
                a banking system where the incetives of the company align with
                incentives of the users could work.
              </Text>
              <Text>
                The MVP version of the product was a React Native app, and was
                designed and built rapidly by a more junior team. It worked, but
                the product experience was lacking. I was brought in to help
                reimagine the product experience and rebuild the product as a
                polished, native, SwiftUI app.
              </Text>
              <Text>
                There is too much to cover in a single post, so I'll focus below
                on some specific design details and my involvement.
              </Text>
            </TextBlock>
          </div>

          <div className={styles.section}>
            <TextBlock>
              <SectionTitle>The Helix</SectionTitle>
              <Text>
                Before I joined, there was some conceptual design work done by{' '}
                <a href="https://work.co/" target="_blank">
                  Work & Co.
                </a>
                , specifically around the helix and app navigation. The helix is
                a concept unique to Eco, a 3D artifact which serves as the home
                screen to the product, meant to represent your financial growth
                over time. You can think of it as a vertical bar chart where
                each bar represents your relative wealth at that point in time.
                The solid bars were historical balances, while the faded out
                bars were a projection into the future.
              </Text>
              <Text>
                I took this concept and designed most of the experience around
                the helix, including animations, display logic, interactions,
                and more. I also implemented a lot of this in Swift myself. For
                instance, the pull to refresh animation and the various "success
                animations" were built by me. This involved learning quite a bit
                about SceneKit (iOS' 3D renderer), particle systems, and more.{' '}
              </Text>
            </TextBlock>
          </div>

          <section className={`${styles.section} ${styles.wide}`}>
            <div className={styles.figureGrid}>
              <FigureWithVideo
                frameColor="#041178"
                muxId="RCxfow1PhIf872S3jkzwlokhVzW1OMG6RxYt4g25G4Y"
                caption="The helix served as the user's home view. I spent a lot of time getting the transitions between the helix and neighboring views feel seamless."
              />

              <FigureWithVideo
                frameColor="#041178"
                muxId="Vy4eW0201dK3bis4PTwIDEHHVuqvZpzwCfLDg3sYwFg5Q"
                caption="I was particularly fond of the pull to refresh animation I created here, both in the interaction design and the 'ripple' effect while refreshing."
              />
            </div>
          </section>

          <div className={styles.section}>
            <TextBlock>
              <SectionTitle>New user experience (NUX)</SectionTitle>
              <Text>
                During one of our hackathons, I conceptualized and built a
                lightweight new user experience (NUX) for Eco. We took my work
                from the hackathon and turned it into a full-fledged feature.
                NUX became a core part of the Eco product experience, with most
                new features feeding back into the system in some way.
              </Text>
              <Text>
                NUX ultimately was a successful launch. It allowed us to drop a
                number of required steps during onboarding and move them to a
                post-sign up experience, increasing our deposit conversion rate.
                In fact, prior to launch our deposit rate was 2%.{' '}
                <b>Post launch this increased to 10%</b>, and continued to trend
                upwards (to near 17% - for context, the industry standard is
                around 10%).
              </Text>
              <Text>
                Additional data: Plaid linking (a key metric) went from 23%
                pre-launch to ~40% post-launch. Similarly, sign ups for an "Eco
                Concierge" session (think: a guided onboarding by someone from
                Eco) went from 3.6% pre-launch, to 10% post.
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

          <section className={`${styles.section} ${styles.wide}`}>
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
                I designed the experience for a peer-to-peer, Venmo-like feature
                where you could send either USD or Eco Points to other Eco
                users, or people off the platform. The feature was designed to
                both get us closer to bank parity while also being a growth
                channel.
              </Text>
              <Text>
                If a user sent funds to someone not on the platform, they'd be
                taken through a unique onboarding experience where we'd dangle
                the pending funds as a carrot to complete sign up. We saw a lot
                of success with this referral mechanism.
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

          <section className={`${styles.section} ${styles.wide}`}>
            <div className={styles.figureGrid}>
              <FigureWithVideo
                frameColor="#333"
                caption="The flow for sending Points to another user on Eco."
                includeDynamicIsland={false}
                muxId="02wDPKX6kBZ01biwERkEYmefGB16ghIKM4AfvrEDX66VM"
              />
              <FigureWithImage
                frameColor="#333"
                imageSrc="/eco-invite-pending-usd.png"
                imageSrc2x="/eco-invite-pending-usd@2x.png"
                aspectRatio="383/852"
                caption="If you sent to someone who was not on Eco, they would be presented with a personalized onboarding which included their pending funds as an incentive to complete sign up."
              />
            </div>
          </section>

          <div className={styles.section}>
            <TextBlock>
              <SectionTitle>Eco Card</SectionTitle>
              <Text>
                I designed the visual components for Eco's initial and follow up
                debit cards, in addition to the card experience in the app
                itself. To reflect on various physical card designs, I created a
                3D viewer in three.js to get a better sense of the presence of
                each design.
              </Text>
              <Text>
                The initial card design was meant to reflect Eco's ethos at that
                point in time: still at the R&D stage, scrappy, early, etc. The
                second card design was meant to be more elegant, evergreen, and
                minimal - it was also printed on a metal card with a matte
                finish, giving it a premium feel.
              </Text>
            </TextBlock>
          </div>

          <section className={`${styles.section} ${styles.wide}`}>
            <figure>
              <Browser url="https://eco.com">
                <div className={styles.video}>
                  <ZoomableImage
                    muxId="01DnQF5EDfE01xolniDhoVhwLMtUjJJ6UaT43zX01EfEyo"
                    subtitle="The card viewer I built to preview the various Eco Card
                        designs I made."
                    aspectRatio="19/15"
                  />
                </div>
              </Browser>
              <figcaption className={styles.sectionCaption}>
                <Text intensity="medium">
                  The card viewer I built to preview the various Eco Card
                  designs I made.{' '}
                  <a href="https://work.petelada.com/eco/build" target="_blank">
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
                I designed a Points Store experience in app where users could
                redeem the Eco Points they accrue for things like Eco Credit and
                "prestige" goods (Apple AirPods Max, etc).
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
              <Text>
                Read the{' '}
                <Button
                  text="Full case study"
                  includeArrow
                  href="/work/eco-points-store"
                />{' '}
                on this project.
              </Text>
            </TextBlock>
          </div>

          <section className={`${styles.section} ${styles.wide}`}>
            <div className={styles.figureGrid}>
              <FigureWithVideo
                frameColor="#333"
                muxId="M00maw02tJ1QVfSH8L4DGeygUDmr6VjTZ6rj8BvSMH01W00"
                caption="Purchasing a Drop in the Points Store. Drops occured once every two weeks."
              />

              <FigureWithVideo
                frameColor="#333"
                muxId="iEpHe7FwRdGGjCVR6FekKi100AzrsrBW5t7o7wbPx8RI"
                caption="Viewing your available Eco Credit. Credit would be applied towards future purchases on Eco."
              />
            </div>
          </section>

          <div className={styles.section}>
            <TextBlock>
              <SectionTitle>Marketing site</SectionTitle>
              <Text>
                When we moved the app to use a traditional USD backend, we also
                spent a few cycles creating a new marketing site to better
                demonstrate the product. This included dramatically simpling the
                pitch, both in terms of language and presentation. The site was
                essentially a single page, with a clear call to action. The site
                converted dramatically better than the previous incarnation.
              </Text>
              <Text>
                I designed, built, and deployed the site. I was especially proud
                of the various "build-in" animations I constructed, entirely in
                JS/CSS.
              </Text>
            </TextBlock>
          </div>

          <section className={`${styles.section} ${styles.fullWidth}`}>
            <figure>
              <Browser url="https://ecoapp.com">
                <div className={styles.video}>
                  <ZoomableImage
                    muxId="7apnHDp4dJjKkun01D3WlBA21j2ihVoTT400e1KbM2b00k"
                    subtitle="A scrollthrough of the homepage for the Eco App. I designed, built, and deployed the site (nextjs/vercel)."
                    aspectRatio="747/482"
                  />
                </div>
              </Browser>
              <figcaption className={styles.sectionCaption}>
                <Text intensity="medium">
                  A scrollthrough of the homepage for the Eco App. I designed,
                  built, and deployed the site (nextjs/vercel).{' '}
                </Text>
              </figcaption>
            </figure>
          </section>
        </div>
      </>
    </Post>
  );
}
