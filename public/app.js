async function send() {

  const res = await fetch("/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: document.getElementById("msg").value
    })
  });

  const data = await res.json();

  document.getElementById("out").innerText =
    JSON.stringify(data, null, 2);
}
