

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('backgroundMusic');

    // 如果音樂已加載，則播放音樂
    audio.addEventListener('canplaythrough', function() {
    audio.play();
});

    // 在頁面切換時仍然播放音樂
    window.addEventListener('blur', function() {
    audio.pause();
});

    window.addEventListener('focus', function() {
    audio.play();
});
});
