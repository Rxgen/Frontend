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
        console.log(" Show button clicked");

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
    const handleClick = (event) => {
      const header = event.currentTarget;
      const container = header.nextElementSibling;
    
      const isActive = header.classList.contains('active');
      console.log(" Clicked:", header.textContent.trim());
    
      document.querySelectorAll('.faq_container').forEach((el) => {
        el.style.display = 'none';
      });
      document.querySelectorAll('.faq_header').forEach((el) => {
        el.classList.remove('active');
      });
    
      
      if (!isActive) {
        container.style.display = 'block';
        header.classList.add('active');
        
      } else {
       
      }
    };
  
    const attachListeners = () => {
      const headers = document.querySelectorAll('.faq_header');
      if (headers.length === 0) return;
  
      headers.forEach((header) => {
        header.removeEventListener('click', handleClick); // avoid duplicates
        header.addEventListener('click', handleClick);
      });
  
      console.log(`Event listeners attached to ${headers.length} headers`);
    };
  
    
    const observer = new MutationObserver(() => {
      attachListeners();
    });
  
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  
    attachListeners();
  
    return () => {
      observer.disconnect();
      const headers = document.querySelectorAll('.faq_header');
      headers.forEach((header) => {
        header.removeEventListener('click', handleClick);
      });
    };
  }, []);
  
  
 

useEffect(() => {
  const setHeights = () => {
    const brandBoxes = document.querySelectorAll('.brand_box');
    if (brandBoxes.length === 0) return;

    // Reset heights
    brandBoxes.forEach((box) => {
      box.style.height = 'auto';
    });

    // Find max height
    let maxHeightPx = 0;
    brandBoxes.forEach((box) => {
      const height = box.offsetHeight;
      if (height > maxHeightPx) maxHeightPx = height;
    });

    // Convert to vw
    const maxHeightVw = (maxHeightPx / window.innerWidth) * 100;

    // Apply max height to all
    brandBoxes.forEach((box) => {
      box.style.height = `${maxHeightVw}vw`;
    });

    console.log(`Set all brand_box heights to ${maxHeightVw.toFixed(2)}vw`);
  };

  const attachHeights = () => {
    const boxes = document.querySelectorAll('.brand_box');
    if (boxes.length === 0) return;

    setHeights();
  };

  const observer = new MutationObserver(() => {
    attachHeights();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  window.addEventListener('resize', setHeights);

  // Initial set
  attachHeights();

  return () => {
    observer.disconnect();
    window.removeEventListener('resize', setHeights);
  };
}, []);

  
  




  return (
    <div className="tolvaptan_tab_container"id ="HCP">
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




