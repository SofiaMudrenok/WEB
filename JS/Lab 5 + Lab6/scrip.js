let id = 0;
class FuelStation {
  constructor(
    code,
    adress,
    company,
    a92,
    a95,
    diesel,
    price92,
    price95,
    priceD
  ) {
    this.code = code;
    this.adress = adress;
    this.company = company;
    this.a92 = a92;
    this.a95 = a95;
    this.diesel = diesel;
    this.price92 = price92;
    this.price95 = price95;
    this.priceD = priceD;
    this.id = ++id;
  }
}
class StringifyFuelStation extends FuelStation {
  ToString() {
    return `
        code:${this.code};
        adress:${this.adress};
        comp:${this.company};
        a92:${this.a92};
        priceA92:${this.price92};
        a95:${this.a95};
        priceA95:${this.price95};
        diesel:${this.diesel};
        priceD:${this.priceD};
        `;
  }
}
class Fuel {
  constructor() {
    this.fuels = [];
  }
  addOne(el) {
    this.fuels.push(el);
  }
  addMany(elements) {
    elements.forEach((el) => {
      this.fuels.push(el);
    });
  }
  delete(uid) {
    let ind = this.fuels.findIndex((el) => el.id == uid);
    if (ind == -1) throw "not found";
    this.fuels.splice(ind, 1);
  }
  edit(uid, newuid) {
    let olduid = this.fuels.findIndex((el) => el.id == uid);
    this.fuels[olduid] = newuid;
    this.fuels[olduid].id = uid;
    id--;
  }
  getById(uid) {
    return this.fuels.find((el) => el.id == uid);
  }
  getByFuel(ufuel) {
    return [...this.fuels.filter((el) => el.fuels == ufuel)];
  }
  getAll() {
    return [...this.fuels];
  }
}
class FuelwithDOM extends Fuel {
  fuelToHTML(station) {
    return `
      <tr>
      <td>
          ${station.id}
      </td>
      <td>
          ${station.company}
      </td>
      <td>
          ${station.adress}
      </td>
      <td>
          ${station.a92}
      </td>
      <td>
          ${station.price92}
      </td>
      <td>
          ${station.a95}
      </td>
      <td>
          ${station.price95}
      </td>
      <td>
          ${station.diesel}
      </td>
      <td>
          ${station.priceD}
      </td>
      <td> 
          <button onclick="DeleteStation(${station.id})">
              Delete
          </button>
      </td>
      <td> 
          <button onclick="StartEditStation(${station.id})">
              Edit
          </button>
      </td>
      </tr>
    `;
  }
  stationTableToHTML() {
    let rows = "";
    for (let station of this.getAll()) {
      rows += this.fuelToHTML(station);
    }
    return `
    <table>
        <tr>
            <th>
                ID
            </th>
            <th>
                Company
            </th>
            <th>
                Adress
            </th>
            <th>
                A92
            </th>
            <th>
                Price
            </th>
            <th>
                A95
            </th>
            <th>
                Price
            </th>
            <th>
                Diesel
            </th>
            <th>
                Price
            </th>
            <th colspan="2">
                Actions
            </th>
        </tr>
        ${rows}
    </table>
    <br>
    <button type="button" onclick="ShowAddStation()">
        Add station
    </button>
`;
  }
  addFormToHTML() {
    return ` 
    <div id="add">
        <form name="addForm" method="post" action="#">
            <h3> Add Station </h3>
            <input name="code" placeholder="code"> 
            <input name="company" placeholder="company"> 
            <input name="adress" placeholder="adress">
            <input name="a92" placeholder="a92">
            <input name="price" placeholder="price">
            <input name="a95" placeholder="a95">
            <input name="price" placeholder="price">
            <input name="diesel" placeholder="diesel">
            <input name="price" placeholder="price">
            <button type="button" onclick="AddNewStation()">
                Save
            </button>
        </form>
    </div>
`;
  }
  editFormToHTML() {
    return ` 
    <div id="edit">
        <form name="editForm" method="post" action="#">
            <h3> Edit Station </h3>
            <input name="code" placeholder="code"> 
            <input name="company" placeholder="company"> 
            <input name="adress" placeholder="adress">
            <input name="a92" placeholder="a92">
            <input name="price" placeholder="price">
            <input name="a95" placeholder="a95">
            <input name="price" placeholder="price">
            <input name="diesel" placeholder="diesel">
            <input name="price" placeholder="price">
            <button type="button" onclick="EditStation()">
                Save
            </button>
        </form>
    </div>
`;
  }
  toHTML() {
    return (
      all.stationTableToHTML() + this.addFormToHTML() + this.editFormToHTML()
    );
  }
  addEventListeners() {
    document.addEventListener("deleteStation", (event) => {
      super.delete(event.detail.id);
      document.getElementById("root").innerHTML = this.toHTML();
    });
    document.addEventListener("addStation", (event) => {
      super.addOne(
        new StringifyFuelStation(
          event.detail.code,
          event.detail.company,
          event.detail.adress,
          event.detail.a92,
          event.detail.price92,
          event.detail.a95,
          event.detail.price95,
          event.detail.diesel,
          event.detail.priceD
        )
      );
      document.getElementById("root").innerHTML = this.toHTML();
    });
    document.addEventListener("editStation", (event) => {
      super.edit(
        event.detail.id,
        new StringifyFuelStation(
          event.detail.code,
          event.detail.company,
          event.detail.adress,
          event.detail.a92,
          event.detail.price92,
          event.detail.a95,
          event.detail.price95,
          event.detail.diesel,
          event.detail.priceD
        )
      );
      document.getElementById("root").innerHTML = this.toHTML;
    });
  }
}
function DeleteStation(id) {
  let DeleteEvent = new CustomEvent("deleteStation", { detail: { id } });
  document.dispatchEvent(DeleteEvent);
}
function AddNewStation() {
  const code = document.getElementsByName("code")[0].value;
  const pib = document.getElementsByName("pib")[0].value;
  const model = document.getElementsByName("model")[0].value;
  const number = document.getElementsByName("number")[0].value;
  const color = document.getElementsByName("color")[0].value;
  let addEvent = new CustomEvent("addStation", {
    detail: {
      code,
      pib,
      model,
      number,
      color,
    },
  });
  document.dispatchEvent(addEvent);
}
function ShowAddStation() {
  document.getElementById("add").style.display = "block";
  document.getElementById("edit").style.display = "none";
}
function EditUser() {
  const code = document.getElementsByName("code")[1].value;
  const adress = document.getElementsByName("adress")[1].value;
  const company = document.getElementsByName("company")[1].value;
  const a92 = document.getElementsByName("a92")[1].value;
  const price92 = document.getElementsByName("price92")[1].value;
  const a95 = document.getElementsByName("a95")[1].value;
  const price95 = document.getElementsByName("price95")[1].value;
  const diesel = document.getElementsByName("diesel")[1].value;
  const priceD = document.getElementsByName("priceD")[1].value;

  let addEvent = new CustomEvent("edit", {
    detail: {
      code,
      adress,
      company,
      a92,
      a95,
      diesel,
      price92,
      price95,
      priceD,
    },
  });
  document.dispatchEvent(addEvent);
}
function StartEditStation(id) {
  document.getElementById("edit").style.display = "block";
  document.getElementById("add").style.display = "none";
  let car = all.getById(id);
  document.getElementsByName("code")[1].value = station.code;
  document.getElementsByName("code")[1].value;
  document.getElementsByName("adress")[1].value;
  document.getElementsByName("company")[1].value;
  document.getElementsByName("a92")[1].value;
  document.getElementsByName("price92")[1].value;
  document.getElementsByName("a95")[1].value;
  document.getElementsByName("price95")[1].value;
  document.getElementsByName("diesel")[1].value;
  document.getElementsByName("priceD")[1].value;
  document.getElementsByName("id").value = id;
}
let Station1 = new StringifyFuelStation(
  "code1",
  "Minay",
  "WOG",
  "+",
  "-",
  "+",
  "40",
  "--",
  "60"
);
let Station2 = new StringifyFuelStation(
  "code2",
  "Noviy",
  "Brom",
  "-",
  "+",
  "+",
  "--",
  "50",
  "65"
);
let all = new FuelwithDOM();
all.addOne(Station1);
all.addOne(Station2);
document.getElementById("root").innerHTML = all.toHTML();
all.addEventListeners();
