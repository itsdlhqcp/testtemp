// document.addEventListener('DOMContentLoaded', function() {
//   // Get all thumbnails
//   const thumbnails = document.querySelectorAll('.thumbnail');
  
//   // Get all image containers
//   const imgContainers = document.querySelectorAll('.img-container');
  
//   // Create an object to store image positions
//   const imagePositions = {};
  
//   // Function to scroll to the target image smoothly
//   function scrollToImage(targetId) {
//     // Make sure all images are visible
//     imgContainers.forEach(container => {
//       container.style.display = 'block';
//     });
    
//     // Scroll to the selected image with offset to account for overlapping
//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//       const rect = targetElement.getBoundingClientRect();
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       const targetTop = rect.top + scrollTop;
      
//       // Scroll to a position slightly above the image to show it fully
//       window.scrollTo({
//         top: targetTop - 100, // Offset to account for header and to show the image properly
//         behavior: 'smooth'
//       });
//     }
    
//     // Update active class on thumbnails
//     updateActiveThumbnail(targetId);
//   }
  
//   // Function to update active thumbnail
//   function updateActiveThumbnail(targetId) {
//     thumbnails.forEach(thumb => {
//       thumb.classList.remove('active');
//       if (thumb.getAttribute('data-target') === targetId) {
//         thumb.classList.add('active');
//       }
//     });
//   }
  
//   // Calculate image positions for scroll detection
//   function calculateImagePositions() {
//     imgContainers.forEach(container => {
//       const rect = container.getBoundingClientRect();
//       imagePositions[container.id] = {
//         top: rect.top + window.scrollY,
//         bottom: rect.bottom + window.scrollY
//       };
//     });
//   }
  
//   // Handle scroll events
//   function handleScroll() {
//     const scrollPosition = window.scrollY + window.innerHeight / 3; // Adjusted to detect images earlier
    
//     // Find which image is most visible
//     let currentImageId = null;
//     let closestDistance = Infinity;
    
//     for (const id in imagePositions) {
//       const pos = imagePositions[id];
//       const middle = (pos.top + pos.bottom) / 2;
//       const distance = Math.abs(scrollPosition - middle);
      
//       if (distance < closestDistance) {
//         closestDistance = distance;
//         currentImageId = id;
//       }
//     }
    
//     // Update active thumbnail if we found a visible image
//     if (currentImageId) {
//       updateActiveThumbnail(currentImageId);
//     }
//   }
  
//   // Add click event to each thumbnail
//   thumbnails.forEach(thumbnail => {
//     thumbnail.addEventListener('click', function() {
//       const targetId = this.getAttribute('data-target');
//       scrollToImage(targetId);
//     });
//   });
  
//   // Add hover effects to image containers
//   imgContainers.forEach(container => {
//     container.addEventListener('mouseenter', function() {
//       this.style.zIndex = '10'; // Bring hovered image to front
//     });
    
//     container.addEventListener('mouseleave', function() {
//       this.style.zIndex = '1'; // Reset z-index on mouse leave
//     });
//   });
  
//   // Make sure all images are visible on initial load
//   imgContainers.forEach(container => {
//     container.style.display = 'block';
//   });
  
//   // Set initial active thumbnail (img3)
//   updateActiveThumbnail('img3');
  
//   // Calculate image positions after images are loaded
//   window.addEventListener('load', function() {
//     calculateImagePositions();
    
//     // Add scroll event listener
//     window.addEventListener('scroll', handleScroll);
//   });
  
//   // Recalculate positions on window resize
//   window.addEventListener('resize', calculateImagePositions);
// });



// document.addEventListener('DOMContentLoaded', function() {
//   // Get all thumbnails
//   const thumbnails = document.querySelectorAll('.thumbnail');
  
//   // Get all image containers
//   const imgContainers = document.querySelectorAll('.img-container');
  
//   // Create an object to store image positions
//   const imagePositions = {};
  
//   // Function to scroll to the target image smoothly
//   function scrollToImage(targetId) {
//     // Make sure all images are visible
//     imgContainers.forEach(container => {
//       container.style.display = 'block';
//     });
    
//     // Scroll to the selected image with offset to account for overlapping
//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//       const rect = targetElement.getBoundingClientRect();
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       const targetTop = rect.top + scrollTop;
      
//       // Scroll to a position slightly above the image to show it fully
//       window.scrollTo({
//         top: targetTop - 100, // Offset to account for header and to show the image properly
//         behavior: 'smooth'
//       });
//     }
    
//     // Update active class on thumbnails
//     updateActiveThumbnail(targetId);
//   }
  
//   // Function to update active thumbnail
//   function updateActiveThumbnail(targetId) {
//     thumbnails.forEach(thumb => {
//       thumb.classList.remove('active');
//       if (thumb.getAttribute('data-target') === targetId) {
//         thumb.classList.add('active');
//       }
//     });
//   }
  
//   // Calculate image positions for scroll detection
//   function calculateImagePositions() {
//     imgContainers.forEach(container => {
//       const rect = container.getBoundingClientRect();
//       imagePositions[container.id] = {
//         top: rect.top + window.scrollY,
//         bottom: rect.bottom + window.scrollY
//       };
//     });
//   }
  
//   // Handle scroll events
//   function handleScroll() {
//     const scrollPosition = window.scrollY + window.innerHeight / 3; // Adjusted to detect images earlier
    
//     // Find which image is most visible
//     let currentImageId = null;
//     let closestDistance = Infinity;
    
//     for (const id in imagePositions) {
//       const pos = imagePositions[id];
//       const middle = (pos.top + pos.bottom) / 2;
//       const distance = Math.abs(scrollPosition - middle);
      
//       if (distance < closestDistance) {
//         closestDistance = distance;
//         currentImageId = id;
//       }
//     }
    
//     // Update active thumbnail if we found a visible image
//     if (currentImageId) {
//       updateActiveThumbnail(currentImageId);
//     }
//   }
  
//   // Add click event to each thumbnail
//   thumbnails.forEach(thumbnail => {
//     thumbnail.addEventListener('click', function() {
//       const targetId = this.getAttribute('data-target');
//       scrollToImage(targetId);
//     });
//   });
  
//   // Add hover effects to image containers
//   imgContainers.forEach(container => {
//     container.addEventListener('mouseenter', function() {
//       this.style.zIndex = '20'; // Bring hovered image to front
//     });
    
//     container.addEventListener('mouseleave', function() {
//       // Reset z-index based on position in the document
//       const index = Array.from(imgContainers).indexOf(this);
//       if (index % 3 === 0) {
//         this.style.zIndex = '3';
//       } else if (index % 3 === 1) {
//         this.style.zIndex = '2';
//       } else {
//         this.style.zIndex = '1';
//       }
//     });
//   });
  
//   // Make sure all images are visible on initial load
//   imgContainers.forEach(container => {
//     container.style.display = 'block';
//   });
  
//   // Set initial active thumbnail (img3)
//   updateActiveThumbnail('img3');
  
//   // Calculate image positions after images are loaded
//   window.addEventListener('load', function() {
//     // Apply initial z-index based on position
//     imgContainers.forEach((container, index) => {
//       if (index % 3 === 0) {
//         container.style.zIndex = '3';
//       } else if (index % 3 === 1) {
//         container.style.zIndex = '2';
//       } else {
//         container.style.zIndex = '1';
//       }
//     });
    
//     calculateImagePositions();
    
//     // Add scroll event listener
//     window.addEventListener('scroll', handleScroll);
//   });
  
//   // Recalculate positions on window resize
//   window.addEventListener('resize', calculateImagePositions);
// });















// after



document.addEventListener('DOMContentLoaded', function() {
  // Get all thumbnails
  const thumbnails = document.querySelectorAll('.thumbnail');
  
  // Get all image containers
  const imgContainers = document.querySelectorAll('.img-container');
  
  // Create an object to store image positions
  const imagePositions = {};
  
  // Function to scroll to the target image smoothly
  function scrollToImage(targetId) {
    // Make sure all images are visible
    imgContainers.forEach(container => {
      container.style.display = 'block';
    });
    
    // Scroll to the selected image with offset to account for overlapping
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetTop = rect.top + scrollTop;
      
      // Scroll to a position slightly above the image to show it fully
      window.scrollTo({
        top: targetTop - 100, // Offset to account for header and to show the image properly
        behavior: 'smooth'
      });
    }
    
    // Update active class on thumbnails
    updateActiveThumbnail(targetId);
  }
  
  // Function to update active thumbnail
  function updateActiveThumbnail(targetId) {
    thumbnails.forEach(thumb => {
      thumb.classList.remove('active');
      if (thumb.getAttribute('data-target') === targetId) {
        thumb.classList.add('active');
      }
    });
  }
  
  // Calculate image positions for scroll detection
  function calculateImagePositions() {
    imgContainers.forEach(container => {
      const rect = container.getBoundingClientRect();
      imagePositions[container.id] = {
        top: rect.top + window.scrollY,
        bottom: rect.bottom + window.scrollY
      };
    });
  }
  
  // Handle scroll events
  function handleScroll() {
    const scrollPosition = window.scrollY + window.innerHeight * 0.7; // Detect elements earlier
    
    // Find which image is most visible
    let currentImageId = null;
    let closestDistance = Infinity;
    
    for (const id in imagePositions) {
      const pos = imagePositions[id];
      const middle = (pos.top + pos.bottom) / 2;
      const distance = Math.abs(scrollPosition - middle);
      
      if (distance < closestDistance) {
        closestDistance = distance;
        currentImageId = id;
      }
    }
    
    // Update active thumbnail if we found a visible image
    if (currentImageId) {
      updateActiveThumbnail(currentImageId);
    }
    
    // Check which elements are in viewport for animation
    checkElementsInViewport();
  }
  
  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.bottom >= 0
    );
  }
  
  // Function to check which elements are in viewport and animate them
  function checkElementsInViewport() {
    imgContainers.forEach(container => {
      if (isElementInViewport(container) && !container.classList.contains('in-view')) {
        // Add the in-view class to trigger the animation
        container.classList.add('in-view');
      }
    });
  }
  
  // Add animation classes based on position
  function setupAnimations() {
    imgContainers.forEach((container, index) => {
      // Remove any existing animation classes
      container.classList.remove('animate-from-left', 'animate-from-right', 'animate-from-top', 'animate-from-bottom', 'in-view');
      
      // Add animation class based on position in the grid
      if (index % 3 === 0) {
        // First in pattern - animate from left
        container.classList.add('animate-from-left');
      } else if (index % 3 === 1) {
        // Second in pattern - animate from right
        container.classList.add('animate-from-right');
      } else {
        // Third in pattern - alternate between top and bottom
        container.classList.add(index % 2 === 0 ? 'animate-from-top' : 'animate-from-bottom');
      }
      
      // Set initial z-index based on position
      if (index % 3 === 0) {
        container.style.zIndex = '3';
      } else if (index % 3 === 1) {
        container.style.zIndex = '2';
      } else {
        container.style.zIndex = '1';
      }
    });
    
    // Force reflow to ensure animations restart properly
    void document.documentElement.offsetHeight;
    
    // Trigger initial check for elements in viewport
    setTimeout(checkElementsInViewport, 100);
  }
  
  // Add click event to each thumbnail
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      
      // First make sure all images have their animation classes
      setupAnimations();
      
      // Then scroll to the target image
      setTimeout(() => {
        scrollToImage(targetId);
      }, 100);
    });
  });
  
  // Add hover effects to image containers
  imgContainers.forEach(container => {
    container.addEventListener('mouseenter', function() {
      this.style.zIndex = '20'; // Bring hovered image to front
    });
    
    container.addEventListener('mouseleave', function() {
      // Reset z-index based on position in the document
      const index = Array.from(imgContainers).indexOf(this);
      if (index % 3 === 0) {
        this.style.zIndex = '3';
      } else if (index % 3 === 1) {
        this.style.zIndex = '2';
      } else {
        this.style.zIndex = '1';
      }
    });
  });
  
  // Make sure all images are visible on initial load
  imgContainers.forEach(container => {
    container.style.display = 'block';
  });
  
  // Set initial active thumbnail (img3)
  updateActiveThumbnail('img3');
  
  // Function to animate images when page loads
  function animateImagesOnLoad() {
    // Reset all animations
    setupAnimations();
    
    // Calculate positions for scroll detection
    calculateImagePositions();
    
    // Trigger animations for visible elements
    setTimeout(() => {
      checkElementsInViewport();
    }, 300);
  }
  
  // Calculate image positions after images are loaded
  window.addEventListener('load', function() {
    // Animate images on load
    animateImagesOnLoad();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
  });
  
  // Recalculate positions on window resize
  window.addEventListener('resize', function() {
    calculateImagePositions();
    
    // Reset animations on significant resize
    const width = window.innerWidth;
    if (Math.abs(lastWidth - width) > 200) {
      setupAnimations();
      lastWidth = width;
    }
  });
  
  // Store initial width for resize comparison
  let lastWidth = window.innerWidth;
  
  // Initial setup
  setupAnimations();
  
  // Trigger animations for initially visible elements
  setTimeout(checkElementsInViewport, 500);
});