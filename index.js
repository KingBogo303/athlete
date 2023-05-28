// var toastElList = [].slice.call(document.querySelectorAll('.toast'))
// var toastList = toastElList.map(function (toastEl) {
//   return new bootstrap.Toast(toastEl, option)
// })

const toast = new bootstrap.Toast('.toast')
toast.show()

const end = document.querySelector('.end-continue');
const adjToast = document.querySelector('.be-fix')

end.addEventListener('click', ()=>{
    adjToast.classList.add('hide')
})