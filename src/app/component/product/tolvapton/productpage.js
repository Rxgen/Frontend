"use client";
import { useState, useEffect,useRef } from "react";
import Link from "next/link";

export default function ProductPage({  activeTab, setActiveTab  }) {
  console.log("Active tab value", activeTab)
  const faqRef = useRef(null);

  const handleTabClick = (e, tabId) => {
    e.preventDefault();
    setActiveTab(tabId);
  };

  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const tabs = document.querySelectorAll(".tolvaptan_tab");
      const allInfos = document.querySelectorAll('[id^="info-"]');
  
      tabs.forEach((tab) => {
        const tabInfo = tab.getAttribute("data-info");
        tab.classList.remove("tabActive"); // remove default CMS class
        if (tabInfo === activeTab) {
          tab.classList.add("tabActive");
        }
      });
  
      allInfos.forEach((el) => {
        el.classList.remove("tabActive"); // remove default CMS class
        if (el.id === `info-${activeTab}`) {
          el.classList.add("tabActive");
        }
      });
    }, 100); // Give CMS enough time to load content
  
    return () => clearTimeout(timeout);
  }, [activeTab]);


  // Important information 


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const buffer = 2130;
  
      const hcp = document.querySelector(".hcp_active");
      const hcpContainer = document.querySelector(".hcp_main_container");
      const hcpTop = hcp?.offsetTop || 0;
  
      if (scrollTop  >=  buffer + hcpTop) {
        hcpContainer?.classList.add("active");
      } else {
        hcpContainer?.classList.remove("active");
      }
  
      const patient = document.querySelector(".patient_active");
      const patientContainer = document.querySelector(".patient_main_container");
      const patientTop = patient?.offsetTop || 0;
  
      if (scrollTop  >=  buffer + patientTop) {
        patientContainer?.classList.add("active");
      } else {
        patientContainer?.classList.remove("active");
      }
    };
  
    
  
    const interval = setInterval(() => {
      const hcp = document.querySelector(".hcp_active");
      const patient = document.querySelector(".patient_active");
      
  
      if (hcp && patient ) {
        clearInterval(interval);
  
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // run once
  
        
      }
    }, 100);
  
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  



  //  Hide and Show More Button 

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;
      if (target && target.classList.contains("show_button")) {
        console.log("✅ Show button clicked");

        const isi = document.querySelector(".isi_main_container");
        const hcp = document.querySelector(".hcp_main_container");
        const patient = document.querySelector(".patient_main_container");

        isi?.classList.toggle("show_active");
        hcp?.classList.toggle("show_active");
        patient?.classList.toggle("show_active");
        document.body.classList.toggle("body_overflow");

        isi?.classList.remove("active");
        hcp?.classList.remove("active");
        patient?.classList.remove("active");

        const isActive =
          isi?.classList.contains("show_active") ||
          hcp?.classList.contains("show_active") ||
          patient?.classList.contains("show_active");

        if (isActive) {
          target.innerHTML = "Show Less";
          isi?.classList.remove("hide");
          hcp?.classList.remove("hide");
          patient?.classList.remove("hide");
        } else {
          target.innerHTML = "Show More";
          isi?.classList.add("hide");
          hcp?.classList.add("hide");
          patient?.classList.add("hide");
        }
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);


  // Accordion FAQ

  useEffect(() => {
    let intervalId = null;

    const attachAccordionEvents = () => {
      const headers = document.querySelectorAll(".faq_accordion .faq_header");

      if (headers.length === 0) {
        console.log("⏳ Waiting for .faq_header elements...");
        return;
      }

      console.log(`✅ Found ${headers.length} .faq_header elements`);

      headers.forEach((header) => {
        // Prevent multiple listeners
        header.removeEventListener("click", handleClick);
        header.addEventListener("click", handleClick);
      });

      clearInterval(intervalId); // stop checking once elements found and listeners attached
    };

    const handleClick = (e) => {
      const header = e.currentTarget;
      const content = header.nextElementSibling;

      console.log("🔘 Clicked:", header.textContent.trim());

      // Slide up all answers
      document.querySelectorAll(".faq_container").forEach((el) => {
        el.style.maxHeight = "0";
      });

      // Remove active from all headers
      document.querySelectorAll(".faq_header").forEach((h) => {
        h.classList.remove("active");
      });

      // If not already open, expand
      if (!content.style.maxHeight || content.style.maxHeight === "0px") {
        content.style.maxHeight = content.scrollHeight + "px";
        header.classList.add("active");
        console.log("✅ Opened:", header.textContent.trim());
      }
    };

    intervalId = setInterval(attachAccordionEvents, 300); // check every 300ms

    return () => {
      clearInterval(intervalId);
      // optional: remove event listeners on unmount
    };
  }, []);




  return (
    <div className="tolvaptan_tab_container">
      <Link
        href="#"
        className="tolvaptan_tab tabActive"
        data-info="1"
        onClick={(e) => handleTabClick(e, "1")}
      >
        Information for Patients
      </Link>
      <Link
        href="#"
        className="tolvaptan_tab"
        data-info="2"
        onClick={(e) => handleTabClick(e, "2")}
      >
        Information for HCPs
      </Link>
    </div>
  );
}




