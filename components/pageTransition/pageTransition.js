import styles from "./pageTransition.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import classnames from "classnames";
import { useState } from "react";
import {PageTransitionContext} from "./pageTransition.context";

const TIMEOUT = 1200;

const PageTransition = ({ children, location, className }) => {
  const [entering, setEntering] = useState(false);
  const onEntering = () => {
    setEntering(true);
  };
  const onEntered = () => {
    setEntering(false);
  };
  return (
    <PageTransitionContext.Provider value={{enterAnimation: entering, transitionDelay: entering ? 600 : 0}}>
      {entering && (
        <div className={classnames(styles.transition, styles.enterActive)}>
          <div className={styles.rowContainer}>
            <div className={classnames(styles.row1, styles.row)}></div>
            <div className={classnames(styles.row2, styles.row)}></div>
            <div className={classnames(styles.row3, styles.row)}></div>
            <div className={classnames(styles.row4, styles.row)}></div>
          </div>
        </div>
      )}
      <TransitionGroup appear={false} className={className}>
        <CSSTransition
          classNames={{ ...styles }}
          key={location}
          timeout={TIMEOUT}
          onEntering={onEntering}
          onEntered={onEntered}
        >
          {(status, test) => <div>{children}</div>}
        </CSSTransition>
      </TransitionGroup>
    </PageTransitionContext.Provider>
  );
};

export default PageTransition;
