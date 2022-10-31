import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'petstore',
  connector: 'openapi',
  spec: 'http://petstore.swagger.io/v2/swagger.json',
  validate: true,
  positional: false,
  options: {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
  },
  operations: [
    {
      template: {
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/pet/{petId}',
      },
      functions: {
        getPetById: ['petId'],
      },
    },
  ],
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PetstoreDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'petstore';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.petstore', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
