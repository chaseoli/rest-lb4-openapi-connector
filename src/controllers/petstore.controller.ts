// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {get, param, Response} from '@loopback/rest';
import {Pet, Petstore} from '../services';

// import {inject} from '@loopback/core';


export class PetstoreController {
  constructor(@inject('services.PetstoreService') public petstoreService: Petstore) { }

  @get('/pets/{petId}', {
    responses: {
      '200': {
        description: 'Pet model instance',
      },
    },
  })
  async findPetById(@param.path.number('petId') petId: number): Promise<Response<Pet>> {
    // wrap the parameters in a JSON object
    const response = await this.petstoreService.getPetById(petId);
    // we normally only return the response body
    console.log(response);

    return response;
  }
}

