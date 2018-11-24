import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import styles from './AdBanner.css';

AdBanner.propTypes = {
  altText: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
};

AdBanner.defaultProps = { className: undefined };

function AdBanner({ altText, children, className, imageSource, href }) {
  return (
    <OutboundLink
      analyticsEventLabel="AdBanner Hit"
      className={classNames(className, styles.AdBanner)}
      hasIcon={false}
      href={href}
    >
      <div className={styles.adBannerContent}>
        <div className={styles.adBannerImageContainer}>
          <img alt={altText} className={styles.adBannerImage} src={imageSource} />
        </div>
        <h6 className={styles.adBannerText}>{children}</h6>
      </div>
    </OutboundLink>
  );
}

export default AdBanner;
