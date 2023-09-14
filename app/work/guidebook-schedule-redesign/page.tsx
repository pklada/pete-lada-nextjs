'use client';

import { Column } from '@/components/Column/Column';
import { Post } from '@/components/Post/Post';
import { OrderedList, Text, TextBlock } from '@/components/Text/Text';
import { ZoomableImage } from '@/components/ZoomableImage/ZoomableImage';
import { AccentColorContext } from '@/contexts/AccentColorContext';
import { SectionTitle } from '../layout';
import styles from '../project.module.css';
import postStyles from './style.module.css';
import { PostInfo } from '@/components/Post/Info/PostInfo';

export default function Project() {
  return (
    <Post
      title="Guidebook Schedule Redesign"
      subtitle="Improving a feature used by millions"
      prevSlug="quora-dark-mode"
      nextSlug="quora-dark-mode"
      resources={[
        {
          title: 'A Medium post I wrote on the redesign',
          url: 'https://medium.com/guidebook-design/schedule-feature-v3-3b8d88db98a8'
        },
        {
          title: 'Guidebook on the App Store',
          url: 'https://apps.apple.com/us/app/guidebook/id428713847'
        },
        {
          title: 'Guidebook on the Play Store',
          url: 'https://play.google.com/store/apps/details?id=com.guidebook.android&hl=en_US'
        }
      ]}
    >
      <AccentColorContext.Consumer>
        {(value) => (
          <>
            <div
              className={`${styles.header} ${styles['header-dark']}`}
              style={{ backgroundColor: value.color }}
            >
              <div className={styles.intro}>
                <h2 className={styles.title}>Guidebook Schedule Redesign</h2>
                <Text size="large" className={styles.subtitle}>
                  Improving a feature used by millions
                </Text>
              </div>
            </div>
            <div className={styles.body}>
              <div className={styles.section}>
                <PostInfo
                  items={[
                    { key: 'Company', value: 'Guidebook' },
                    { key: 'Year', value: '2019' },
                    {
                      key: 'My role',
                      value: (
                        <>
                          Design direction
                          <br />
                          UI/UX design
                          <br />
                          Prototyping
                          <br />
                          Design implementation
                        </>
                      )
                    }
                  ]}
                />
                <TextBlock>
                  <SectionTitle>Summary</SectionTitle>
                  <Text>
                    An overhaul of Guidebook's schedule feature - the platform's
                    most popular feature and a key differentiator for the
                    product. The redesign targeted improvements to the
                    schedule's date picker, filtering method, and general user
                    experience.
                  </Text>
                  <SectionTitle>Background</SectionTitle>
                  <Text>
                    The Guidebook platform developed essentially as a collection
                    of tools surrounding its primary feature: the schedule.
                    Starting as an events-specific product, the schedule was the
                    true catalyst for app usage - without one there would be
                    little purpose to use the app. Additionally, Guidebook has
                    achieved and maintained success within the event-app space
                    by focusing and relentlessly iterating on the end-user
                    experience of the app. With that in mind, in 2019 I took it
                    upon myself to overhaul the schedule module, and to convince
                    the executive team to approve the project.
                  </Text>
                </TextBlock>
              </div>

              <figure className={`${styles.section} ${styles.fullWidth}`}>
                <div className={`${styles.image} ${styles.frameless}`}>
                  <ZoomableImage
                    imgSrc="/guidebook-schedule-iterations.jpg"
                    subtitle="The schedule module has evolved and refined over 10 years. The right-most figure is after the schedule redesign."
                  />
                </div>
                <figcaption className={styles.sectionCaption}>
                  <Text intensity="medium">
                    The schedule module has evolved and refined over 10 years.
                    The right-most figure is after the schedule redesign.
                  </Text>
                </figcaption>
              </figure>

              <div className={styles.section}>
                <TextBlock>
                  <SectionTitle>Goals</SectionTitle>
                  <OrderedList>
                    <li>
                      Improve the general user experience. While the schedule
                      was relatively easy to use, I wanted to make it more
                      delightful, engaging, and fun, as well as tap into some
                      newer design paradigms (i.e. a page sheet).
                    </li>
                    <li>
                      Simplify date navigation. Given that Guidebook supports a
                      wide range of guide durations, we should adjust the date
                      picker to render in an optimal way based on the guide's
                      specific length.
                    </li>
                    <li>
                      Improve filtering behavior. We want to make filtering by
                      track easier and more intuitive.
                    </li>
                    <li>
                      Update schedule/my schedule toggle design. Current design
                      is fragile and confusing.
                    </li>
                  </OrderedList>
                </TextBlock>
              </div>

              <figure className={`${styles.section}`}>
                <div className={styles.image}>
                  <img src="/guidebook-schedule-views-chart.jpg" />
                </div>
                <figcaption className={styles.sectionCaption}>
                  <Text intensity="medium">
                    An internal chart showing the popularity of the schedule
                    module relative to other features.
                  </Text>
                </figcaption>
              </figure>

              <figure className={`${styles.section}`}>
                <TextBlock>
                  <SectionTitle>Specific improvements</SectionTitle>
                  <Text weight="bold">Adaptive Date Picker</Text>
                  <Text>
                    Guidebook supports guides ranging from a single day to
                    year-round. Given this, it became apparent that the date
                    picker needed to adjust based on the duration of the guide.
                    I proposed introducing four states to the date picker:
                    single-day, short, medium, and on-going.{' '}
                  </Text>
                </TextBlock>
              </figure>

              <div
                className={`${styles.section} ${styles.fullWidth} ${styles.sectionContrast}`}
              >
                <div className={styles.figureGrid}>
                  <figure>
                    <Column>
                      <div className={styles.image}>
                        <img src="/guidebook-schedule-single-day-picker.png" />
                      </div>
                      <TextBlock gap="small">
                        <Text weight="bold">Single-day event</Text>
                        <Text intensity="medium">
                          When the date picker is in the "single day" state, it
                          will present itself not as a picker, but as a
                          rendering of the day the guide occurs on. The user can
                          no longer adjust the date selected.
                        </Text>
                      </TextBlock>
                    </Column>
                  </figure>
                  <figure>
                    <Column>
                      <div className={styles.image}>
                        <img src="/guidebook-schedule-short-event-picker.jpg" />
                      </div>
                      <TextBlock gap="small">
                        <Text weight="bold">Short event</Text>
                        <Text intensity="medium">
                          When the date picker is in the "short" state (2-4
                          days), it will present itself as a simple picker,
                          which no ability to swipe to the next or previous
                          week. It will not render days outside the bounds of
                          the guide's duration.
                        </Text>
                      </TextBlock>
                    </Column>
                  </figure>
                  <figure>
                    <Column>
                      <div className={styles.image}>
                        <img src="/guidebook-schedule-medium-event-picker.jpg" />
                      </div>
                      <TextBlock gap="small">
                        <Text weight="bold">Medium-length event</Text>
                        <Text intensity="medium">
                          When the date picker is in the "medium" state (5-14
                          days), it will present itself as a date picker which
                          is interactive (you can swipe to the next or previous
                          week). Days outside the duration are not selectable.
                        </Text>
                      </TextBlock>
                    </Column>
                  </figure>
                  <figure>
                    <Column>
                      <div className={styles.image}>
                        <img src="/guidebook-schedule-ongoing-picker.gif" />
                      </div>
                      <TextBlock gap="small">
                        <Text weight="bold">Ongoing event</Text>
                        <Text intensity="medium">
                          When the date picker is in the "on-going" state (no
                          start or end date, or longer than 2 weeks), it will
                          present it as a fully functional calendar. It can be
                          expanded from week to calendar view, and any day can
                          be selected (displaying "no sessions" if nothing
                          occurs on that day). We also display "dots" on days
                          which have sessions.
                        </Text>
                      </TextBlock>
                    </Column>
                  </figure>
                </div>
              </div>

              <figure className={`${styles.section}`}>
                <div className={styles.figureGrid}>
                  <div className={styles.image}>
                    <img src="/guidebook-bottom-sheet.gif" />
                  </div>
                  <TextBlock>
                    <SectionTitle>Better filtering UX</SectionTitle>
                    <Text>
                      To make filtering more obvious and intuitive, we replaced
                      the popover with a full bottom sheet. This sheet can be
                      dragged up to expand the full list of filters, with clear
                      indications for which filter is applied.
                    </Text>
                    <Text>
                      We surfaced the applied filters in the navigation bar, so
                      the user is aware of what filter is applied at any moment.
                    </Text>
                  </TextBlock>
                </div>
              </figure>

              <figure className={`${styles.section}`}>
                <div className={styles.figureGrid}>
                  <TextBlock>
                    <SectionTitle>Schedule toggle improvements</SectionTitle>
                    <Text>
                      To reduce confusion with the schedule/my schedule toggle
                      (as well as remove the labels as they often became
                      truncated) I proposed moving to a check mark motif. This
                      both matched the motif we use in the schedule rows
                      themselves, but also saved room in the footer so that the
                      labels no longer truncated. This would more clearly
                      operate as a higher level filter as well, rather than
                      paging between two separate views.
                    </Text>
                  </TextBlock>
                  <div className={styles.image}>
                    <img src="/guidebook-session-toggle.gif" />
                  </div>
                </div>
              </figure>

              <figure className={`${styles.section}`}>
                <TextBlock>
                  <SectionTitle>Process</SectionTitle>
                </TextBlock>
                <div className={`${styles.image} ${styles.frameless}`}>
                  <img
                    src="/guidebook-schedule-redesign-process-chart.png"
                    srcSet="/guidebook-schedule-redesign-process-chart.png, /guidebook-schedule-redesign-process-chart@2x.png"
                  />
                </div>
                <figcaption className={styles.sectionCaption}>
                  <Text intensity="medium">
                    The process taken for this project. This is generally the
                    design process I would follow while at Guidebook, with small
                    tweaks per project.
                  </Text>
                </figcaption>
              </figure>

              <div className={styles.section}>
                <TextBlock>
                  <OrderedList>
                    <li>
                      <TextBlock>
                        <Text weight="bold">Executive & Product Buy-in</Text>
                        <Text>
                          Once I decided that the schedule module needed an
                          overhaul, it became important to convince the product
                          and executive teams that it was a worthwhile endeavor.
                          This was a relatively simple process which started
                          with the creation of a one-page product pitch
                          document. This document explained the goals of the
                          project, a business case, and an estimated scope. I
                          presented this document to the product team, and was
                          able to convince them to add it to a list of projects
                          under consideration. Next, I presented the one-pager
                          to the executive team in our monthly product/exec
                          meeting. It got buy in from the rest of the
                          executives, and was formally slotted into the roadmap.
                        </Text>
                      </TextBlock>
                    </li>

                    <li>
                      <TextBlock>
                        <Text weight="bold">Ideation & Research</Text>
                        <Text>
                          I had a rough idea of what I wanted to improve, but
                          wanted to validate those ideas with other,
                          customer-facing teams. I sat down with both the CSA
                          and sales team leaders to discuss the biggest issues
                          they hear from customers relating to the schedule
                          module. These complaints aligned fairly closely with
                          what I had anticipated: difficulty with day selection
                          and some confusion around filtering.
                        </Text>
                        <Text>
                          I did a lot of research on how other apps handle
                          scheduling. Our use-case is fairly specialized
                          (bounded events) but it was useful to gather
                          interaction inspiration from such apps as Outlook,
                          Google Calendar, Google I/O's event app, Sunrise,
                          among others.
                        </Text>
                        <Text>
                          Next, I started producing some rough designs of how we
                          could improve the feature. I had a fairly clear idea
                          of what I wanted to create, but still explored here,
                          mainly around the layout for the filter sheet.
                        </Text>
                      </TextBlock>
                    </li>

                    <li>
                      <TextBlock>
                        <Text weight="bold">Prototyping</Text>
                        <Text>
                          From the designs, I created prototypes of nearly every
                          new interaction encompassed by the redesign. I feel
                          very strongly about prototyping and try to incorporate
                          it into every project I work on. I ran these
                          prototypes by product as well as members of the sales
                          and CSA teams to gather feedback. They helped better
                          communicate how the filter, picker, and other UI
                          elements would behave. Some are shown below.
                        </Text>
                        <Text>
                          We did some user testing here as well, having
                          non-technical members of our team play around with the
                          prototypes to provide feedback.
                        </Text>
                      </TextBlock>
                    </li>

                    <li>
                      <TextBlock>
                        <Text weight="bold">Impact Analysis</Text>
                        <Text>
                          Once the designs and prototypes were fairly well
                          established, I constructed an impact analysis with one
                          of our product managers. This analysis contained
                          near-final designs and interactions. These were
                          presented to team leads for any final feedback.
                        </Text>
                      </TextBlock>
                    </li>

                    <li
                      className={`${postStyles.phoneContainer} ${postStyles.phoneAvoidingItem}`}
                    >
                      <TextBlock>
                        <Text weight="bold">Development & implementation</Text>
                        <Text>
                          Finally, development began. I worked closely with our
                          primary iOS and Android engineers to implement the new
                          designs. Often, they would set up a view and then pass
                          it over to me to tweak and polish. This process of
                          design/developer back and forth within the actual
                          codebase is something I have done for years and find
                          results in quality products.
                        </Text>
                        <figure className={`${postStyles.phones}`}>
                          <img
                            src="/guidebook-schedule-3d-duo.png"
                            srcSet="/guidebook-schedule-3d-duo.png, /guidebook-schedule-3d-duo@2x.png"
                          />
                        </figure>
                      </TextBlock>
                    </li>

                    <li className={postStyles.phoneAvoidingItem}>
                      <TextBlock>
                        <Text weight="bold">Testing & release</Text>
                        <Text>
                          Next, with the QA team I set up a "testing party" for
                          the feature. I worked with our QA lead to produce a
                          set of criteria and requirements which had to pass to
                          consider the feature release-ready. We sat down with
                          PMs and other developers to complete the tests. Once
                          passed, we cut a release candidate for both apps.
                        </Text>
                      </TextBlock>
                    </li>

                    <li className={postStyles.phoneAvoidingItem}>
                      <TextBlock>
                        <Text weight="bold">Validating goals</Text>
                        <Text>
                          After release, we primarily tracked if the feature was
                          successful through customer feedback. Our net promotor
                          score was something we kept an eye on. I had some of
                          our account managers discuss the changes with
                          customers to gather feedback, most of which was
                          positive. We closely tracked metrics on schedule usage
                          (schedule views, schedule item adds, etc) to make sure
                          there were no negative effects, which did not
                          materialize.
                        </Text>
                      </TextBlock>
                    </li>

                    <li>
                      <TextBlock>
                        <Text weight="bold">Iteration</Text>
                        <Text>
                          As with any major project, after release inevitably
                          bugs are found or edge cases are unearthed. We
                          continued to iterate on the feature, adjusting things
                          like how single track schedules operate. The schedule
                          is the type of feature which will never be "done" at
                          Guidebook, and I envision iteration and evolution here
                          will continue for the next 10 years, as it has for the
                          previous.
                        </Text>
                      </TextBlock>
                    </li>
                  </OrderedList>
                </TextBlock>
              </div>
            </div>
          </>
        )}
      </AccentColorContext.Consumer>
    </Post>
  );
}
