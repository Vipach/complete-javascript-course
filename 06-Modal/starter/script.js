'use strict'; // Kích hoạt chế độ nghiêm ngặt để bắt lỗi cú pháp và code không an toàn

// Chọn phần tử modal (cửa sổ pop-up) từ DOM
const modal = document.querySelector('.modal');

// Chọn phần tử overlay (lớp phủ mờ nền phía sau modal)
const overlay = document.querySelector('.overlay');

// Chọn nút đóng modal
const btnCloseModal = document.querySelector('.close-modal');

// Chọn tất cả các nút mở modal (có thể có nhiều nút trên trang)
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Hàm mở modal (bỏ class 'hidden' để hiển thị modal và overlay)
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Hàm đóng modal (thêm class 'hidden' để ẩn modal và overlay)
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Duyệt qua tất cả các nút mở modal và thêm sự kiện click cho từng nút
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// Thêm sự kiện click cho nút đóng modal
btnCloseModal.addEventListener('click', closeModal);

// Thêm sự kiện click vào overlay để đóng modal
overlay.addEventListener('click', closeModal);

// Thêm sự kiện khi nhấn phím bất kỳ trên bàn phím
// Nếu nhấn phím 'Escape' và modal đang mở thì sẽ đóng modal
// Kiểm tra bằng e.key để biết phím nào đã được nhấn

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
