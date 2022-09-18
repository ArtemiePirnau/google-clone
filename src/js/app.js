"use strict";

const btnSearch = document.querySelector(".buttons__searching");
const inputSearch = document.querySelector(".search__input");

const searchSomething = () => {
  const inputValue = inputSearch.value;
  window.location.href = `https://www.google.com/search?q=${inputValue}&sxsrf=ALiCzsbD9QGpPK8kLsjzrHU-1RJbMdx0XQ%3A1663489626450&source=hp&ei=WtYmY_6pGYOx8gKE9a-QDw&iflsig=AJiK0e8AAAAAYybkavZ762Gyxlp4eCewYhhqURDdE3K9&ved=0ahUKEwj-vpTi9Z36AhWDmFwKHYT6C_IQ4dUDCAw&oq=${inputValue}&gs_lcp=Cgdnd3Mtd2l6EAwyBAgjECcyBAgjECcyBAgjECcyBwguENQCEEMyBAgAEEMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEMsBMgUILhCABDoLCC4QgAQQsQMQgwE6CAgAEIAEELEDOgsIABCABBCxAxCDAToECC4QQzoKCC4QxwEQrwEQQzoKCAAQgAQQhwIQFDoOCC4QgAQQsQMQgwEQ1AI6CAguELEDEIMBOgoILhCxAxCDARBDOgsILhCABBDHARCvAToHCAAQsQMQQzoKCAAQsQMQgwEQQ1AAWMMFYN0RaABwAHgAgAGXAYgBpAeSAQMwLjeYAQCgAQE&sclient=gws-wiz`;
};

btnSearch.addEventListener("click", () => {
  searchSomething();
  inputSearch.value = "";
});
