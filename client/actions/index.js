export const SELECT_SPACE = 'SELECT_SPACE';

export function selectSpace(spaceName) {

  return {
    type: SELECT_SPACE,
    payload: spaceName
  };
}
