// import { regionsTable } from "../src/mocks/regionsTable"

import { regionsTable } from "../mocks/regionsTable"

export function getRegionService(uf: string): string | undefined {
  const find = regionsTable.find(item => item.uf === uf)
  return find?.region
}