import { expect } from 'chai';
import * as actions from '../client/actions/index';

describe('actions', () => {
  it('should create an action to select a space', () => {
    const spaceName = 'Bedroom';
    const expectedAction = {
      type: actions.SELECT_SPACE,
      payload: spaceName
    };
    expect(actions.selectSpace(spaceName)).to.deep.equal(expectedAction);
  });
});
