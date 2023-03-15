//navbar part
function clock() {
  const today = new Date();

  // get time components
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  

  //add '0' to hour, minute & second when they are less 10
  const hour = hours < 10 ? "0" + hours : hours;
  const minute = minutes < 10 ? "0" + minutes : minutes;
  const second = seconds < 10 ? "0" + seconds : seconds;
  

  //make clock a 12-hour time clock
  const hourTime = hour > 12 ? hour - 12 : hour;

  // if (hour === 0) {
  //   hour = 12;
  // }
  //assigning 'am' or 'pm' to indicate time of the day
  const ampm = hour < 12 ? "AM" : "PM";

  // get date components
  const month = today.getMonth();
  const year = today.getFullYear();
  const day = today.getDate();

  //declaring a list of all months in  a year
  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  //get current date and time
  const date = monthList[month] + " " + day + ", " + year;
  const time = hourTime + ":" + minute + ":" + second + ampm;

  //print current date and time to the DOM
  document.getElementById("date").innerHTML = date;
  document.getElementById("time").innerHTML = time;
  setTimeout(clock, 1000);
}

window.addEventListener("load", () => {
  clock();
});

// cards part

var cardContainerElement = document.getElementById("cardContainer");

const cardDetails = [
  {
    id: 1,
    color: "#15C39A",
    text: "Today Generation",
    number: 14.36,
    quantity: "MW",
  },
  {
    id: 2,
    color: "#4293ff",
    text: "Plant Efficiency",
    number: 95.75,
    quantity: "%",
  },
  {
    id: 3,
    color: "#dcb500",
    text: "Today's Enery Consumption",
    number: 11.81,
    quantity: "KWh",
  },
  {
    id: 4,
    color: "#ffa329",
    text: "Life Time Energy",
    number: 1406.1,
    quantity: "GWh",
  },
];
cardDetails.forEach((eachItem) => {
  //create a div container for single card
  let singleCardContainerElement = document.createElement("div");
  singleCardContainerElement.style.borderColor = eachItem.color;
  singleCardContainerElement.style.color = eachItem.color;
  singleCardContainerElement.classList.add("single-card");
  //card headd/description element
  let textElement = document.createElement("p");
  textElement.style.backgroundColor = eachItem.color;
  textElement.classList.add("textElement");
  textElement.textContent = eachItem.text;
  singleCardContainerElement.appendChild(textElement);
  //to display number
  let numberElement = document.createElement("h1");
  numberElement.textContent = eachItem.number;
  numberElement.classList.add("number-element");
  singleCardContainerElement.appendChild(numberElement);
  //to display quantity/percentage
  let qauantityElement = document.createElement("span");
  qauantityElement.textContent = eachItem.quantity;
  qauantityElement.classList.add("quntity-element");
  numberElement.appendChild(qauantityElement);

  cardContainerElement.appendChild(singleCardContainerElement);
});

// table part

const tableData = [
  {
    inverter: "Block-1_Inverter-1",
    voltage: 232,
    current: 1301.44,
    activePower: 957.1,
    apparentPower: 977.55,
    IGBTTemp: 50,
    inductorTemp: 42,
    DCInputPower: 963.1,
    ambitentTemp: 25,
    DCVoltage: 656,
    lifeTimeEnergy: 937.33,
    energyPerDay: 787.33,
    waterTemp: 24,
  },
  {
    inverter: "Block-1_Inverter-2",
    voltage: 234,
    current: 1201.44,
    activePower: 967.1,
    apparentPower: 877.55,
    IGBTTemp: 52,
    inductorTemp: 44,
    DCInputPower: 967.1,
    ambitentTemp: 23,
    DCVoltage: 655,
    lifeTimeEnergy: 957.33,
    energyPerDay: 767.33,
    waterTemp: 20,
  },
  {
    inverter: "Block-1_Inverter-3",
    voltage: 230,
    current: 1221.35,
    activePower: 977.1,
    apparentPower: 877.55,
    IGBTTemp: 56,
    inductorTemp: 38,
    DCInputPower: 893.1,
    ambitentTemp: 19,
    DCVoltage: 566,
    lifeTimeEnergy: 877.33,
    energyPerDay: 789.33,
    waterTemp: 20,
  },
  {
    inverter: "Block-2_Inverter-1",
    voltage: 234,
    current: 1312.44,
    activePower: 857.1,
    apparentPower: 877.55,
    IGBTTemp: 50,
    inductorTemp: 46,
    DCInputPower: 930.1,
    ambitentTemp: 21,
    DCVoltage: 721,
    lifeTimeEnergy: 899.13,
    energyPerDay: 778.33,
    waterTemp: 21,
  },
  {
    inverter: "Block-2_Inverter-2",
    voltage: 237,
    current: 1299.34,
    activePower: 891.1,
    apparentPower: 977.55,
    IGBTTemp: 50,
    inductorTemp: 42,
    DCInputPower: 963.1,
    ambitentTemp: 25,
    DCVoltage: 656,
    lifeTimeEnergy: 937.33,
    energyPerDay: 787.33,
    waterTemp: 24,
  },
  {
    inverter: "Block-2_Inverter-3",
    voltage: 235,
    current: 1201.48,
    activePower: 987.1,
    apparentPower: 987.55,
    IGBTTemp: 56,
    inductorTemp: 41,
    DCInputPower: 963.4,
    ambitentTemp: 23,
    DCVoltage: 666,
    lifeTimeEnergy: 957.37,
    energyPerDay: 887.33,
    waterTemp: 27,
  },

  {
    inverter: "Block-3_Inverter-1",
    voltage: 236,
    current: 1391.44,
    activePower: 958.1,
    apparentPower: 877.55,
    IGBTTemp: 55,
    inductorTemp: 41,
    DCInputPower: 863.1,
    ambitentTemp: 20,
    DCVoltage: 657,
    lifeTimeEnergy: 927.33,
    energyPerDay: 908.33,
    waterTemp: 25,
  },
  {
    inverter: "Block-3_Inverter-2",
    voltage: 232,
    current: 1201.43,
    activePower: 967.1,
    apparentPower: 957.55,
    IGBTTemp: 53,
    inductorTemp: 43,
    DCInputPower: 945.8,
    ambitentTemp: 26,
    DCVoltage: 678,
    lifeTimeEnergy: 897.33,
    energyPerDay: 876.33,
    waterTemp: 20,
  },
  {
    inverter: "Block-3_Inverter-3",
    voltage: 232,
    current: 1201.44,
    activePower: 956.1,
    apparentPower: 987.55,
    IGBTTemp: 56,
    inductorTemp: 45,
    DCInputPower: 883.1,
    ambitentTemp: 24,
    DCVoltage: 676,
    lifeTimeEnergy: 938.33,
    energyPerDay: 687.33,
    waterTemp: 22,
  },
];

function dataDisplay(data) {
  document.querySelector("tbody").innerHTML = "";
  data.forEach((item) => {
    var tableRowElement = document.createElement("tr");
    for (let i in item) {
      var tableDescriptionElement = document.createElement("td");
      tableDescriptionElement.innerHTML = item[i];
      tableRowElement.appendChild(tableDescriptionElement);
    }
    //td creation for delte view

    var tdView = document.createElement("td");
    //button creation for view
    var viewBtn = document.createElement("button");
    viewBtn.innerHTML = "View";
    viewBtn.classList.add("view-button");
    //firstly button will append to td and then td to table row element
    tdView.appendChild(viewBtn);
    tableRowElement.appendChild(tdView);

    document.querySelector("tbody").appendChild(tableRowElement);
  });
}

dataDisplay(tableData);
