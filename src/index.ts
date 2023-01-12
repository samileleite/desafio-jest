import { DatabaseProducts } from './classes/database-products';
import { Sale } from './classes/sale';
import { calculateDiscountService } from './services/calculateDiscountService';
import { calculateShippingService } from './services/calculateShippingService';
import { getRegionService } from './services/getRegionService';
import { getStateService } from './services/getStateService';

function VirtualStore() {
  const products = new DatabaseProducts().getDatabaseProducts(['1', '2'])
  var state: string = ''
  new Sale('client', '30350040', products)
  const priceWithDiscount = calculateDiscountService(products)
    getStateService().then(res => { state = res })
    // console.log(state)
  try {
    if (priceWithDiscount) {
      const region = getRegionService(state)
      const totalPrice = priceWithDiscount + calculateShippingService(priceWithDiscount, region)
      console.log(totalPrice)
      return totalPrice
    }
  } catch (error) {
    throw new Error('Erro');

  }

}

