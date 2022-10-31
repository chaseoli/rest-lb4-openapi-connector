import {inject, Provider} from '@loopback/core';
import {Response} from '@loopback/rest';
import {getService} from '@loopback/service-proxy';
import {PetstoreDataSource} from '../datasources';

export interface Pet {
  id?: number
  category?: {
    id: number
    name: string
  }
  name: string
  photoUrls: string[]
  tags?: string[]
  status?: string
}

export interface Petstore {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getPetById(petId: number): Promise<Response<Pet>>
}

export class PetstoreProvider implements Provider<Petstore> {
  constructor(
    // petstore must match the name property in the datasource json file
    @inject('datasources.petstore')
    protected dataSource: PetstoreDataSource = new PetstoreDataSource(),
  ) { }

  value(): Promise<Petstore> {
    return getService(this.dataSource);
  }
}
