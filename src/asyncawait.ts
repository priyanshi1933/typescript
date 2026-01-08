function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async data has been fetched!");
    }, 2000);
  });
}

async function fetchDataAsync(): Promise<void> {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchDataAsync();