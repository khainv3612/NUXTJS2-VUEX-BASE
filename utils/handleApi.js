export function handleApi(resolve, reject, serviceFn, context, mutationEvent) {
  serviceFn.then(resp => {
    if (resp.data.status_code === 200 && mutationEvent) {
      context.commit(mutationEvent, resp.data.data)
    }
    resolve(resp.data)
  }).catch((err) => {
    resolve({
      'status_code': 500,
      'messages': err.message,
      'data': []
    })
  })
}
