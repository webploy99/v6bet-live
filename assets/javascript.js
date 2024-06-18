
function detail(id){
  location.href = `detail.html?id=${id}`;
}
function url(){
  location.href = ('https://www.hay88.one/?inviteCode=2933113');
}
$(document).ready(function(){
  const FunVisible = () => {
    if (window.pageYOffset > 200) {
      $("header").addClass("is-sticky");
    } else {
      $("header").removeClass("is-sticky");
    }
  };
  window.addEventListener("scroll", FunVisible);
  const swiper = new Swiper('#swiper1', {
    loop: true,
    slidesPerView: '1',
    pagination: {
      el: '#swiper-pagination1',
    },

    navigation: {
      nextEl: '#swiper-button-next1',
      prevEl: '#swiper-button-prev1',
    },
    autoplay: {
      delay: 3000,
    }
  
  });
  const header = `
<div class="container max-w-screen-xl mx-auto relative py-2" id="">
        <div class="flex items-center justify-between ">

          <div class="menu-icon absolute lg:hidden  gap-3 p-4">
            <label class="hamburger">
              <svg viewBox="0 0 32 32">
                <path
                  class="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path class="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>

          <div class="max-w-80 mx-auto lg:mx-0">
          <a href="index.html">
            <img src="./assets/images/1636632157853405185.png" alt=""></a>
          </div>

          <div class=" items-center gap-5 hidden lg:flex">
            <ul class="nav_bar flex gap-5 text-xl font-semibold text-gray-500 *:duration-300">
              <li class="hover:text-gray-800 "><a href="index.html" class="tittle_navbar">TRANG CHỦ</a></li>
              <li class="hover:text-gray-800"><a href="gamebai.html" class="tittle_navbar">GAME BÀI</a></li>
              <li class="hover:text-gray-800"><a href="thethao.html" class="tittle_navbar">THỂ THAO</a></li>
              <li class="hover:text-gray-800"><a href="casino.html" class="tittle_navbar">CASINO</a></li>
              <li class="hover:text-gray-800"><a href="banca.html" class="tittle_navbar">BẮN CÁ</a></li>
              <li class="hover:text-gray-800"><a href="nohu.html" class="tittle_navbar">NỔ HŨ</a></li>
              <li class="hover:text-gray-800"><a href="xoso.html" class="tittle_navbar">XỔ SỐ</a></li>
              <li class="hover:text-gray-800"><a href="esports.html" class="tittle_navbar ">E-SPORTS</a></li>
            </ul>

            <div class="flex items-center">
              <button onclick="url()" type="button" class="text-white bg-[#2a8fbd]  font-medium rounded-lg text-2xl px-6 py-3 text-center me-2 mb-2">ĐĂNG NHẬP</button>
              <button onclick="url()" type="button" class="text-white bg-[#cc001b]  font-medium rounded-lg text-2xl px-6 py-3 text-center me-2 mb-2">ĐĂNG KÝ</button>

            </div>
          </div>
        </div> 
      </div>
      <div class="lg:hidden bg-[#ffffffdc] py-2">
        <div class="flex items-center justify-center">
          <button onclick="url()" type="button" class="text-white bg-[#2a8fbd]  font-medium rounded-lg text-2xl px-6 py-3 text-center me-2 mb-2">ĐĂNG NHẬP</button>
          <button onclick="url()" type="button" class="text-white bg-[#cc001b]  font-medium rounded-lg text-2xl px-6 py-3 text-center me-2 mb-2">ĐĂNG KÝ</button>

        </div>
      </div>
  `;
  $("#header").html(header);
    const footer = `
       <div class="container max-w-screen-xl mx-auto ">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
            <div class="py-5 lg:py-10 *:pb-5">
              <h1 class="text-white text-2xl font-semibold">GIỚI THIỆU VỀ V6BET</h1>
              <hr class="border-gray-500 w-[3rem] border-t-[3px]">
              <img class="max-w-80" src="./assets/images/1636632157853405185.png" alt="">
              <p class="text-white">V6BET thương hiệu nhà cái cá cược trực tuyến cực kỳ uy tín được cấp phép hoạt động hợp pháp bởi tổ chức cờ bạc quốc tế Curacao.</p>
              <p class="text-white">Đăng ký, tải app V6BET về điện thoại ngay hôm nay để nhận 100K miễn phí trải nghiệm cá cược tại nhà cái hàng đầu Châu Á. </p>
            </div>

            <div class="py-5 lg:py-10 *:pb-5">
              <h1 class="text-white text-2xl font-semibold">VỀ CHÚNG TÔI</h1>
              <hr class="border-gray-500 w-[3rem] border-t-[3px]">
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="chinsachbaomat.html">Chính sách bảo mật</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="dieukienvadieukhoan.html">Điều kiện và điều khoản</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="cobaccotrachnhiem.html">Cờ bạc có trách nhiệm</a></p>
            </div>

            <div class="py-5 lg:py-10 *:pb-5">
              <h1 class="text-white text-2xl font-semibold">MỤC GAME HOT</h1>
              <hr class="border-gray-500 w-[3rem] border-t-[3px]">
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="thethao.html">Thể thao</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="banca.html">Bắn cá</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="casinolive.html">Casino Live</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="nohu.html">Nổ hũ</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300"><a href="xoso.html">Xổ số</a></p>
              
            </div>
            <div class="py-5 lg:py-10 *:pb-5">
              <h1 class="text-white text-2xl font-semibold">KẾT NỐI NHANH </h1>
              <hr class="border-gray-500 w-[3rem] border-t-[3px]">
                <p class="text-white">Địa chỉ: 114 Hoa Cúc, Phường 7, Phú Nhuận, Thành phố Hồ Chí Minh</p>
                <p class="text-white">Website: https://v6bet.live/</p>
            </div>
          </div>

        </div>
        <div class="bg-[#5b5b5b]">
          <div class="container max-w-screen-xl mx-auto py-5 lg:py-7">
            <p class=" text-white opacity-60">Copyright 2024 © V6BET.live</p>
          </div>
        </div>
    `;
    const sidebar = `
    <div class="side-menu-mobile  fixed top-0 -translate-x-full z-[1000] overflow-y-hidden transition-transform duration-500 ">
      <ul class="w-[60vw] bg-slate-100 h-screen *:flex *:items-center *:px-5 *:py-7 *:font-semibold *:text-2xl *:text-gray-700 *:rounded-lg  *:duration-300">

        <li class="hover:bg-gray-200">
          <a href="./index.html">
            <span class="ml-3">TRANG CHỦ</span>
          </a>
        </li>
        <li class="hover:bg-gray-200">
          <a href="./gamebai.html">
            <span class="ml-3">GAME BÀI</span>
          </a>
        </li>
        <li class="hover:bg-gray-200">
          <a href="./thethao.html">
            <span class="ml-3">THỂ THAO</span>
          </a>
        </li>
        <li class="hover:bg-gray-200">
          <a href="./casino.html">
            <span class="ml-3">CASINO</span>
          </a>
        </li>
        <li class="hover:bg-gray-200">
          <a href="./bacnca.html">
            <span class="ml-3">BẮN CÁ</span>
          </a>
        </li>
        <li class="hover:bg-gray-200">
          <a href="./nohu.html">
            <span class="ml-3">NỔ HŨ</span>
          </a>
        </li>
        <li class="hover:bg-gray-200">
          <a href="./xoso.html">
            <span class="ml-3">XỔ SỐ</span>
          </a>
        </li>
        <li class="hover:bg-gray-200">
          <a href="./esports.html">
            <span class="ml-3">E-SPORTS</span>
          </a>
        </li>




        
      </ul>
    </div>`;
    $("#side-bar").html(sidebar);
 
  $("#footer").html(footer);
  const content_right = `
                  <div class="*:my-5 *:md:my-7">
                    <div class="*:my-4">
                        <h2 class="text-2xl font-semibold">BÀI VIẾT LIÊN QUAN</h2>
                        <hr class="border-t-[3px] w-[30px] border-red-600">
                    </div>
                    <p onclick="detail(1)" class="text-red-600 text-3xl font-bold hover:underline cursor-pointer">Giới thiệu về Game Bài Mậu Binh tại V6bet</p>
                    <p class="text-xl opacity-70">Tháng Sáu 6, 2024 1:15 chiều</p> 
                    <hr class="border-t">
                </div>
                <div class="*:my-5 *:md:my-7">
                    <p onclick="detail(2)" class="text-red-600 text-3xl font-bold hover:underline cursor-pointer">Giới thiệu về game Bài Phỏm tại V6bet</p>
                    <p class="text-xl opacity-70">Tháng Sáu 2, 2024 6:12 sáng</p> 
                    <hr class="border-t">
                </div>
                <div class="*:my-5 *:md:my-7">
                    <p onclick="detail(3)" class="text-red-600 text-3xl font-bold hover:underline cursor-pointer">Giới thiệu game bài Tiến lên miền Nam trên V6bet</p>
                    <p class="text-xl opacity-70">Tháng Sáu 1, 2024 11:58 chiều</p> 
                    <hr class="border-t">
                </div>
                <div class="*:my-5 *:md:my-7">
                    <p onclick="detail(4)" class="text-red-600 text-3xl font-bold hover:underline cursor-pointer">Giới thiệu về V6Bet – Nền tảng game bài online uy tín</p>
                    <p class="text-xl opacity-70">Tháng Sáu 1, 2024 5:54 chiều</p> 
                    <hr class="border-t">
                </div>
                <div class="*:my-5 *:md:my-7">
                    <p onclick="detail(5)" class="text-red-600 text-3xl font-bold hover:underline cursor-pointer">Kèo Thẻ Phạt Là Gì? Bắt kèo thẻ phạt siêu chuẩn</p>
                    <p class="text-xl opacity-70">Tháng Năm 11, 2024 8:02 sáng</p> 
                    <hr class="border-t">
                </div>
                <div class="*:my-5 *:md:my-7">
                    <div class="*:my-4">
                        <h2 class="text-2xl font-semibold">TRANG NỔI BẬT</h2>
                        <hr class="border-t-[3px] w-[30px] border-red-600">
                    </div>
                    <p  class="text-red-600 text-3xl font-bold hover:underline cursor-pointer"><a href="cobaccotrachnhiem.html">Cờ bạc có trách nhiệm: Hướng dẫn cơ bản cho người chơi V6bet</a></p>
                    <p class="text-xl opacity-70">Tháng Năm 17, 2024 9:03 chiều</p> 
                    <hr class="border-t">
                </div>
                <div class="*:my-5 *:md:my-7">
                    <p  class="text-red-600 text-3xl font-bold hover:underline cursor-pointer"><a href="dieu-khoan-va-dieu-kien.html">Điều khoản và điều kiện chung của V6bet</a></p>
                    <p class="text-xl opacity-70">Tháng Sáu 2, 2024 6:12 sáng</p> 
                    <hr class="border-t">
                </div>
                <div class="*:my-5 *:md:my-7">
                    <p  class="text-red-600 text-3xl font-bold hover:underline cursor-pointer"><a href="chinh-sach-bao-mat-v6bet.html">Chính sách bảo mật V6bet: Cam kết bảo vệ thông tin khách hàng</a></p>
                    <p class="text-xl opacity-70">Tháng Sáu 2, 2024 6:12 sáng</p> 
                    <hr class="border-t">
                </div>
        
  `;
  $("#content_right").html(content_right);
  const backtotop = `<button class="Btn-backtotop1">
          <svg class="Btn-backtotop1arrow h-7 w-7" viewBox="0 0 512 512">
            <path
              d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
            ></path>
          </svg>
          <p class="Btn-backtotop1text">Back to Top</p>
  </button>`;
  $("#backtotop").html(backtotop);
  var btn = $(".Btn-backtotop1");
  $(window).scroll(function () {
      if ($(window).scrollTop() > 250) {
        btn.addClass("show");
      } else {
        btn.removeClass("show");
      }
  });
  btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "600");
  }); 
  
const hongbao0 = `<div class="surprises">
          <div class="fly">+100k</div>
          <div class="fly">+50k</div>
          <div class="fly">+120k</div>
          <div class="fly">+1M</div>
          <div class="fly">+75k</div>
          <div class="fly"><i class="hearts"></i></div>
          <div class="fly">$</div>
          <div class="fly"><i class="hearts"></i></div>
        </div>
        <div class="bonus jumping"></div>`;
        $("#hongbao0").html(hongbao0);


  $('.nav_bar > li').each(function() {
    a = $(this).find(".tittle_navbar").text();
    if(active == a){
      $(this).addClass('text-[#28282b]');
    }
  });
  
  $(".menu-icon").on("click", function () {
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(".side-menu-mobile").addClass("-translate-x-full");
    }
    else{
        $(this).addClass("active");
        $(".side-menu-mobile").removeClass("-translate-x-full");
    }
  });
  $(document).on("click", function (event) {
      if (!$(event.target).closest(".side-menu-mobile").length && !$(event.target).closest(".menu-icon").length ) {
        $(".menu-icon").removeClass("active");
        $(".side-menu-mobile").addClass("-translate-x-full");
      }
    });
    $(".icon-dropdown-side-menu-mobile").on("click", function(){
        $(this).toggleClass("rotate-180");
        $(this).closest("li").find('ul').toggleClass('active');
    })
    $('#showloading').delay(500).queue(function(next) {
      $(this).addClass('hidden');
      next();
    });

});

