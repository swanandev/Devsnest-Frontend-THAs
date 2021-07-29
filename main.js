/**
 * Code to Populate and colour grid!
 */

const thaGridClass = document.querySelector(".tha-grid");

const createHrefElement = (day_no) => {
  let anchor = document.createElement("a");
  anchor.href = "/Day_" + day_no;
  anchor.innerHTML = "Day " + day_no;
};

const localDirs = ["/Day_", "/day_"];
const publicDirs = [
  "/Devsnest-Frontend-THAs/Day_",
  "/Devsnest-Frontend-THAs/day_",
];

const dir =
  location.hostname === "localhost" || location.hostname === "127.0.0.1"
    ? localDirs
    : publicDirs;

const day_nos = [
  "01_2",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "15",
];

const react_day_nos = [
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
];

const count = day_nos.length + react_day_nos.length;

const createTHADiv = (inx, day_no, url, dirIndex) => {
  let thaDiv = document.createElement("div");
  let text = document.createElement("p");
  text.innerHTML = "Day " + day_no;
  thaDiv.setAttribute("class", "thaDiv");
  thaDiv.setAttribute("id", inx + 1);
  thaDiv.addEventListener("click", () => {
    //pix.classList.toggle('booked');
    window.location.href = dir[dirIndex] + url;
  });
  thaDiv.appendChild(text);
  return thaDiv;
};

day_nos.forEach((day_no, inx) => {
  thaGridClass.appendChild(createTHADiv(inx, day_no, day_no, 0));
});

react_day_nos.forEach((day_no, inx) => {
  thaGridClass.appendChild(
    createTHADiv(day_nos.length + inx, day_no, day_no + "/build/", 1)
  );
});
