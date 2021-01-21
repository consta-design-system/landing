import { withNaming } from '@bem-react/classname';
import {
  ActionCreator,
  declareAction,
  declareAtom as reatomDeclareAtom,
  PayloadActionCreator,
  Store,
} from '@reatom/core';

export const n = withNaming({ n: '', e: '/', m: '_' });

type AsyncActionCreator<DATA> = {
  start: ActionCreator<string>;
  success: PayloadActionCreator<DATA | null, string>;
  failure: ActionCreator<string>;
  finally: ActionCreator<string>;
};

export function declareAsyncAction<DATA = undefined>(actionName: string): AsyncActionCreator<DATA> {
  return {
    start: declareAction(`${actionName}_start`),
    success: declareAction<DATA | null>(`${actionName}_success`),
    failure: declareAction(`${actionName}_failure`),
    finally: declareAction(`${actionName}_finally`),
  };
}

export function declareLoadingAtom<DATA>(
  atomName: string,
  asyncActionCreator: AsyncActionCreator<DATA>,
) {
  return reatomDeclareAtom<boolean>(atomName, false, (on) => [
    on(asyncActionCreator.start, () => true),
    on(asyncActionCreator.finally, () => false),
  ]);
}

export function declareDataAtom<DATA>(
  atomName: string,
  asyncActionCreator: AsyncActionCreator<DATA>,
) {
  return reatomDeclareAtom<DATA | null>(atomName, null, (on) => [
    on(asyncActionCreator.success, (store, data) => data),
  ]);
}

export function createFetchAction<DATA, PARAMS>(
  actionName: string,
  f: (
    params: PARAMS,
  ) => Promise<
    | {
        data: DATA | null;
        headers: Headers;
        status: number;
        error?: undefined;
        url?: undefined;
      }
    | {
        error: string;
        status: number;
        headers: Headers;
        url: string;
        data?: undefined;
      }
  >,
) {
  const asyncActions = declareAsyncAction<DATA>(actionName);
  return [
    asyncActions,
    declareAction(actionName, async (payload: PARAMS, store: Store) => {
      try {
        store.dispatch(asyncActions.start());
        const response = await f(payload);
        if (response.data) {
          store.dispatch(asyncActions.success(response.data));
          return response;
        }
      } catch (error) {
        store.dispatch(asyncActions.failure());
      } finally {
        store.dispatch(asyncActions.finally());
      }
    }),
  ] as const;
}

export function declareFetchAction<PARAMS>(
  actionName: string,
  func: (params: PARAMS) => Promise<Response>,
) {
  return declareAction(actionName, async (params: PARAMS) => {
    const response = await func(params);
    console.log(response.json());
  });
}
