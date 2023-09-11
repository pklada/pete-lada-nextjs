"use client"

import { List, Text, TextBlock } from "@/components/Text/Text";
import { SectionTitle } from "../layout";
import styles from "../project.module.css"
import { Browser } from "@/components/Browser/Browser";
import { ZoomableImage } from "@/components/ZoomableImage/ZoomableImage";
import { Post } from "@/components/Post/Post";
import { AccentColorContext } from "@/contexts/AccentColorContext";
import { PostInfo } from "@/components/Post/Info/PostInfo";
import postStyles from "./styles.module.css";
import { PostHeader } from "@/components/Post/Header/PostHeader";
import { IPhone } from "@/components/IPhone/IPhone";
import Image from "next/image";

export default function Project() {
    return (
        <Post
            title="Building the Eco Points Store"
            subtitle="&quot;Closing the loop&quot; on Eco Points"
            prevSlug=""
            nextSlug="quora-dark-mode"
        >
            <AccentColorContext.Consumer>
                {value => (
                    <>
                        <PostHeader
                            title="Designing and developing the Eco App"
                            subtitle={`Creating a zero to one fintech product`}
                            imgSrc="/project-header-eco-points-store.png"
                            className={postStyles.header}
                            imgContainerClassName={postStyles.headerImg}
                        />
                        <div className={styles.body}>
                            <div className={styles.section}>
                                <PostInfo items={[
                                    { key: "Company", value: "Eco" },
                                    { key: "Year", value: "2021-2023" },
                                    { key: "My role", value: <>Design direction<br />UI/UX design<br />Swift Implementation</> }
                                ]} />
                                <TextBlock>
                                    <SectionTitle>Summary</SectionTitle>
                                    <Text>Eco launched the first version of their app in 2020 after raising a funding round from a16z and others. The initial version of the Eco app was a true MVP, proving out the idea that a banking system where the incetives of the company align with incentives of the users could work.</Text>
                                    <Text>The MVP version of the product was a React Native app, and was designed and built rapidly by a more junior team. It worked, but the product experience was lacking. I was brought in to help reimagine the product experience and rebuild the product as a polished, native, SwiftUI app.</Text>
                                    <Text>There is too much to cover in a single post, so I'll focus below on some specific design details and my involvement.</Text>
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
                                <figcaption className={styles.sectionCaption}><Text intensity="medium">Old Quora messages vs. the new redesign.</Text></figcaption>
                            </figure>

                            <div className={styles.section}>
                                <TextBlock>
                                    <SectionTitle>The Helix</SectionTitle>
                                    <Text>Before I joined, there was some conceptual design work done by Work & Co., specifically around the helix and app navigation. The helix is a concept unique to Eco, a 3d artifact which serves as the home screen to the product, meant to represent your financial growth over time.</Text>
                                    <Text>I took this concept and designed most of the experience around the helix, including animations, display logic, interactions, and more. I also implemented a lot of this in Swift myself. For instance, the pull to refresh animation and the various "success animations" were built by me. This involved learning quite a bit about SceneKit (iOS' 3D renderer), particle systems, and more. </Text>
                                </TextBlock>
                            </div>

                            <div className={styles.section}>
                                <TextBlock>
                                    <SectionTitle>The Helix</SectionTitle>
                                    <Text>Before I joined, there was some conceptual design work done by Work & Co., specifically around the helix and app navigation. The helix is a concept unique to Eco, a 3d artifact which serves as the home screen to the product, meant to represent your financial growth over time.</Text>
                                    <Text>I took this concept and designed most of the experience around the helix, including animations, display logic, interactions, and more. I also implemented a lot of this in Swift myself. For instance, the pull to refresh animation and the various "success animations" were built by me. This involved learning quite a bit about SceneKit (iOS' 3D renderer), particle systems, and more. </Text>
                                </TextBlock>
                            </div>

                            <div className={styles.section}>
                                <TextBlock>
                                    <SectionTitle>New user experience</SectionTitle>
                                    <Text>During one of our hackathons, I conceptualized and built a lightweight new user experience (NUX) for Eco. We took my work from the hackathon and turned it into a full-fledged feature. NUX became a core part of the Eco product experience, with most new features feeding back into the system in some way.</Text>
                                    <Text>NUX ultimately was a successful launch. It allowed us to drop a lot of required steps during onboarding and move them to a post-sign up experience, increasing our deposit conversion rate. In fact, prior to launch our deposit rate was 2%. <b>Post launch this increased to 10%</b>, and continued to trend upwards (to near 17% - for context, the industry standard is around 10%).</Text>
                                    <Text>Additional data: Plaid linking (a key metric) went from 23% pre-launch to ~40% post-launch. Similarly, sign ups for an "Eco Concierge" session (think: a guided onboarding by someone from Eco) went from 3.6% pre-launch, to 10% post.</Text>
                                </TextBlock>
                            </div>

                            <div className={styles.section}>
                                <TextBlock>
                                    <SectionTitle>Points Drops</SectionTitle>
                                    <Text>Points Drops is a program where a luxary, rare, or otherwise compelling item (think AirPods Max, Taylor Swift tickets, etc) is "dropped" at a regular cadence. The quantity is limited, but the "exchange rate" of Points to USD is far and away the highest on the platform. The program is designed to drive urgency and virality to the platform &mdash; <i>"what is the drop this week?"</i>, <i>"should I buy this drop, or wait for the next?"</i>, <i>"I need to tell people about this"</i> &mdash; and gamify the point-spend experience in a unique way.</Text>
                                    <Text>I think of it as a modern twist on Woot.</Text>
                                </TextBlock>
                            </div>

                            <div className={styles.section}>
                                <TextBlock>
                                    <SectionTitle>Eco Credit</SectionTitle>
                                    <Text>Credit, in contrast to Drops, is meant to be much more utilitarian and predictable. This program wraps the ability to sell your points for USD in a layer which encourages additional transacting on the product. Instead of directly selling Points, you instead <b><i>buy credit towards future transactions on Eco</i></b>. Once transacted, you earn a rebate directly into your Eco account of the amount spent. This program is meant to be a reliable, evergreen way to spend your Points - the trade off being a lower exchange rate. Wrapping the program in future transactions creates a compounding effect on engagement: spending Points requires transacting, transacting earns more Points.</Text>
                                </TextBlock>
                            </div>

                            <section className={styles.section}>
                                <div className={styles.figureGrid}>
                                    <figure>
                                        <IPhone>
                                            <video autoPlay loop muted playsInline>
                                                <source src="/eco-credit-summary.mp4" />
                                            </video>
                                        </IPhone>
                                        <figcaption className={styles.sectionCaption}><Text intensity="medium">The primary entry point into the Credit summary view is via a user's dashboard.</Text></figcaption>
                                    </figure>
                                    <figure>
                                        <IPhone>
                                            <video autoPlay loop muted playsInline>
                                                <source src="/eco-credit-sold-out.mp4" />
                                            </video>
                                        </IPhone>
                                        <figcaption className={styles.sectionCaption}><Text intensity="medium">Credit can "sell out" each month. This gives Eco some protection and prevents mass points liquidation.</Text></figcaption>
                                    </figure>
                                    <figure>
                                        <IPhone>
                                            <video autoPlay loop muted playsInline>
                                                <source src="/eco-credit-purchase.mp4" />
                                            </video>
                                        </IPhone>
                                        <figcaption className={styles.sectionCaption}><Text intensity="medium">Purchasing credit is a simple flow, which deducts Points from a user's Point balance.</Text></figcaption>
                                    </figure>
                                    <figure>
                                        <IPhone>
                                        <video autoPlay loop muted playsInline>
                                                <source src="/eco-credit-merchant.mp4" />
                                            </video>
                                        </IPhone>
                                        <figcaption className={styles.sectionCaption}><Text intensity="medium">Credit is represented in the UI with a purple treatment, and the credit icon.</Text></figcaption>
                                    </figure>
                                </div>
                            </section>

                            <div className={styles.section}>
                                <TextBlock>
                                    <SectionTitle>Results</SectionTitle>
                                    <Text>As of writing, the Points Store is still in limited beta testing and conclusive results are pending. Response has been positive from users. I will update this article with more data once available.</Text>
                                </TextBlock>
                            </div>
                        </div>
                    </>
                )}
            </AccentColorContext.Consumer>
        </Post>
    )
}