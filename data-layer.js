(function () {

  // =========================
  // 1. LOAD FROM data.js
  // =========================
  if (!window.ELEGKTES) {
    window.ELEGKTES = {};
  }

  // =========================
  // 2. LOAD FROM localStorage (override αν υπάρχει)
  // =========================
  const saved = localStorage.getItem("ELEGKTES_DATA");

  if (saved) {
    try {
      window.ELEGKTES = JSON.parse(saved);
      console.log("✔ Loaded from localStorage");
    } catch {
      console.warn("⚠ corrupted localStorage ignored");
    }
  } else {
    console.log("✔ Loaded from data.js");
  }

  // =========================
  // 3. SAVE FUNCTION
  // =========================
  window.saveData = function () {
    localStorage.setItem("ELEGKTES_DATA", JSON.stringify(window.ELEGKTES));
    console.log("✔ Saved to localStorage");
  };

})();