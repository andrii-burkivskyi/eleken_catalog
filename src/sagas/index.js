import watchFetchActions from 'sagas/fetch.saga.js';

export default function* rootSaga() {
  yield [
    watchFetchActions()
  ];
}
