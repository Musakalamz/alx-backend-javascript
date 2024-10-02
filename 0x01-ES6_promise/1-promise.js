export default function getFullResponseFromAPI(success) {
  const object = {
    status: 200,
    body: "Success",
  };

  const promise = new Promise((resolve, reject) => {
    if (success) {
      resolve(object);
    } else {
      reject(new Error("The fake API is not working currently"));
    }
  });
  return promise;
}
