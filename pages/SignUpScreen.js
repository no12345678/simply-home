import React, { useState } from "react";
import * as styles from "./SignUpScreen.module.scss";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const SignUpScreen = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const renderTopSection = () => {
    return (
      <div className={styles.topSection}>
        <div className={styles.halfTriangleBackground} />
        <div className={styles.title}>Let&apos;s redecorate!</div>
        <div className={styles.cactusImage} />
      </div>
    );
  };

  const renderFormSection = () => {
    return (
      <div className={styles.formSection}>
        <div className={styles.formFieldContainer}>
          <div className={styles.formFieldLabel}>Your First Name</div>
          <TextField
            id="first-name"
            label=""
            variant="outlined"
            placeholder="Enter your first name"
            InputLabelProps={{ shrink: false }}
            classes={{
              root: styles.textFieldContainer,
            }}
          />
        </div>
        <div className={styles.formFieldContainer}>
          <div className={styles.formFieldLabel}>Your Last Name</div>
          <TextField
            id="last-name"
            label=""
            variant="outlined"
            placeholder="Enter your last name"
            InputLabelProps={{ shrink: false }}
            classes={{
              root: styles.textFieldContainer,
            }}
          />
        </div>
        <div className={styles.formFieldContainer}>
          <div className={styles.formFieldLabel}>Email</div>
          <TextField
            id="email"
            label=""
            variant="outlined"
            placeholder="Enter your email"
            InputLabelProps={{ shrink: false }}
            classes={{
              root: styles.textFieldContainer,
            }}
          />
        </div>
        <div className={styles.formFieldContainer}>
          <div className={styles.formFieldLabel}>Message</div>
          <TextField
            id="message"
            label=""
            variant="outlined"
            placeholder="Enter your message here"
            InputLabelProps={{ shrink: false }}
            classes={{
              root: styles.textFieldContainer,
            }}
            multiline
            rows={4}
          />
        </div>
        <div className={styles.formFieldLabel}>
          Review the terms:<span>Here.</span>
        </div>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              name="terms-check"
              classes={{
                checked: styles.checkboxColor,
              }}
            />
          }
          label="I agree to the terms"
          classes={{
            label: styles.checkboxLabel,
          }}
        />
        <div className={styles.submitButton}>
          <div className={styles.submitButtonText}>Send</div>
        </div>
      </div>
    );
  };

  const renderFooterSection = () => {
    return (
      <div className={styles.footerSection}>
        <div className={styles.logoContainer}>
          <div className={styles.logoImageContainer}></div>
          <div className={styles.logoTitle}>simply home</div>
        </div>

        <div className={styles.linksContainer}>
          <div className={styles.linkElement}>Gallery</div>
          <div className={styles.linkElement}>Follow Us</div>
          <div className={styles.linkElement}>Deals</div>
          <div className={styles.linkElement}>Sitemap</div>
        </div>
        <div className={styles.divider} />
        <div className={styles.additionalLinksContainer}>
          <div className={styles.linkElement}>Terms of Service</div>
          <div className={styles.linkElement}>Privacy Policy</div>
        </div>
        <div className={styles.copyrights}>
          Simply Home is a sample project <br /> for Quest © 2021
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {renderTopSection()}
      {renderFormSection()}
      {renderFooterSection()}
    </div>
  );
};

export default SignUpScreen;
