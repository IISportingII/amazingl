const axios = require("axios");
const express = require("express");

const app = express();
const instance = axios.create({
  baseURL: "https://api-stage.wentronic.com",
});

async function postAccessTokens() {
  return instance.post("/access-tokens", {
    data: {
      type: "access-tokens",
      attributes: {
        username: "heinzklimmer@gmail.com",
        password: "wZjQuP4D",
      },
    },
  });
}

async function getProductsDataContent(item, locale) {
  return instance.get(`/products-data-content/${item}?locale=${locale}`, {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU4MTVhNWJlNzRmZjM3ZjU2YzU0YzdkMTVmYWFmNjlkOTY4NjRiNjVjYjQ2Njc1MDk5ZWI1ODQwOGNiN2I5MjE1NDYyNWNlZjQ3NGZmMmM4In0.eyJhdWQiOiJmcm9udGVuZCIsImp0aSI6ImU4MTVhNWJlNzRmZjM3ZjU2YzU0YzdkMTVmYWFmNjlkOTY4NjRiNjVjYjQ2Njc1MDk5ZWI1ODQwOGNiN2I5MjE1NDYyNWNlZjQ3NGZmMmM4IiwiaWF0IjoxNjAwMTkxMTc1LCJuYmYiOjE2MDAxOTExNzUsImV4cCI6MTYwMDIxOTk3NSwic3ViIjoie1wiY3VzdG9tZXJfcmVmZXJlbmNlXCI6XCJERS0tOTg5NFwiLFwiaWRfY3VzdG9tZXJcIjo5ODk0fSIsInNjb3BlcyI6WyJjdXN0b21lciJdfQ.Zom_7ENGYrytxAuShrZVlCTdOrFtfVLz09EOlIUrE2ZRhrwXFQbaxF31h8hW_xwb5PGHDg3Ds8R1i_H_bY1PpHGzHwfS0gio70k6HiTMBOO_9S6ShLQiiTTopVt9pfTNOYFZA1u8VtMKzw0XYDxpo5l_bX-YID_eUzV9pwVH0Dt2kOvqorHavto7ESO1xn4k0T8NBfbtYkTDw8AyQxdUPwS53S-sm7o8Bmg1JJ9D04ymNHRpqATGdfWFCS3AebEkDKGdHAh7s3czDJTkdsYueyMFXgbh-dh-ONhWZW53MmLQuHiNOLCdYVZdMORM1UgXiujYnedgrnAidpBph4ymdA",
      "Content-Type": "application/json",
    },
  });
}

getProductsDataContent(95122, "de_DE")
  .then(({ data }) => console.log(data))
  .catch(console.log);

app.listen();
