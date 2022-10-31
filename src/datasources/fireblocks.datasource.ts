import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'fireblocks',
  connector: 'openapi',
  spec: 'https://docs.fireblocks.com/api/v1/swagger',
  validate: false,
  positional: false
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class FireblocksDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'fireblocks';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.fireblocks', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
