import Product from '@vue-storefront/store/types/product/Product'

import CartItemOption from './CartItemOption'
import CartItemTotals from './CartItemTotals'

export default interface CartItem extends Product {
    qty: number,
    options: CartItemOption[],
    totals: CartItemTotals,
    server_item_id: number,
    server_cart_id: any
}
