import React from 'react'

function EmptyCart() {
    return (
        <div>
            <div class="EmpCart mt-5"><img src="https://www.1mg.com/images/online_consultation/empty-cart-icon.svg" width="130px" alt="" /><h5 class="my-4">Oops!</h5>
            <p>Looks like there is no item in your cart yet.</p><button class="btn btn-danger py-2   fs-6 fw-normal">ADD MEDICINES </button></div>
        </div>
    )
}

export default EmptyCart
