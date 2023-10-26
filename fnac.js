const puppeteer = require("puppeteer");

// Ouvrir Fnac.com  avec le mode headless
const url =
  "https://www.fnac.com/";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });
})();


// Récupere le prix de la PS5 et analyse le 
let data = await page.evaluate(() => {
    return document.querySelector(".price__amount").innerText;
  });
  console.log("Le prix est de " + data);
  let newData = await data.substring(0, 4);


  // Transforme le chiffre en entier , dis moi si il est passé ou les 500
  if (parseInt(newData) < 500) {
    console.log("Le prix est passé sous les 500 !!!");
  }
