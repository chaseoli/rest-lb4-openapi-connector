// Uncomment these imports to begin using these cool features!

import {service} from '@loopback/core';
import {get, param} from '@loopback/rest';
import {Pet, Petstore, PetstoreProvider} from '../services';

// import {inject} from '@loopback/core';


export class PetstoreController {
  constructor(@service(PetstoreProvider) public petstoreService: Petstore) { }

  @get('/pets/{petId}', {
    responses: {
      '200': {
        description: 'Pet model instance',
      },
    },
  })
  async findPetById(@param.path.number('petId') petId: number): Promise<Pet | undefined> {
    try {

      // wrap the parameters in a JSON object
      const response = await this.petstoreService.getPetById({petId: petId});
      // we normally only return the response body
      console.log(response);

      return response;
    } catch (error) {
      console.log(error);
      return undefined
    }
  }
}

