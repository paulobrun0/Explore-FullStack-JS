// Função que retorna uma Promise.
function asyncFunction() {
  return new Promise((resolve, reject) => {
    // Simula uma opera assíncrona.
    setTimeout(() => {
      const isSuccess = true;

      if (isSuccess) {
        resolve("A operação foi concluída com sucesso.");
      } else {
        reject("Algo deu errado.");
      }
    }, 3000); // Simula um tempo de espera de 3 segundos.
  });
}

/* const fetch = async () => {
  const response = await asyncFunction();
  console.log(response);
}
*/

async function fetch() {
  try {
    const response = await asyncFunction();
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Operação concluída.");
  }
}

fetch();

// const input = document.getElementById("input");
// const btn = document.getElementById("btn");
// const name = document.getElementById("name");
// const avatar = document.getElementById("avatar");
// const followers = document.getElementById("followers");

// async function fetchData(userName) {
// try {
//   let response = await fetch(`https://api.github.com/users/${userName}`);
//   response = await response.json();
//   return {
//     login: response.login,
//     avatar_url: response.avatar_url,
//     followers: response.followers,
//   };
//     } catch (error) {
//       console.log(error);
//     }
// }

// btn.addEventListener("click", async () => {
//   const userName = input.value;
//   const userData = await fetchData(userName);
//   name.textContent = userData.login;
//   avatar.src = userData.avatar_url;
//   followers.textContent = userData.followers;
// });
