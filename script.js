const firebaseConfig = {
  apiKey: "AIzaSyBYoFzgtRowX2ekxhHgq2qfYcPFY4lE34M",
  authDomain: "aputi-p7-school-sms.firebaseapp.com",
  projectId: "aputi-p7-school-sms",
  storageBucket: "aputi-p7-school-sms.firebasestorage.app",
  messagingSenderId: "219692740657",
  appId: "1:219692740657:web:e4278c3d202ec7bd4b6510"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function loadStudents() {
  db.collection("students").onSnapshot((snapshot) => {
    let html = "";

    snapshot.forEach((doc) => {
      let s = doc.data();

      html += `
        <div class="card">
          <h3>${s.name}</h3>
          <p>Class: ${s.class}</p>
          <p>Age: ${s.age}</p>
          <p>Gender: ${s.gender}</p>
          <p>LIN: ${s.lin}</p>
        </div>
      `;
    });

    document.getElementById("studentList").innerHTML = html;
  });
}

loadStudents();
