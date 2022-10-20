export type ActionsType = ReturnType<typeof templateAC>;

export const templateAC = (param: any /*mast specify type*/) =>
  ({
    type: "[FEATURE-TEMPLATE]/[ACTION]", //FEATURE-TEMPLATE - name of this feature
    param, //optional
  } as const);
