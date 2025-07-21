// Main JavaScript functionality
document.addEventListener("DOMContentLoaded", () => {
  // Initialize navigation
  initNavigation()

  // Initialize animations
  initAnimations()

  // Initialize contact form
  initContactForm()

  // Initialize service details
  initServiceDetails()

  // Initialize smooth scrolling
  initSmoothScrolling()

  // Add phone formatting to phone inputs
  const phoneInputs = document.querySelectorAll('input[type="tel"]')
  phoneInputs.forEach((input) => {
    input.addEventListener("input", function () {
      formatPhoneNumber(this)
    })
  })
})

// Navigation functionality
function initNavigation() {
  // Handle navigation links
  document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      // Remove active class from all links
      document.querySelectorAll(".navbar-nav .nav-link").forEach((l) => l.classList.remove("active"))
      // Add active class to clicked link
      this.classList.add("active")
    })
  })

  // Handle CTA buttons
  document.querySelectorAll('a[href="servicii.html"]').forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      window.location.href = "servicii.html"
    })
  })

  document.querySelectorAll('a[href="contact.html"]').forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      window.location.href = "contact.html"
    })
  })

  document.querySelectorAll('a[href="index.html"]').forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      window.location.href = "index.html"
    })
  })
}

// Animation initialization
function initAnimations() {
  // Add scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in")
      }
    })
  }, observerOptions)

  // Observe elements for animation
  document.querySelectorAll(".feature-card, .service-card, .process-step").forEach((el) => {
    observer.observe(el)
  })
}

// Contact form functionality
function initContactForm() {
  const form = document.getElementById("contactForm")
  if (!form) return

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Validate form
    if (!form.checkValidity()) {
      e.stopPropagation()
      form.classList.add("was-validated")
      return
    }

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]')
    const originalText = submitBtn.innerHTML
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Se trimite...'
    submitBtn.disabled = true

    // Simulate form submission
    setTimeout(() => {
      // Reset form
      form.reset()
      form.classList.remove("was-validated")

      // Reset button
      submitBtn.innerHTML = originalText
      submitBtn.disabled = false

      // Show success modal
      const successModal = document.getElementById("successModal")
      if (successModal) {
        successModal.style.display = "block"
      }

      // Log form data (in real app, this would be sent to server)
      console.log("Form submitted successfully")
    }, 2000)
  })

  // Real-time validation
  const inputs = form.querySelectorAll("input[required], textarea[required]")
  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      if (this.checkValidity()) {
        this.classList.remove("is-invalid")
        this.classList.add("is-valid")
      } else {
        this.classList.remove("is-valid")
        this.classList.add("is-invalid")
      }
    })
  })
}

// Service details functionality
function initServiceDetails() {
  window.showServiceDetails = (serviceType) => {
    const modal = document.getElementById("serviceModal")
    const modalTitle = document.getElementById("serviceModalTitle")
    const modalBody = document.getElementById("serviceModalBody")

    const serviceDetails = {
      rezidential: {
        title: "Construcții Rezidențiale",
        image: "residential-construction.png",
        content: `
      <div class="row g-4">
        <div class="col-12 mb-3">
          <img src="residential-service.png" alt="Construcții Rezidențiale" class="img-fluid rounded">
        </div>
        <div class="col-md-6">
          <h5>Servicii incluse:</h5>
          <ul class="list-unstyled">
            <li><i class="fas fa-check text-success me-2"></i>Proiectare arhitecturală</li>
            <li><i class="fas fa-check text-success me-2"></i>Obținere autorizații</li>
            <li><i class="fas fa-check text-success me-2"></i>Fundații și structură</li>
            <li><i class="fas fa-check text-success me-2"></i>Zidărie și tencuieli</li>
            <li><i class="fas fa-check text-success me-2"></i>Acoperișuri și învelitori</li>
            <li><i class="fas fa-check text-success me-2"></i>Instalații complete</li>
            <li><i class="fas fa-check text-success me-2"></i>Finisaje interioare</li>
          </ul>
        </div>
        <div class="col-md-6">
          <h5>Avantaje:</h5>
          <ul class="list-unstyled">
            <li><i class="fas fa-star text-warning me-2"></i>Garanție 10 ani</li>
            <li><i class="fas fa-star text-warning me-2"></i>Materiale premium</li>
            <li><i class="fas fa-star text-warning me-2"></i>Echipă specializată</li>
            <li><i class="fas fa-star text-warning me-2"></i>Respectarea termenelor</li>
            <li><i class="fas fa-star text-warning me-2"></i>Suport post-construcție</li>
          </ul>
          <div class="mt-4">
            <h6>Preț orientativ:</h6>
            <p class="text-muted">De la <strong>400 EUR/mp</strong> construit</p>
          </div>
        </div>
      </div>
    `,
      },
      renovari: {
        title: "Renovări și Modernizări",
        image: "renovation-construction.png",
        content: `
      <div class="row g-4">
        <div class="col-12 mb-3">
          <img src="renovation-service.png" alt="Renovări și Modernizări" class="img-fluid rounded">
        </div>
        <div class="col-md-6">
          <h5>Servicii incluse:</h5>
          <ul class="list-unstyled">
            <li><i class="fas fa-check text-success me-2"></i>Evaluare tehnică</li>
            <li><i class="fas fa-check text-success me-2"></i>Demolări selective</li>
            <li><i class="fas fa-check text-success me-2"></i>Refacere instalații</li>
            <li><i class="fas fa-check text-success me-2"></i>Izolații termice</li>
            <li><i class="fas fa-check text-success me-2"></i>Compartimentări noi</li>
            <li><i class="fas fa-check text-success me-2"></i>Finisaje moderne</li>
            <li><i class="fas fa-check text-success me-2"></i>Design interior</li>
          </ul>
        </div>
        <div class="col-md-6">
          <h5>Specializări:</h5>
          <ul class="list-unstyled">
            <li><i class="fas fa-home text-primary me-2"></i>Apartamente</li>
            <li><i class="fas fa-home text-primary me-2"></i>Case vechi</li>
            <li><i class="fas fa-home text-primary me-2"></i>Mansarde</li>
            <li><i class="fas fa-home text-primary me-2"></i>Băi și bucătării</li>
            <li><i class="fas fa-home text-primary me-2"></i>Eficiență energetică</li>
          </ul>
          <div class="mt-4">
            <h6>Preț orientativ:</h6>
            <p class="text-muted">De la <strong>250 EUR/mp</strong> renovat</p>
          </div>
        </div>
      </div>
    `,
      },
      comercial: {
        title: "Construcții Comerciale",
        image: "commercial-construction.png",
        content: `
      <div class="row g-4">
        <div class="col-12 mb-3">
          <img src="commercial-service.png" alt="Construcții Comerciale" class="img-fluid rounded">
        </div>
        <div class="col-md-6">
          <h5>Tipuri de proiecte:</h5>
          <ul class="list-unstyled">
            <li><i class="fas fa-building text-primary me-2"></i>Clădiri de birouri</li>
            <li><i class="fas fa-building text-primary me-2"></i>Centre comerciale</li>
            <li><i class="fas fa-building text-primary me-2"></i>Hale industriale</li>
            <li><i class="fas fa-building text-primary me-2"></i>Depozite logistice</li>
            <li><i class="fas fa-building text-primary me-2"></i>Spații retail</li>
            <li><i class="fas fa-building text-primary me-2"></i>Restaurante</li>
            <li><i class="fas fa-building text-primary me-2"></i>Hoteluri</li>
          </ul>
        </div>
        <div class="col-md-6">
          <h5>Servicii complete:</h5>
          <ul class="list-unstyled">
            <li><i class="fas fa-check text-success me-2"></i>Studiu de fezabilitate</li>
            <li><i class="fas fa-check text-success me-2"></i>Proiectare tehnică</li>
            <li><i class="fas fa-check text-success me-2"></i>Management proiect</li>
            <li><i class="fas fa-check text-success me-2"></i>Execuție la cheie</li>
            <li><i class="fas fa-check text-success me-2"></i>Certificări necesare</li>
          </ul>
          <div class="mt-4">
            <h6>Preț orientativ:</h6>
            <p class="text-muted">De la <strong>300 EUR/mp</strong> construit</p>
          </div>
        </div>
      </div>
    `,
      },
    }

    const service = serviceDetails[serviceType]
    if (service) {
      modalTitle.textContent = service.title
      modalBody.innerHTML = service.content
      if (modal) {
        modal.style.display = "block"
      }
    }
  }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Utility functions
function showNotification(message, type = "success") {
  // Create notification element
  const notification = document.createElement("div")
  notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`
  notification.style.cssText = "top: 100px; right: 20px; z-index: 9999; min-width: 300px;"
  notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `

  document.body.appendChild(notification)

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove()
    }
  }, 5000)
}

// Add loading states for buttons
function addLoadingState(button, loadingText = "Se încarcă...") {
  const originalText = button.innerHTML
  button.innerHTML = `<i class="fas fa-spinner fa-spin me-2"></i>${loadingText}`
  button.disabled = true

  return function removeLoadingState() {
    button.innerHTML = originalText
    button.disabled = false
  }
}

// Phone number formatting
function formatPhoneNumber(input) {
  let value = input.value.replace(/\D/g, "")
  if (value.length >= 10) {
    value = value.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3")
  }
  input.value = value
}
