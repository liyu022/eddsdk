/*
 * @Author: liyu 549277739@qq.com
 * @Date: 2024-08-11 13:59:32
 * @LastEditTime: 2024-08-15 10:35:50
 * @Description:
 * Copyright (c) 2024 by EEDSDK, All Rights Reserved.
 */
import express from 'express'
import portfinder from 'portfinder'
import fse from 'fs-extra'
import shell from 'shelljs'
import chalk from 'chalk'

export default function start () {
  let dist = 'dist'
  const server = express()
  portfinder.setBasePort(8081)
  fse.exists(dist, (exists) => {
    if (exists) {
      portfinder.getPort((err, port) => {
        server.listen(port)
        shell.echo('\nExamples running at: ')
        shell.echo('- Local:  ' + chalk.yellow(`http://localhost:${port}`))
        shell.echo('\n')
        server.use('/eddsdk/', express.static(dist))
        server.use(express.static('examples'))
      })
    } else {
      shell.echo(chalk.red(`please run build first`))
    }
  })
}
