let addBtn = $("#addbtn");
let Resetbtn = $("#resetBtn");
let newTask = $("#newTask");
let taskList = $("#taskList");

function addTask() {
  let addTask = $("<li>", {
    class: "list-group-item",
    text: newTask.val(),
  });
  let delbtn = $("<button>", {
    class: "btn btn-danger btn-sm right",
  });
  let delicon = $("<i>", {
    class: "fa-solid fa-xmark",
  });
  delbtn.click(function () {
    $(this).parent().remove();
  });

  addTask.click(function () {
    $(this).toggleClass("done");
  });
  delbtn.append(delicon);
  addTask.append(delbtn);
  taskList.append(addTask);
  newTask.val("");
  toggleButtons();
}

addBtn.click(addTask);
function toggleButtons() {
  $(addBtn).prop("disabled", newTask.val == "");
  $(Resetbtn).prop("disabled", newTask.val == "");
}

newTask.on("input", toggleButtons);

Resetbtn.click(function () {
  newTask.val("");
  toggleButtons();
});
