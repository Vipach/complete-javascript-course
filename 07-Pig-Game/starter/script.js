'use strict'; // Sử dụng chế độ nghiêm ngặt để tránh các lỗi ngầm trong JavaScript.

// Selecting elements (Lựa chọn các phần tử DOM mà chúng ta sẽ thao tác)
const player0El = document.querySelector('.player--0'); // Lấy phần tử đại diện cho người chơi 0.
const player1El = document.querySelector('.player--1'); // Lấy phần tử đại diện cho người chơi 1.
const score0El = document.querySelector('#score--0');   // Lấy phần tử hiển thị điểm tổng của người chơi 0.
const score1El = document.getElementById('score--1');   // Lấy phần tử hiển thị điểm tổng của người chơi 1.
const current0El = document.getElementById('current--0'); // Lấy phần tử hiển thị điểm hiện tại của người chơi 0.
const current1El = document.getElementById('current--1'); // Lấy phần tử hiển thị điểm hiện tại của người chơi 1.

const diceEl = document.querySelector('.dice');          // Lấy phần tử biểu diễn xúc xắc.
const btnNew = document.querySelector('.btn--new');      // Lấy nút "New Game".
const btnRoll = document.querySelector('.btn--roll');    // Lấy nút "Roll Dice".
const btnHold = document.querySelector('.btn--hold');    // Lấy nút "Hold".

// Biến toàn cục (state variables)
let scores, currentScore, activePlayer, playing;

// Starting conditions (Cài đặt trạng thái ban đầu cho trò chơi)
const init = function () {
  scores = [0, 0]; // Điểm tổng của cả hai người chơi, bắt đầu từ 0.
  currentScore = 0; // Điểm tạm thời của người chơi hiện tại.
  activePlayer = 0; // Người chơi bắt đầu là 0 (người chơi đầu tiên).
  playing = true;   // Trạng thái của trò chơi (đang chơi hay đã kết thúc).

  // Đặt lại điểm trên giao diện người dùng (UI)
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // Ẩn xúc xắc
  diceEl.classList.add('hidden');

  // Xóa lớp "winner" và đặt người chơi 0 là người chơi hiện tại
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init(); // Gọi hàm khởi tạo trạng thái ban đầu.

// Hàm chuyển đổi người chơi
const switchPlayer = function () {
  // Đặt lại điểm hiện tại của người chơi hiện tại về 0 trên giao diện
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  currentScore = 0; // Đặt lại điểm tạm thời.
  activePlayer = activePlayer === 0 ? 1 : 0; // Chuyển sang người chơi khác.
  
  // Thay đổi lớp CSS để chỉ định người chơi hiện tại
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Xử lý sự kiện khi nhấn nút "Roll Dice"
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Tạo một giá trị ngẫu nhiên từ 1 đến 6 (số trên xúc xắc)
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Hiển thị xúc xắc tương ứng
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; // Cập nhật hình ảnh xúc xắc theo số ngẫu nhiên.

    // 3. Kiểm tra nếu giá trị xúc xắc không phải là 1
    if (dice !== 1) {
      // Cộng điểm xúc xắc vào điểm hiện tại
      currentScore += dice;
      // Hiển thị điểm hiện tại lên giao diện
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Chuyển sang người chơi khác nếu xúc xắc là 1
      switchPlayer();
    }
  }
});

// Xử lý sự kiện khi nhấn nút "Hold"
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Cộng điểm hiện tại vào điểm tổng của người chơi hiện tại
    scores[activePlayer] += currentScore;

    // Cập nhật điểm tổng lên giao diện
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Kiểm tra xem người chơi có đạt >= 100 điểm không
    if (scores[activePlayer] >= 100) {
      // Kết thúc trò chơi
      playing = false; // Đặt trạng thái trò chơi là kết thúc.
      diceEl.classList.add('hidden'); // Ẩn xúc xắc.

      // Thêm lớp CSS "winner" cho người chơi chiến thắng
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      // Xóa lớp CSS "active" vì trò chơi đã kết thúc
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Nếu chưa thắng, chuyển sang người chơi khác
      switchPlayer();
    }
  }
});

// Xử lý sự kiện khi nhấn nút "New Game"
btnNew.addEventListener('click', init); // Gọi lại hàm khởi tạo để đặt lại trạng thái ban đầu.

