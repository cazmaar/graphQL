const GraphQL_URL = "http://localhost:9000";
const element = document.querySelector("#greeting");
element.textContent = "...Loading";

const fetchGreeting = async () => {
  const res = await fetch(GraphQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
            greeting,
            man
          }
        `,
    }),
  });
  const {data} = await res.json();
  return data
};
fetchGreeting().then(({greeting,man})=>{
  element.textContent = `${greeting}, ${man}`
})

