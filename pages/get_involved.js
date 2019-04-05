import classNames from 'classnames';
import TrackVisibility from 'react-on-screen';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Badge from 'components/Badge/Badge';
import Content from 'components/Content/Content';
import LinkButton from 'components/LinkButton/LinkButton';
import Heading from 'components/Heading/Heading';
import DonateSection from 'components/ReusableSections/DonateSection/DonateSection';
import JoinSection from 'components/ReusableSections/JoinSection/JoinSection';
import HighfivingIcon from 'static/images/icons/Custom/high_fiving.svg';
import BullseyeIcon from 'static/images/icons/Custom/bullseye.svg';
import ManHoldingKeyIcon from 'static/images/icons/Custom/man_holding_key.svg';
import NetworkingIcon from 'static/images/icons/Custom/networked_people.svg';
import ChartIcon from 'static/images/icons/Custom/chart.svg';
import PeopleMeetingIcon from 'static/images/icons/Custom/people_meeting.svg';
import { s3 } from 'common/constants/urls';
import styles from './styles/get_involved.css';
// import { style } from 'node_modules/glamor/index';

const VISIBILITY_OFFSET = 400;

const mentorItems = [
  {
    icon: <HighfivingIcon />,
    label: 'Feel More Confident',
  },
  {
    icon: <BullseyeIcon />,
    label: 'Have Defined Career Goals',
  },
  {
    icon: <ManHoldingKeyIcon />,
    label: 'Reach Their True Potential',
  },
];

const supportItems = [
  {
    icon: <NetworkingIcon />,
    label: 'Operations',
  },
  {
    icon: <ChartIcon />,
    label: 'Fundraising',
  },
  {
    icon: <PeopleMeetingIcon />,
    label: 'Partnerships',
  },
];

export default () => (
  <>
    <Head title="Get Involved" />

    <HeroBanner
      backgroundImageSource={`${s3}redesign/heroBanners/events.jpg`}
      className={[styles.heroBannerMobilePositioning, styles.heroBannerTabletDesign]}
      title="You Can Make An Impact"
    >
      <>
        <p>
          Whether you&apos;re interested in mentoring, supporting our operations, or simply donating
          to help military veterans, service members, and spouses launch a career in software
          development, Operation Code is always looking for supporters like you.
        </p>

        <LinkButton className="hero_banner_link_button" href="/who_we_serve">
          Learn More
        </LinkButton>
      </>
    </HeroBanner>

    <Content
      title="The Power of Mentorship"
      className="get_involved_badgeGroupings"
      theme="gray"
      columns={[
        <p>By mentoring one of our members, you will help them:</p>,
        <div className={styles.badgeGroupings}>
          {mentorItems.map(item => (
            <Badge key={item.label} icon={item.icon} label={item.label} className={styles.badge} />
          ))}
        </div>,
      ]}
    />

    <Content
      columns={[
        <TrackVisibility offset={VISIBILITY_OFFSET}>
          {({ isVisible }) => (
            <div className={classNames(styles.image, { [styles.showImage]: isVisible })}>
              <img src={`${s3}redesign/images/woman.jpg`} alt="Woman smiling at computer" />
            </div>
          )}
        </TrackVisibility>,
        <div>
          <Heading hasHeadingLines={false} theme="white">
            Empower Our Community
          </Heading>

          <p>
            Make a difference in the lives of military veterans, service members, and spouses who
            are eager to transition into a software development career.
          </p>

          <div className={styles.centeredText}>
            <LinkButton href="/mentor">Become A Mentor</LinkButton>
          </div>
        </div>,
      ]}
    />

    <Content
      theme="gray"
      title="Ways You Can Support Operation Code"
      columns={[
        <div>
          <p>
            We&apos;re always looking for volunteers who are dedicated to making an impact in the
            lives of military veterans, service members, and spouses.
          </p>
          <p className={styles.centeredText}>You can help us with:</p>
        </div>,
        <div className={classNames(styles.badgeGroupings)}>
          {supportItems.map(item => (
            <Badge key={item.label} icon={item.icon} label={item.label} className={styles.badge} />
          ))}
        </div>,
      ]}
    />

    <Content
      columns={[
        <div>
          <Heading hasHeadingLines={false} theme="white">
            Support Our Mission
          </Heading>

          <p>
            Make a difference in the lives of military veterans, service members, and spouses who
            are eager to transition into a software development career.
          </p>

          <div className={styles.centeredText}>
            <LinkButton href="/get_involved">Get Involved</LinkButton>
          </div>
        </div>,
        <TrackVisibility offset={VISIBILITY_OFFSET}>
          {({ isVisible }) => (
            <div className={classNames(styles.image, { [styles.showImage]: isVisible })}>
              <img
                src={`${s3}redesign/images/utah_meetup.jpg`}
                alt="Operation Code members collaborate on a problem"
              />
            </div>
          )}
        </TrackVisibility>,
      ]}
    />

    <DonateSection />

    <JoinSection />
  </>
);
