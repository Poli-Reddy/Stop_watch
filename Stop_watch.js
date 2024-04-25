var time = document.getElementById('time');
    var startButton = document.getElementById('start');
    var stopButton = document.getElementById('stop');
    var resetButton = document.getElementById('reset');
    var bgVideo = document.getElementById('bgVideo');

    var stopwatchInterval;
    var elapsedTime = 0;

    function updateTime() {
        var milliseconds = elapsedTime % 1000;
        var seconds = Math.floor(elapsedTime / 1000) % 60;
        var minutes = Math.floor(elapsedTime / (1000 * 60));
        time.textContent = minutes.toString().padStart(2, '0') + ':' +
                           seconds.toString().padStart(2, '0') + ':' +
                           milliseconds.toString().padStart(3, '0');
    }

    startButton.addEventListener('click', function() {
        stopwatchInterval = setInterval(function() {
            elapsedTime += 10; 
            updateTime();
        }, 10);
        bgVideo.play();
        startButton.disabled = true;
        stopButton.disabled = false;
        resetButton.disabled = false;
    });

    stopButton.addEventListener('click', function() {
        clearInterval(stopwatchInterval);
        bgVideo.pause();
        startButton.disabled = false;
        stopButton.disabled = true;
    });

    resetButton.addEventListener('click', function() {
        clearInterval(stopwatchInterval);
        elapsedTime = 0;
        updateTime();
        bgVideo.currentTime = 0;
        bgVideo.play();
        startButton.disabled = false;
        stopButton.disabled = true;
        resetButton.disabled = true;
    });

    setTimeout(function() {
        document.getElementById('stopwatch').style.display = 'block';
    }, 10000);