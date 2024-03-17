document.addEventListener("DOMContentLoaded", function () {
    function getRandomPercentage() {
      return Math.floor(Math.random() * 101); 
    }
  
    function updateRandomSensorReadings() {
      var sensors = document.querySelectorAll(".project-box");
  
      sensors.forEach(function(sensor) {
        var progressBar = sensor.querySelector(".box-progress");
        var percentageText = sensor.querySelector(".box-progress-percentage");
  
        var randomPercentage = getRandomPercentage();
  
        progressBar.style.width = randomPercentage + "%";
        percentageText.textContent = randomPercentage + "%";
      });
    }
  
    updateRandomSensorReadings();
  
    setInterval(updateRandomSensorReadings, 2000); 
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var modeSwitch = document.querySelector(".mode-switch");

    modeSwitch.addEventListener("click", function () {
      document.documentElement.classList.toggle("dark");
      modeSwitch.classList.toggle("active");
    });

    var listView = document.querySelector(".list-view");
    var gridView = document.querySelector(".grid-view");
    var projectsList = document.querySelector(".project-boxes");

    listView.addEventListener("click", function () {
      gridView.classList.remove("active");
      listView.classList.add("active");
      projectsList.classList.remove("jsGridView");
      projectsList.classList.add("jsListView");
    });

    gridView.addEventListener("click", function () {
      gridView.classList.add("active");
      listView.classList.remove("active");
      projectsList.classList.remove("jsListView");
      projectsList.classList.add("jsGridView");
    });

    document
      .querySelector(".messages-btn")
      .addEventListener("click", function () {
        document.querySelector(".messages-section").classList.add("show");
      });

    document
      .querySelector(".messages-close")
      .addEventListener("click", function () {
        document.querySelector(".messages-section").classList.remove("show");
      });
  });