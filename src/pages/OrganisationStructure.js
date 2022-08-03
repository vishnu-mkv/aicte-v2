import React from "react";
import "../assets/styles/OrganisationStructure.scss";

function OrganisationStructure() {
  return (
    <div className="pad" id="org-str">
      <h2 className="page-title">organisation structure</h2>
      <p>
        The hierarchical arrangement of the lines of authority, communications,
        rights and duties of AICTE.
      </p>
      <div className="container">
        <div className="row">
          <div className="tree">
            <ul id="tree-rows">
              <ul id="tree-row-1">
                <li>
                  <a href="#">
                    <img src="/images/chairman.svg" alt="chairman" />
                    <span>chairman</span>
                  </a>
                </li>
              </ul>

              <ul>
                <li>
                  <a href="#">
                    <img src="/images/vice-chairman.svg" alt="vice-chairman" />
                    <span>vice-chairman</span>
                  </a>
                </li>
              </ul>

              <ul id="tree-row-3">
                <li>
                  <a href="#">
                    <img
                      src="/images/member-secretary.svg"
                      alt="member-secretary"
                    />
                    <span>member secretary</span>
                  </a>
                </li>
              </ul>

              <ul id="connector">
                <li>
                  <a href="#">
                    <img
                      src="/images/finance-bureau.svg"
                      alt="finance-bureau"
                    />
                    <span>finance bureau</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/images/approval-bureau.svg"
                      alt="approval-bureau"
                    />
                    <span>approval bureau</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/images/administration-bureau.svg"
                      alt="administration-bureau"
                    />
                    <span>adminstration bureau</span>
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganisationStructure;
