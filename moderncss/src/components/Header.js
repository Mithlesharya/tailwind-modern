import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const searchItem = () => {
  let searchBox = (document.getElementById("searchItem").style.cssText =
    "display: block;position: absolute;top: 0;width: 100%;background: #fff;z-index: 11;");
};

const cancelSearch = () => {
  let searchBox = (document.getElementById("searchItem").style.cssText =
    "display:none");
};

const toggleNav = () => {
  const toggleNav = document.getElementById("toggleNav");
  const collapse = document.getElementById("collapse");
  toggleNav.classList.toggle("active");
  collapse.classList.toggle("showmenu");
};

const Header = () => {
  return (
    <>
      <div className="top-header hidden md:block">
        <div className="stick-header flex justify-between py-[5px] px-12 bg-slate-100 xs:hidden">
          {/* left */}
          <div className="sport-logo">
            <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
              <path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path>
            </svg>
          </div>
          {/* right */}
          <div className="stick-nav">
            <ul className="flex">
              <li className="mx-2 text-sm">
                <a href="">
                  Find a Store <span className="ml-2">|</span>
                </a>
              </li>
              <li className="mx-2 text-sm">
                <a href="">
                  Help <span className="ml-2">|</span>
                </a>
              </li>
              <li className="mx-2 text-sm">
                <a href="">
                  Join us <span className="ml-2">|</span>
                </a>
              </li>
              <li className="mx-2 text-sm">
                <a href="">Sign in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header className="md:px-12 flex items-center justify-between relative">
        {/* left */}
        <div className="brand-logo cursor-pointer ">
          <svg
            className="hover:opacity-60"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="65px"
            height="65"
            fill="none"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        {/* middle */}
        <div className="page-menu hidden md:block" id="collapse">
          <ul className="flex">
            <li className="mx-2 text-base">
              <a href="">Men</a>
            </li>
            <li className="mx-2 text-base">
              <a href="">Women</a>
            </li>
            <li className="mx-2 text-base">
              <a href="">Kids</a>
            </li>
            <li className="mx-2 text-base">
              <a href="">Men</a>
            </li>
            <li className="mx-2 text-base">
              <a href="">Customise</a>
            </li>
            <li className="mx-2 text-base">
              <a href="">Sales</a>
            </li>
            <li className="mx-2 text-base">
              <a href="">SNKRS</a>
            </li>
          </ul>
        </div>
        {/* right */}
        <div className="function-item flex items-center">
          <div className="search relative" onClick={() => searchItem()}>
            <input
              className="px-10 py-2 bg-slate-100 rounded-full focus:outline-none hover:bg-slate-200 transition-all w-[12rem] hidden sm:block"
              type="text"
              placeholder="search"
            />
            <div className="search-icon absolute sm:top-2 sm:left-2 cursor-pointer right-[-15px] top-[-11px]">
              <svg
                onClick={() => searchItem()}
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="24px"
                height="24px"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
                ></path>
              </svg>
            </div>
          </div>

          <div className="wishlist cursor-pointer ml-5 hidden md:block">
            <svg
              className="w-10 h-10 p-2 rounded-full hover:bg-slate-100"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24px"
              height="24px"
              fill="none"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
              ></path>
            </svg>
          </div>

          <div className="nav-cart cursor-pointer mx-4">
            <svg
              className="w-10 h-10 p-2 rounded-full hover:bg-slate-100"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24px"
              height="24px"
              fill="none"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
              ></path>
            </svg>
          </div>
          <div
            className="navigation ml-3"
            id="toggleNav"
            onClick={() => toggleNav()}
          ></div>
        </div>
      </header>

      <div
        className="search-box hidden transition duration-75 ease-in-out"
        id="searchItem"
      >
        <div className="search-item  px-12 flex justify-between py-5 h-[12rem]">
          <div className="brand-logo cursor-pointer  ">
            <svg
              className="hover:opacity-60 mb-3"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="65px"
              height="65"
              fill="none"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="search-list">
            <div className="search relative">
              <input
                className="px-10 py-2 bg-slate-100 rounded-full focus:outline-none hover:bg-slate-200 transition-all md:w-[40rem]"
                type="text"
                placeholder="search"
              />
              <div className="search-icon absolute top-2 left-2 cursor-pointer">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  role="img"
                  width="24px"
                  height="24px"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="text-gray-800 my-3">Popular Search Terms</p>
            <ul>
              <li className="font-semibold text-lg">Air Force 1 </li>
              <li className="font-semibold text-lg"> Jordan Air</li>
              <li className="font-semibold text-lg">Max Blazer</li>
              <li className="font-semibold text-lg">Gifts</li>
            </ul>
          </div>
          <div
            className="cancel-search cursor-pointer w-[10rem] mt-2"
            onClick={() => cancelSearch()}
          >
            <p>Cancel</p>
          </div>
        </div>
      </div>

      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        arrows={false}
      >
        <div className="save-slider flex flex-col justify-center  h-16 text-center bg-slate-100 py-2">
          <p>Save Up to 40%</p>
          <a className="underline" href="">
            Shop All Our New Markdowns
          </a>
        </div>
        <div className="save-slider flex flex-col justify-center h-16 text-center bg-slate-100 py-2">
          <p>
            It's taking us a bit longer than usual to get your order to you.
            Thank you for your patience.
          </p>
        </div>
        <div className="save-slider flex flex-col justify-center h-16 text-center bg-slate-100 py-2">
          <p>Hello Nike App</p>
          <a href="">
            Download the app to access everything Nike.
            <span className="underline">Get Your Great</span>
          </a>
        </div>
      </Carousel>
    </>
  );
};

export default Header;
