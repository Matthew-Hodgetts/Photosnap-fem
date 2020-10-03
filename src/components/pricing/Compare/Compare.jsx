import React from "react";

import styles from "./Compare.module.scss";

import { FiCheck } from "react-icons/fi";

const Compare = () => {
  return (
    <section className={`pb-6 ${styles.compare}`}>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2 className={styles.title}>Compare</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className={`row no-gutters ${styles.topRow}`}>
              <div className="col-12 col-md-6">The Features</div>
              <div className="d-none d-md-block col-md-2 text-md-center">
                Basic
              </div>
              <div className="d-none d-md-block col-md-2 text-md-center">
                Pro
              </div>
              <div className="d-none d-md-block col-md-2 text-md-center">
                Business
              </div>
            </div>
            <div className={`row align-items-center no-gutters ${styles.row}`}>
              <div className="col-12 col-md-6">Unlimited story posting</div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>
                    Basic
                  </span>
                  <span className={styles.check}>
                    <FiCheck />
                  </span>
                </div>
              </div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>Pro</span>
                  <span className={styles.check}>
                    <FiCheck />
                  </span>
                </div>
              </div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>
                    Business
                  </span>
                  <span className={styles.check}>
                    <FiCheck />
                  </span>
                </div>
              </div>
            </div>
            <div className={`row align-items-center no-gutters ${styles.row}`}>
              <div className="col-12 col-md-6">Unlimited Photo Upload</div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>
                    Basic
                  </span>
                  <span className={styles.check}>
                    <FiCheck />
                  </span>
                </div>
              </div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>Pro</span>
                  <span className={styles.check}>
                    <FiCheck />
                  </span>
                </div>
              </div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>
                    Business
                  </span>
                  <span className={styles.check}>
                    <FiCheck />
                  </span>
                </div>
              </div>
            </div>
            <div className={`row align-items-center no-gutters ${styles.row}`}>
              <div className="col-12 col-md-6">Embedding custom content</div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>
                    Basic
                  </span>
                </div>
              </div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>Pro</span>
                  <span className={styles.check}>
                    <FiCheck />
                  </span>
                </div>
              </div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>
                    Business
                  </span>
                  <span className={styles.check}>
                    <FiCheck />
                  </span>
                </div>
              </div>
            </div>
            <div className={`row align-items-center no-gutters ${styles.row}`}>
              <div className="col-12 col-md-6">Customize metadata</div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>
                    Basic
                  </span>
                </div>
              </div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>Pro</span>
                  <span className={styles.check}>
                    <FiCheck />
                  </span>
                </div>
              </div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>
                    Business
                  </span>
                  <span className={styles.check}>
                    <FiCheck />
                  </span>
                </div>
              </div>
            </div>
            <div className={`row align-items-center no-gutters ${styles.row}`}>
              <div className="col-12 col-md-6">Advanced Metrics</div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>
                    Basic
                  </span>
                </div>
              </div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>Pro</span>
                </div>
              </div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>
                    Business
                  </span>
                  <span className={styles.check}>
                    <FiCheck />
                  </span>
                </div>
              </div>
            </div>
            <div className={`row align-items-center no-gutters ${styles.row}`}>
              <div className="col-12 col-md-6">Photo Downloads</div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>
                    Basic
                  </span>
                </div>
              </div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>Pro</span>
                </div>
              </div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>
                    Business
                  </span>
                  <span className={styles.check}>
                    <FiCheck />
                  </span>
                </div>
              </div>
            </div>
            <div className={`row align-items-center no-gutters ${styles.row}`}>
              <div className="col-12 col-md-6">Search engine indexing</div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>
                    Basic
                  </span>
                </div>
              </div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>Pro</span>
                </div>
              </div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>
                    Business
                  </span>
                  <span className={styles.check}>
                    <FiCheck />
                  </span>
                </div>
              </div>
            </div>
            <div className={`row align-items-center no-gutters ${styles.row}`}>
              <div className="col-12 col-md-6">Custom Analytics</div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>
                    Basic
                  </span>
                </div>
              </div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>Pro</span>
                </div>
              </div>
              <div className="col col-md-2 text-md-center">
                <div className={styles.level}>
                  <span className={`d-md-none ${styles.levelTitle}`}>
                    Business
                  </span>
                  <span className={styles.check}>
                    <FiCheck />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compare;
