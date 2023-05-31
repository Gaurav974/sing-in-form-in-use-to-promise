
let cl = console.log;


const singinform = document.getElementById('singinform');
const emailcontrol = document.getElementById('email');
const passwordcontrol = document.getElementById('password');
const temlater = document.getElementById('temlater');

let array = [];

const templating = (arr) => {
  let result = '';
  arr.forEach(ele => {
    result +=
      `
                 
               
                   <div class="card" >
                       <div class="card-header">
                           ${ele.email}
                       </div>
                        <div class="card-body">
                           ${ele.password}
                        </div>
                        <div class="card-footer">

                        </div >
                    </div >
                 
                 
                 `
  });
  temlater.innerHTML = result
}
templating(array)

let DB = {
  email: "gaurav@gmail.com",
  password: "123"
}
const submitevehandle = (eve) => {
  eve.preventDefault()
  return new Promise((resole, reject) => {
    setTimeout(() => {
      if (emailcontrol.value === DB.email && passwordcontrol.value === DB.password) {
        resole(`Log In SuccsesFully`)
      } else {
        reject(`INVALID USER NAME OR PASSWARD`)
      }
    }, 2000)
  })
    .then(res => {
      Swal.fire({
        title: res,
      })
    })
    .catch(rej => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: rej,
      })
    })
    .finally(fin => {
      eve.target.reset()
    });


}



// btnclick.addEventListener('click' , onclickhandler)
singinform.addEventListener("submit", submitevehandle)

  // Swal.fire({
  //   icon: 'error',
  //   title: 'Oops...',
  //   text: 'chake email or password',
  //   timer: 1500
  // })
