import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { DatabaseMock } from './classes/database-products';
import { Sale } from './classes/sale';
import { DatabaseProductsInterface } from './interfaces/database-products-interface';

const regionsTable = [
  {
    uf: 'AM',
    region: 'norte',
  },
  {
    uf: 'RR',
    region: 'norte',
  },
  {
    uf: 'AP',
    region: 'norte',
  },
  {
    uf: 'PA',
    region: 'norte',
  },
  {
    uf: 'TO',
    region: 'norte',
  },
  {
    uf: 'RO',
    region: 'norte',
  },
  {
    uf: 'AC',
    region: 'norte',
  },
  {
    uf: 'MA',
    region: 'nordeste',
  },
  {
    uf: 'PI',
    region: 'nordeste',
  },
  {
    uf: 'CE',
    region: 'nordeste',
  },
  {
    uf: 'RN',
    region: 'nordeste',
  },
  {
    uf: 'PE',
    region: 'nordeste',
  },
  {
    uf: 'PB',
    region: 'nordeste',
  },
  {
    uf: 'SE',
    region: 'nordeste',
  },
  {
    uf: 'AL',
    region: 'nordeste',
  },
  {
    uf: 'BA',
    region: 'nordeste',
  },
  {
    uf: 'MT',
    region: 'centro-oeste',
  },
  {
    uf: 'MS',
    region: 'centro-oeste',
  },
  {
    uf: 'GO',
    region: 'centro-oeste',
  },
  {
    uf: 'SP',
    region: 'sudeste',
  },
  {
    uf: 'RJ',
    region: 'sudeste',
  },
  {
    uf: 'ES',
    region: 'sudeste',
  },
  {
    uf: 'MG',
    region: 'sudeste',
  },
  {
    uf: 'PR',
    region: 'sul',
  },
  {
    uf: 'RS',
    region: 'sul',
  },
  {
    uf: 'SC',
    region: 'sul',
  },
]

export class virtualStore {
  constructor() { }
  public calculate() {
    const products = new DatabaseMock().getDatabaseProducts(['1', '2'])
    var state: string = ''
    new Sale('client', '30350040', products)
    const priceWithDiscount = calculateDiscount(products)
    getState().then(res => { state = res })
    try {
      if (priceWithDiscount) {
        const region = getRegion(state)
        const totalPrice = priceWithDiscount + calculateShipping(priceWithDiscount, region)
        console.log(totalPrice)
        return totalPrice
      }
    } catch (error) {
      throw new Error('Erro');

    }
  }

}

//calculando desconto
function calculateDiscount(products: DatabaseProductsInterface[]): number {
  var sumPrice = products.reduce(function (accumulator, object) {
    return accumulator + object.price
  }, 0)

  if (products.length === 2) {
    return sumPrice * 0.9

  }
  if (products.length >= 3) {
    return sumPrice * 0.9
  } else {
    return sumPrice
  }
}

//pesquisando estado
async function getState(): Promise<string> {
  const httpService = new HttpService()
  try {
    const { data: response } = await firstValueFrom(httpService.get(process.env.FIND_STATE_API as string))
    console.log(response)
    return response.uf
  } catch (error) {
    throw new Error('erro na requisição http');
  }
}

//pesquisando regiao
function getRegion(uf: string): string | undefined {
  const find = regionsTable.find(item => item.uf === uf)
  return find?.region
}

//calculando frete
function calculateShipping(priceWithDiscount: number, region: string | undefined): number {
  if (priceWithDiscount < 100 && region === 'sudeste') {
    return 10;
  }

  if (priceWithDiscount < 100 && region !== 'sudeste') {
    return 25;
  } else {
    return 0;
  }
}
