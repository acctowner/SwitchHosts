/**
 * @author: oldj
 * @homepage: https://oldj.net
 */

import { cfgdb } from '@main/data'
import default_configs, { ConfigsType } from '@common/default_configs'

export default async (): Promise<ConfigsType> {
  if (!default_configs.global && global.system_global) {
    default_configs.locale = global.system_global
  }

  let cfgs: Partial<ConfigsType> = await cfgdb.dict.cfg.all()
  return Object.assign({}, default_configs, cfgs)
}
