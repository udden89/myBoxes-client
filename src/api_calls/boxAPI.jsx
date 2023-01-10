async function fetchAllBoxDispatches() {
  try {
    let res = await fetch("/box");
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function dispatchNewBox(box) {
  try {
    let res = await fetch("/box", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(box),
    });

    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

const boxAPI = {
  fetchAllBoxDispatches,
  dispatchNewBox,
};

export default boxAPI;
