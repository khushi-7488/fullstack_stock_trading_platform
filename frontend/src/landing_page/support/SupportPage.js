import React from 'react';
import CreateTicket from './CreateTicket';
import Hero from './Hero';
function SupportPage() {
  return (
    <>
      <Hero />
      <CreateTicket id_name="collapseOne" logo={<i class="fa fa-user" aria-hidden="true"></i>} ticketheading="Account opening" link1="Resident individual" link2="Minor" link3="Non Resident Indian (NRI)" link4="Company, Partnership, HUF and LLP" link5="Glossary" />

      <CreateTicket id_name="collapseTwo" logo={<i class="fa fa-plus-circle" aria-hidden="true"></i>} ticketheading="Your Zerodha Account" link1="Your Profile" link2="Account modification" link3="Client Master Report (CMR) and Depository Participant (DP)" link4="Nomination" link5="Transfer and conversion of securities" />

      <CreateTicket id_name="collapseThree" logo={<i class="fa fa-paper-plane-o" aria-hidden="true"></i>} ticketheading="Kite" link1="IPO" link2="Trading FAQs" link3="Margin Trading Facility (MTF) and Margins" link4="Charts and orders" link5="Alerts and Nudges" />

      <CreateTicket id_name="collapseFour" logo={<i class="fa fa-inr" aria-hidden="true"></i>} ticketheading="Funds" link1="Add money" link2="Withdraw money" link3="Add bank accounts" link4="eMandates" link5="general" />

      <CreateTicket id_name="collapseFive" logo={<i class="fa fa-cog" aria-hidden="true"></i>} ticketheading="Console" link1="Portfolio" link2="Corporate actions" link3="Funds statement" link4="Reports" link5="Profile" />

      <CreateTicket id_name="collapseSix" logo={<i class="fa fa-circle-o-notch" aria-hidden="true"></i>} ticketheading="Coin" link1="Mutual funds" link2="National Pension Scheme (NPS)" link3="Fixed Deposit (FD)" link4="Features on Coin" link5="Payments and Orders" />

    </>

  );
}

export default SupportPage;