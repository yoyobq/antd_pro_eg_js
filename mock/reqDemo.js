const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default {
  // 响应来自 /api/reqDemo 的 post 方式的请求
  'POST /api/reqDemo': async (req, res) => {
    // 获取 request 中携带的发起 request 时间的数据，
    // 也就是 req.body.reqTime 请注意这种解构赋值的写法
    const { reqTime } = req.body;

    await waitTime(2000);

    res.status(200).send({
      success: true,
      data: {
        // 除了 request 发起时间外
        reqTime,
        // response 的数据中还带上了 response 发送时的数据
        resTime: Date.now(),
      },
    });
  },
};
