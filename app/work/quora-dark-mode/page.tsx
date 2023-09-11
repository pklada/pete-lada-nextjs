"use client"

import { List, OrderedList, Text, TextBlock } from "@/components/Text/Text";
import { SectionTitle } from "../layout";
import styles from "../project.module.css"
import { Browser } from "@/components/Browser/Browser";
import { ZoomableImage } from "@/components/ZoomableImage/ZoomableImage";
import { Post } from "@/components/Post/Post";
import { AccentColorContext } from "@/contexts/AccentColorContext";
import { OnionImage } from "@/components/OnionImage/OnionImage";
import { PostInfo } from "@/components/Post/Info/PostInfo";
import postStyles from "./styles.module.css";

export default function Project() {
    return (
        <Post
            title="Quora Dark Mode"
            subtitle="Adding themeability to a massive consumer platform"
            accentRgb="24, 24, 24"
            prevSlug="quora-messages"
            nextSlug="guidebook-schedule-redesign"
            resources={[
                { title: "A Quora post I wrote on the desktop launch", url: "https://productupdates.quora.com/Dark-mode-now-on-Quora-for-desktop-and-mobile-web" }
            ]}
        >
            <AccentColorContext.Consumer>
                {value => (
                    <>
                        <div className={`${styles.header} ${styles["header-dark"]}`} style={{ backgroundColor: value.rgb ? `rgba(${value.rgb}, 1)` : undefined }}>
                            <div className={styles.intro}>
                                <h2 className={styles.title}>Quora Dark Mode</h2>
                                <Text size="large" className={styles.subtitle}>Adding themeability to a massive consumer platform</Text>
                                <div className={`${styles.introImage} ${postStyles.introImage}`}>
                                    <img src="/project-cover-quora-dark-mode@.png" srcSet="/project-cover-quora-dark-mode.png, /project-cover-quora-dark-mode@2x.png 2x" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.section}>
                                <PostInfo items={[
                                    { key: "Company", value: "Quora" },
                                    { key: "Year", value: "2020" },
                                    { key: "add'l design", value: "Xinran Wang" },
                                    { key: "My role", value: <>Design direction<br />UI/UX design<br />Front-end implementation</> }
                                ]} />

                                <TextBlock>
                                    <SectionTitle>Summary</SectionTitle>
                                    <Text>I helped design and implement dark mode on the Quora platform, both on mobile and desktop.</Text>
                                    <SectionTitle>Background</SectionTitle>
                                    <Text>As Quora matured as a product the lack of a universal dark mode become more problematic. Nearly every other comparable social product had the option to enable a dark variant, which hurt Quora's image as a modern consumer product. While migrating the platform to React, we took the opportunity to implement a robust dark mode color theme on the product.</Text>
                                    <SectionTitle>Goals</SectionTitle>
                                    <OrderedList>
                                        <li>Design a dark color theme which adheres to Quora's existing brand language.</li>
                                        <li>Implement a dark mode experience while maintaining key engagement metrics.</li>
                                        <li>Apply the same color theme and implementation mechanisms across both mobile and desktop.</li>
                                    </OrderedList>
                                </TextBlock>
                            </div>

                            <figure className={`${styles.section} ${styles.fullWidth}`}>
                                <Browser>
                                    <div className={`${styles.image} ${styles.frameless}`}>
                                        <OnionImage
                                            imgSrc="/quora-dark-mode-example-screen-light.jpg"
                                            altImgSrc="/quora-dark-mode-example-screen-dark.jpg"
                                        />
                                    </div>
                                </Browser>
                                <figcaption className={styles.sectionCaption}>
                                    <Text intensity="medium">Quora's home page in both light and dark mode (use slider to reveal entire view).</Text>
                                </figcaption>
                            </figure>

                            <figure className={`${styles.section} ${styles.fullWidth}`}>
                                <Browser>
                                    <div className={`${styles.image} ${styles.frameless}`}>
                                        <OnionImage
                                            imgSrc="/quora-dark-mode-example-screen-space-light.jpg"
                                            altImgSrc="/quora-dark-mode-example-screen-space-dark.jpg"
                                        />
                                    </div>
                                </Browser>
                                <figcaption className={styles.sectionCaption}>
                                    <Text intensity="medium">An example Space on Quora in both light and dark mode (use slider to reveal entire view).</Text>
                                </figcaption>
                            </figure>

                            <figure className={`${styles.section} ${styles.fullWidth}`}>
                                <Browser>
                                    <div className={`${styles.image} ${styles.frameless}`}>
                                        <img src="/quora-dark-mode-screen-3.jpg" />
                                    </div>
                                </Browser>
                                <figcaption className={styles.sectionCaption}>
                                    <Text intensity="medium">The theme setting switcher uses abstracted images to give a hint of each theme.</Text>
                                </figcaption>
                            </figure>

                            <figure className={`${styles.section} ${styles.fullWidth}`}>
                                <Browser>
                                    <div className={`${styles.image} ${styles.frameless}`}>
                                        <img src="/quora-dark-mode-mweb.jpg" srcSet="/quora-dark-mode-mweb.jpg, /quora-dark-mode-mweb@2x.jpg 2x" />
                                    </div>
                                </Browser>
                                <figcaption className={styles.sectionCaption}>
                                    <Text intensity="medium">The theme setting switcher uses abstracted images to give a hint of each theme.</Text>
                                </figcaption>
                            </figure>

                            <div className={styles.section}>
                                <TextBlock>
                                    <SectionTitle>Specific challenges</SectionTitle>
                                    <Text weight="bold">Shallow theming infrastructure</Text>
                                    <Text>While our initial React implementation had light theming capabilities, there didn't exist the ability to support more than two themes (necessary for experimentation) or robust theme contexts. I wrote much of the front end code which powered these new concepts, allowing us to test multiple theme variants against eachother.</Text>
                                    <Text weight="bold">Negative engagement investigation</Text>
                                    <Text>Our initial dark theme showed an ~3% engagement drop with users in the experiment. I led an effort to understand this drop, including testing a number of different dark theme variants. We discovered that the drop was caused by enabling the "auto" theme mode by default, causing us to adjust the default theme setting and successfully launching the experience.</Text>
                                </TextBlock>
                            </div>

                            <figure className={`${styles.section} ${styles.fullWidth}`}>
                                <Browser>
                                    <div className={styles.image}>
                                        <ZoomableImage
                                            imgSrc="/quora-dark-mode-theme-variants.jpg"
                                            imgSrc2x="/quora-dark-mode-theme-variants@2x.jpg"
                                            subtitle="I experimented with a number of theme variants and tested them in production. No variant proved to be more successful than another.
                                            "
                                        />
                                    </div>
                                </Browser>
                                <figcaption className={styles.sectionCaption}><Text intensity="medium">I experimented with a number of theme variants and tested them in production. No variant proved to be more successful than another.
</Text></figcaption>
                            </figure>

                            <div className={styles.section}>
                                <TextBlock>
                                    <SectionTitle>Legacy views</SectionTitle>
                                    <Text>While most of the product was migrated to React at this point, there were a number of views which used Quora's legacy front end framework which had no support for (or awareness of) theming. I had to duplicate much of our existing theme logic and infrastructure to support these legacy views as to not break the dark mode experience.</Text>
                                </TextBlock>
                            </div>
                        </div>
                    </>
                )}
            </AccentColorContext.Consumer>
        </Post>
    )
}