const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function loadStudents() {
  db.collection("students").onSnapshot((snapshot) => {
    let html = "";

    snapshot.forEach((doc) => {
      let s = doc.data();

      html += `
        <div class="card">
          <b>${s.name}</b><br>
          Class: ${s.class}<br>
          Age: ${s.age}<br>
          Gender: ${s.gender}<br><br>

          <button onclick="deleteStudent('${doc.id}')">Delete</button>
        </div>
      `;
    });

    document.getElementById("studentList").innerHTML = html;
  });
}

function deleteStudent(id) {
  db.collection("students").doc(id).delete();
}

loadStudents();
