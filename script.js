document.addEventListener('DOMContentLoaded', () => {
    const setAlarmBtn = document.getElementById('set-alarm-btn');
    const clearAlarmBtn = document.getElementById('clear-alarm-btn');
    const alarmDateInput = document.getElementById('alarm-date');
    const alarmTimeInput = document.getElementById('alarm-time');
    const alarmMessage = document.getElementById('alarm-message');

    let alarmTimeout;

    // Встановлення будильника
    setAlarmBtn.addEventListener('click', () => {
        const alarmDate = alarmDateInput.value;
        const alarmTime = alarmTimeInput.value;

        if (!alarmDate || !alarmTime) {
            alert('Будь ласка, введіть дату та час будильника.');
            return;
        }

        const alarmDateTime = new Date(`${alarmDate}T${alarmTime}`);
        const currentTime = new Date();

        if (alarmDateTime <= currentTime) {
            alert('Будь ласка, введіть майбутню дату та час.');
            return;
        }

        const timeToAlarm = alarmDateTime - currentTime;

        alarmTimeout = setTimeout(() => {
            alarmMessage.classList.remove('hidden');
        }, timeToAlarm);

        alert(`Будильник встановлено на ${alarmDate} о ${alarmTime}.`);
    });

    // Вимкнення будильника
    clearAlarmBtn.addEventListener('click', () => {
        clearTimeout(alarmTimeout);
        alarmMessage.classList.add('hidden');
        alert('Будильник вимкнено.');
    });
});
