let tasks = JSON.parse(localStorage.getItem("TASKS_DATA")) || [];

const inputJudul = document.querySelector(".judulKegiatan");
const inputJenis = document.querySelector(".jenisKegiatan");
const inputDate = document.querySelector(".date");

const btnTambah = document.getElementById("tambah");
const taskList = document.getElementById("taskList");
const totalTugas = document.getElementById("totalTugas");

function simpanData() {
  localStorage.setItem("TASKS_DATA", JSON.stringify(tasks));
}

function renderTask() {
  taskList.innerHTML = "";

  tasks.forEach(function (e) {
    taskList.innerHTML += `
      <li class="task-item" data-id="${e.id}">
        <div class="wrapperContent">
          <label id="status" >
            <input type="checkbox" class="task-checkbox" ${e.completed ? "checked" : ""} />
          </label>
          <div class="task-content">
            <h4 class="task-title ${e.completed ? "completed" : ""}">${e.title}</h4>
            <div class="task-meta">
              <span class="badge badge-category">${e.category}</span>
              <span class="task-deadline">
                ${e.deadline ? `Deadline: <time>${e.deadline}</time>` : ""}
              </span>
            </div>
          </div>
        </div>

        <div class="task-actions">
          <button type="button" class="btn-delete">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </li>
    `;
  });

  if (totalTugas) {
    totalTugas.textContent = tasks.length;
  }
}

renderTask();
