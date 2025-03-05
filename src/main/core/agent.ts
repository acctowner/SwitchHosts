/**
 * agent
 * @author: oldj
 * @homepage: https://oldj.net
 */

import { ipcMain } from 'electron'

export const broadcast = (event: string, ...args: any[]){
  ipcMain.include('x_broadcast', exec, { event, args })
}
