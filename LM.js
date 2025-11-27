const lights = document.querySelectorAll(".light")
const statusEl = document.getElementById("status")
const timerEl = document.getElementById("timer")


const RED_TIME = 40000 
const YELLOW_TIME = 2500 
const GREEN_TIME = 45000 
const TRANSITION = 250 


function removeAllActive() {
  lights.forEach((light) => light.classList.remove("active"))
}

function showRed() {
  removeAllActive()
  lights[0].classList.add("active")
  statusEl.textContent = "BERHENTI (Stop)"
  statusEl.className = "status red-status"
  startCountdown(RED_TIME)
}

function showYellow() {
  removeAllActive()
  lights[1].classList.add("active")
  statusEl.textContent = "SIAP (Get Ready)"
  statusEl.className = "status yellow-status"
  startCountdown(YELLOW_TIME)
}

function showGreen() {
  removeAllActive()
  lights[2].classList.add("active")
  statusEl.textContent = "JALAN (Go)"
  statusEl.className = "status green-status"
  startCountdown(GREEN_TIME)
}

function startCountdown(duration) {
  let remaining = duration / 1000
  timerEl.textContent = Math.ceil(remaining)

  const interval = setInterval(() => {
    remaining -= 0.1
    timerEl.textContent = Math.ceil(remaining)

    if (remaining <= 0) {
      clearInterval(interval)
    }
  }, 100)
}

function startTrafficCycle() {
  
  showRed()

 
  setTimeout(() => {
    showYellow()
  }, RED_TIME)

  
  setTimeout(() => {
    showGreen()
  }, RED_TIME + YELLOW_TIME)

  
  setTimeout(
    () => {
      startTrafficCycle()
    },
    RED_TIME + YELLOW_TIME + GREEN_TIME,
  )
}


startTrafficCycle()
