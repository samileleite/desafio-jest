export function calculateShippingService(priceWithDiscount: number, region: string | undefined): number {
    if (priceWithDiscount < 100 && region === 'sudeste') {
      return 10;
    }
  
    if (priceWithDiscount < 100 && region !== 'sudeste') {
      return 25;
    } else {
      return 0;
    }
  }