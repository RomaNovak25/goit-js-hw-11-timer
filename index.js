const refs = {
  timerAll: document.querySelector('.value'),
};
class Timer {
  constructor({ selector }) {
    this.selector = selector;

    this.selectorTimer = document.querySelector(selector);

    this.daysText = this.selectorTimer.children[0].children[0];
    this.hoursText = this.selectorTimer.children[1].children[0];
    this.minsText = this.selectorTimer.children[2].children[0];
    this.secsText = this.selectorTimer.children[3].children[0];
  }

  start() {
    setInterval(() => {
      const nextTime = new Date();
      const currentTime = new Date(2021, 7, 18, 10, 10, 55);

      let result = currentTime - nextTime;
      // const timerTime = (result / 1000).toFixed(0);

      //////////////////// Подсчет секунд ////////////////////
      const secs = pad(Math.floor((result % (1000 * 60)) / 1000));

      //////////////////// Подсчет минут ////////////////////
      const mins = pad(Math.floor((result % (1000 * 60 * 60)) / (1000 * 60)));

      //////////////////// Подсчет часов ////////////////////
      const hours = pad(Math.floor((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

      //////////////////// Подсчет дней ////////////////////
      const days = pad(Math.floor(result / (1000 * 60 * 60 * 24)));

      this.daysText.textContent = days < 10 ? `${days}` : days;
      this.hoursText.textContent = hours < 10 ? `${hours}` : hours;
      this.minsText.textContent = mins < 10 ? `${mins}` : mins;
      this.secsText.textContent = secs < 10 ? `${secs}` : secs;

      //////////////////// Запуск таймера ////////////////////

      return `${days}:${hours}:${mins}:${secs}`;
      timerRef();
    }, 1000);
  }
}

const timer = new Timer({
  selector: '#timer-1',
  targetDate: new Date('Aug 9, 2021'),
});

//////////////////// Запуск таймера ////////////////////
timer.start();

//////////////////// Виводим час в форматі 00:00:00:00 ////////////////////
function timerRef() {
  refs.timerAll.textContent = `${days}:${hours}:${mins}:${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */