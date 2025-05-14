'use strict';

/* Adding event on element */
const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback)
        }
    }else{
        elem.addEventListener(type, callback);
    }
}

/* Navbar Toggle */
const navbar = document.querySelector("[data-navbar]"); 
const navTogglers = document.querySelectorAll("[data-nav-toggler]"); 
const navLinks = document.querySelectorAll("[data-nav-link]"); 
const overlay = document.querySelector("[data-overlay]"); 

const toggleNavbar = function () { 
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { 
    navbar.classList.remove("active"); 
    overlay.classList.remove("active");  
}

addEventOnElem(navLinks, "click", closeNavbar);

/* Header Active */
const header = document.querySelector("[data-header]");

const backTopBtn = document.querySelector("[data-back-top-btn]"); 

window.addEventListener("scroll", function () { 
    if (window.scrollY >= 100) { 
        header.classList.add("active");
        backTopBtn.classList.add("active"); 
    } else { 
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});

const sections = document.querySelectorAll("[data-section]");

const reveal = function () { 
    for (let i = 0; i < sections.length; i++) {
        
        if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
            sections[i].classList.add("active"); 
        } 
    } 
} 

reveal(); 
addEventOnElem(window, "scroll", reveal);


document.addEventListener("DOMContentLoaded", function () {
    const serviceLinks = document.querySelectorAll(".service-link");
    const messageField = document.getElementById("message");

    // When a product title is clicked, update the message field
    serviceLinks.forEach(link => {
        link.addEventListener("click", function () {
            const serviceName = this.getAttribute("data-service");
            messageField.value = `I would like more information about: ${serviceName}`;
        });
    });

    // Check if there's a service in the URL and pre-fill the message
    const urlParams = new URLSearchParams(window.location.search);
    const selectedService = urlParams.get("service");
    if (selectedService) {
        messageField.value = `I would like more information about: ${selectedService}`;
    }
});

// Service content for each card (using index for reliability)
  const serviceContents = [
    {
      title: "Conscious Counseling & Life-Changing Mentorship",
      description: `
        <p>At <strong>Kora Holistic</strong>, healing is more than just overcoming challenges—it's about awakening to your true self and unlocking the limitless gifts the universe has for you. <strong>Conscious Counseling & Life-Changing Mentorship</strong> is a deeply personal and transformative journey where emotional healing meets soul alignment, guiding you toward a life of balance, clarity, and fulfillment.</p>
        <p><strong>🌿 Conscious Counseling: Healing from Within</strong><br>
        This is a sacred space for you to express, release, and heal. Through <strong>deep listening, emotional support, and intuitive guidance</strong>, I help you navigate the wounds, fears, and traumas that have kept you from fully embracing life. Together, we remove the invisible masks that cloud your vision, allowing you to reconnect with your inner wisdom and see the world—and yourself—with new eyes.</p>
        <p><strong>✨ Life-Changing Mentorship: Awakening Your True Potential</strong><br>
        Healing is just the beginning. Beyond emotional support, this mentorship is about guiding you toward alignment with your highest self. Through <strong>energy healing, spiritual practices, and holistic techniques</strong>, we work on shifting your mindset, raising your vibration, and stepping into a life of abundance, purpose, and joy. This is a space of empowerment, where you are supported not just in healing, but in <strong>thriving.</strong></p>
        <p>💙 <strong>With this approach, you don't just heal—you transform.</strong> You learn to flow with life, embrace its beauty, and step into the limitless possibilities that await you. The universe is ready to meet you where you are. Are you ready to take the first step? ✨</p>
      `
    },
    {
      title: "Healing Sessions & Energy Work: A Journey to Wholeness",
      description: `
        <p>Healing is not just about overcoming pain—it's about realigning with your true essence, restoring harmony, and unlocking the energy flow that connects you to the universe. Every session is a sacred experience, designed to cleanse, renew, and elevate your mind, body, and spirit.</p>
        <p><strong>🌿 Holistic Healing Modalities</strong><br>
        Each person's healing path is unique. I intuitively combine different techniques to meet your specific needs, helping you release what no longer serves you and step into a state of deep peace and alignment. These sessions may include:</p>
        <p><strong>✨ Sacred Plant-Based Healing Baths</strong> – Purify and reset your energy with herbal infusions tailored to your spiritual and emotional needs.<br>
        <strong>✨ Chakra Cleansing & Aura Renewal</strong> – Remove energetic blockages, restore balance, and strengthen your vibrational field.<br>
        <strong>✨ Angel Oracle Readings & Channeling</strong> – Receive divine guidance and messages from the spiritual realm.<br>
        <strong>✨ Crystal Therapy & Healing with Angels</strong> – Harness the power of crystals and angelic energy to heal emotional wounds and restore harmony.<br>
        <strong>✨ Egg Therapy for Spiritual Cleansing</strong> – Release stagnant energy and purify your soul with this ancient technique.<br>
        <strong>✨ Emotional Healing for Loss, Anxiety & Self-Love</strong> – Transform grief, fears, and self-doubt into empowerment and inner peace.<br>
        <strong>✨ Medicinal Rapeh, Aromatherapy & Herbal Remedies</strong> – Connect with the wisdom of nature to support your emotional, mental, and spiritual well-being.<br>
        <strong>✨ Energetic House & Space Cleansing</strong> – Clear negative energy and create a sanctuary of peace in your home or workspace.</p>
        <p><strong>💫 A Personalized Experience for Deep Healing</strong><br>
        No two sessions are the same—each is guided by intuition and your unique energy at that moment. Whether you seek clarity, emotional release, or spiritual awakening, these healing experiences are designed to nurture your soul, realign your path, and awaken your inner light.</p>
        <p>🦋 Healing is the key to transformation. Are you ready to step into your highest energy?</p>
      `
    },
    {
      title: "Mind, Body & Soul Reset Package",
      description: `
        <p>Healing is not just about feeling better—it's about becoming the best version of yourself on every level. The <strong>Mind, Body & Soul Reset Package</strong> is a deeply transformative journey designed to help you heal emotional wounds, realign your energy, and step into a life of balance, clarity, and purpose.</p>
        <p>This personalized package provides continuous support, structure, and tailored guidance, ensuring that your healing journey is not just a temporary shift but a profound and lasting transformation.</p>
        <p><strong>🌿 What's Included in Your Personalized Reset?</strong></p>
        <p><strong>✨ Conscious Counseling & Mentorship</strong> – Deep emotional support and guidance to help you heal past wounds, overcome fears, and step into your power.<br>
        <strong>✨ Energy Healing Sessions</strong> – Intuitive therapies like chakra cleansing, aura renewal, crystal healing, and angelic energy work to restore balance.<br>
        <strong>✨ Personalized Nutrition & Wellness Plan</strong> – A customized approach designed by a Doctor specialist in sports medicine to nourish your body and support your healing process.<br>
        <strong>✨ Yoga & Movement Therapy</strong> – Guided sessions to release emotional blocks, increase vitality, and connect with your body.<br>
        <strong>✨ Spiritual & Emotional Healing Exercises</strong> – Personalized practices to help you integrate healing into your daily life.<br>
        <strong>✨ Herbal Healing & Plant-Based Rituals</strong> – Baths, teas, and remedies tailored to cleanse and uplift your energy.<br>
        <strong>✨ Meditations, Audios & Books</strong> – Specially curated resources to expand your consciousness and deepen your transformation.<br>
        <strong>✨ Virtual Healing Journal</strong> – A sacred space to track your journey, reflect, and stay committed to your progress.<br>
        <strong>✨ Energetic Protection & Cleansing Practices</strong> – Learn how to protect your energy, stay grounded, and maintain spiritual alignment.</p>
        <p><strong>💫 Why Choose the Mind, Body & Soul Reset Package?</strong><br>
        Healing takes time, commitment, and the right guidance. Many people start their journey but struggle to maintain consistency, delaying their progress. This package ensures you receive the ongoing support, structure, and intuitive healing you need to fully transform.</p>
        <p>This is more than just a healing program—it's a sacred investment in yourself. A chance to reset, renew, and rise into the life you were meant to live.</p>
        <p>💙 Are you ready to realign, heal, and transform? Your journey starts now.</p>
      `
    }
  ];

  // Get all service card buttons
  const serviceButtons = document.querySelectorAll('.service-card .btn');
  const modal = document.getElementById('serviceModal');
  const modalText = document.getElementById('modalText');
  const closeModal = document.querySelector('.close-modal');
  const contactButton = document.querySelector('.modal-btn');

  // Add click event to each service button
  serviceButtons.forEach((button, index) => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Use the index to get the correct service content
      const serviceContent = serviceContents[index];
      
      // Set the modal title and HTML content
      document.getElementById('modalTitle').textContent = serviceContent.title;
      modalText.innerHTML = serviceContent.description; // Using innerHTML to render HTML content

      // Display the modal
      modal.style.display = 'block';

      // Scroll modal content to top (AFTER rendering)
    setTimeout(() => {
      document.getElementById('modalContent').scrollTop = 0;
    }, 0);
    });
  });

  // Close modal when clicking the X
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Close modal when clicking "Contact Us for This Service" button
contactButton.addEventListener('click', function() {
  modal.style.display = 'none';
});

  // Close modal when clicking outside the modal content
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  //EmailJS
  const form = document.getElementById('form');
    const submitButton = document.getElementById('button');
    const formMessage = document.getElementById('form-message');
    
    // Simple validation for fields
    function validateField(field) {
        const value = field.value.trim();
        const fieldGroup = field.closest('.input-group');
        
        // Remove existing error message if present
        const existingError = fieldGroup.querySelector('.error-text');
        if (existingError) {
            existingError.remove();
        }
        
        // Check if field is empty
        if (!value) {
            fieldGroup.classList.add('error');
            const errorText = document.createElement('span');
            errorText.classList.add('error-text');
            errorText.textContent = `${field.placeholder} is required`;
            fieldGroup.appendChild(errorText);
            return false;
        }
        
        // Email validation
        if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            fieldGroup.classList.add('error');
            const errorText = document.createElement('span');
            errorText.classList.add('error-text');
            errorText.textContent = 'Please enter a valid email address';
            fieldGroup.appendChild(errorText);
            return false;
        }
        
        fieldGroup.classList.remove('error');
        return true;
    }
    
    // Reset validation state when typing
    document.querySelectorAll('.input-group input, .input-group textarea').forEach(field => {
        field.addEventListener('input', () => {
            field.closest('.input-group').classList.remove('error');
            const errorText = field.closest('.input-group').querySelector('.error-text');
            if (errorText) {
                errorText.remove();
            }
        });
    });
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Reset form message
        formMessage.className = 'form-message';
        formMessage.textContent = '';
        
        // Validate all fields
        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const messageField = document.getElementById('message');
        
        const isNameValid = validateField(nameField);
        const isEmailValid = validateField(emailField);
        const isMessageValid = validateField(messageField);
        
        if (!isNameValid || !isEmailValid || !isMessageValid) {
            showFormMessage('Please correct the errors above', 'error');
            return;
        }
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.classList.add('is-loading');
        
        // EmailJS configuration
        const serviceID = 'default_service';
        const templateID = 'template_1s3muw6';
        
        // Check if EmailJS is available
        if (typeof emailjs === 'undefined') {
            console.error('EmailJS is not loaded');
            showFormMessage('Email service is not available. Please try again later.', 'error');
            resetSubmitButton();
            return;
        }
        
        emailjs.sendForm(serviceID, templateID, form)
            .then(() => {
                // Show success message
                showFormMessage('Thank you! Your message has been sent successfully.', 'success');
                
                // Reset form
                form.reset();
            })
            .catch((error) => {
                console.error('EmailJS error:', error);
                showFormMessage('Sorry, there was an error sending your message. Please try again later.', 'error');
            })
            .finally(() => {
                // Reset button state
                resetSubmitButton();
            });
    });
    
    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        
        // Scroll to message if it's not visible
        setTimeout(() => {
            if (!isElementInViewport(formMessage)) {
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }, 100);
    }
    
    function resetSubmitButton() {
        submitButton.disabled = false;
        submitButton.classList.remove('is-loading');
    }
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };