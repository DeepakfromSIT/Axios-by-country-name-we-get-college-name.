// let url = "http://universities.hipolabs.com/search?name=";

// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//   let country = document.querySelector("input").value;
//   console.log(country);
//   let collArr = await getColleges(country);
//   show(collArr);
// });

// function show(collArr) {
//   let list = document.querySelector("#list");
//   list.innerText = "";
//   for (coll of collArr) {
//     console.log(coll.name);
//     let li = document.createElement("li");
//     li.innerText = coll.name;
//     list.appendChild(li);
//   }
// }

// // let country = "nepal";

// async function getColleges(country) {
//   try {
//     let res = await axios.get(url + country);
//     return res.data;
//   } catch (e) {
//     console.log("error:", e);
//     return "";
//   }
// }

let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let state = document.querySelector("input").value;
  console.log(state);
  let collArr = await getColleges(state);
  show(collArr);
});

function show(collArr) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (coll of collArr) {
    console.log(coll.name);
    let li = document.createElement("li");
    li.innerText = coll.name;
    list.appendChild(li);
  }
}

let country = "india";

async function getColleges(state, india) {
  try {
    let res = await axios.get(url + state);
    return res.data;
  } catch (e) {
    console.log("error:", e);
    return "";
  }
}
