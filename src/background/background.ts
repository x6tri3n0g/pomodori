console.log("[Pomodori] Background script loaded!");

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "pomodoroTimer") {
    // 타이머가 끝났을 때 알림 표시
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icons/icon48.png",
      title: "Pomodori",
      message: "Time is up!",
    });
  }
});

// 예: 알람 스케줄 (25분)
function startPomodoro() {
  chrome.alarms.create("pomodoroTimer", {
    delayInMinutes: 1,
  });
}

// 다른 페이지(팝업) 등에서 메시지를 받으면, 알람 생성 시작
chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  if (request.command === "start") {
    startPomodoro();
    sendResponse({ status: "started" });
  }
});
