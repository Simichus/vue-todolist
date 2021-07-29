Vue.config.devtools = true;

const root = new Vue({
  el: "#root",
  data: {
    newTask: "",
    tasks: ["Fare la spesa", "Lavare la macchina", "Ritirare la posta"],
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) this.tasks.push(this.newTask);
      this.newTask = "";
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
});
